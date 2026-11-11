import { Resend } from "resend";
import { NextResponse } from "next/server";

const DESTINATAIRE = "j.remy@kubiweb.fr";
// RESEND_FROM doit utiliser un domaine vérifié dans Resend (ex. "MiKa Débarras <contact@mika-debarras.fr>").
// Sans domaine vérifié, Resend n'autorise que l'envoi vers l'adresse du compte : pas de mail de confirmation au prospect.
const FROM = process.env.RESEND_FROM || "MiKa Débarras <onboarding@resend.dev>";

const escapeHtml = (value: unknown) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const row = (label: string, value: string, last = false) => `
              <tr>
                <td style="padding:10px 0;${last ? "" : "border-bottom:1px solid #f3f4f6;"}color:#6b7280;width:40%;font-weight:600;vertical-align:top;">${label}</td>
                <td style="padding:10px 0;${last ? "" : "border-bottom:1px solid #f3f4f6;"}color:#111827;">${value}</td>
              </tr>`;

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "Configuration serveur manquante." }, { status: 500 });
    }
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();
    const { nom, email, telephone, service, ville, message, urgence } = body;

    if (!nom || !telephone || !ville) {
      return NextResponse.json({ error: "Champs obligatoires manquants." }, { status: 400 });
    }

    const e = {
      nom: escapeHtml(nom),
      email: escapeHtml(email),
      telephone: escapeHtml(telephone),
      service: escapeHtml(service),
      ville: escapeHtml(ville),
      message: escapeHtml(message).replace(/\n/g, "<br>"),
    };
    const emailValide = typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const sujet = `${urgence ? "🚨 URGENT — " : ""}Demande de devis — ${service ? `${service} à ` : ""}${ville}`;

    await resend.emails.send({
      from: FROM,
      to: DESTINATAIRE,
      replyTo: emailValide ? email : undefined,
      subject: sujet,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9fafb;padding:24px;border-radius:12px;">
          <div style="background:#1a1a2e;padding:20px 24px;border-radius:8px 8px 0 0;">
            <h1 style="color:#fb923c;margin:0;font-size:20px;">MiKa Débarras</h1>
            <p style="color:#d1d5db;margin:4px 0 0;font-size:13px;">Nouvelle demande de devis</p>
          </div>
          <div style="background:#ffffff;padding:24px;border-radius:0 0 8px 8px;border:1px solid #e5e7eb;">
            ${urgence ? `<div style="background:#fef2f2;border:1px solid #fecaca;border-radius:8px;padding:12px 16px;margin-bottom:20px;"><strong style="color:#dc2626;">🚨 Intervention urgente demandée (sous 48h)</strong></div>` : ""}
            <table style="width:100%;border-collapse:collapse;font-size:14px;">
              ${row("Nom", e.nom)}
              ${row("Téléphone", `<a href="tel:${e.telephone}" style="color:#ea580c;">${e.telephone}</a>`)}
              ${row("Email", emailValide ? `<a href="mailto:${e.email}" style="color:#ea580c;">${e.email}</a>` : "—")}
              ${row("Service", e.service || "—")}
              ${row("Ville", e.ville, !message)}
              ${message ? row("Message", e.message, true) : ""}
            </table>
          </div>
          <p style="text-align:center;color:#9ca3af;font-size:12px;margin-top:16px;">
            Demande reçue via le formulaire mika-debarras.fr
          </p>
        </div>
      `,
    });

    if (process.env.RESEND_FROM && emailValide) {
      try {
        await resend.emails.send({
          from: FROM,
          to: email,
          replyTo: DESTINATAIRE,
          subject: "MiKa Débarras — nous avons bien reçu votre demande",
          html: `
            <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#111827;font-size:15px;line-height:1.6;">
              <h1 style="color:#ea580c;font-size:20px;">Merci ${e.nom} !</h1>
              <p>Nous avons bien reçu votre demande de devis pour un débarras à <strong>${e.ville}</strong>.</p>
              <p>Un membre de notre équipe vous rappelle <strong>sous 24h</strong> (du lundi au samedi) pour convenir d'une visite gratuite et sans engagement.</p>
              <p>Pour aller plus vite, vous pouvez nous envoyer quelques photos des pièces à vider par WhatsApp au 06 23 13 67 83 ou en répondant à ce mail.</p>
              <p>Besoin urgent ? Appelez-nous au <a href="tel:+33623136783" style="color:#ea580c;">06 23 13 67 83</a>.</p>
              <p style="margin-top:24px;">L'équipe MiKa Débarras<br><a href="https://www.mika-debarras.fr" style="color:#ea580c;">www.mika-debarras.fr</a></p>
            </div>
          `,
        });
      } catch (confirmationError) {
        console.error("[contact/route] Erreur envoi confirmation:", confirmationError);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact/route] Erreur envoi email:", error);
    return NextResponse.json({ error: "Erreur lors de l'envoi. Veuillez réessayer." }, { status: 500 });
  }
}
