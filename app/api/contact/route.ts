import { Resend } from "resend";
import { NextResponse } from "next/server";

const DESTINATAIRE = "j.remy@kubiweb.fr";

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "Configuration serveur manquante." }, { status: 500 });
    }
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();
    const { nom, email, telephone, service, ville, message, urgence } = body;

    if (!nom || !telephone || !service || !ville) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants." },
        { status: 400 }
      );
    }

    const sujet = `${urgence ? "🚨 URGENT — " : ""}Demande de devis — ${service} à ${ville}`;

    await resend.emails.send({
      from: "MiKa Débarras <onboarding@resend.dev>",
      to: DESTINATAIRE,
      replyTo: email || undefined,
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
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;width:40%;font-weight:600;">Nom</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;">${nom}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-weight:600;">Téléphone</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;"><a href="tel:${telephone}" style="color:#ea580c;">${telephone}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-weight:600;">Email</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;">${email ? `<a href="mailto:${email}" style="color:#ea580c;">${email}</a>` : "—"}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-weight:600;">Service</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;">${service}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-weight:600;">Ville</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;">${ville}</td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding:10px 0;color:#6b7280;font-weight:600;vertical-align:top;">Message</td>
                <td style="padding:10px 0;color:#111827;">${message.replace(/\n/g, "<br>")}</td>
              </tr>` : ""}
            </table>
          </div>
          <p style="text-align:center;color:#9ca3af;font-size:12px;margin-top:16px;">
            Demande reçue via le formulaire mika-debarras.fr
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact/route] Erreur envoi email:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
