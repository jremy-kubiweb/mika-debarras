"use client";

import { useId, useState } from "react";
import { Send, CheckCircle2, Phone, Lock } from "lucide-react";
import { serviceOptions } from "@/components/ContactForm";

type Props = {
  source: string;
  title?: string;
  subtitle?: string;
  layout?: "stack" | "inline";
  className?: string;
};

const fieldClass =
  "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white placeholder:text-gray-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none text-sm transition-all";

export default function QuickQuoteForm({ source, title, subtitle, layout = "stack", className = "" }: Props) {
  const uid = useId();
  const [form, setForm] = useState({ nom: "", telephone: "", email: "", service: "", ville: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, message: `Demande de rappel envoyée depuis : ${source}` }),
      });
      const text = await res.text();
      const data = text ? JSON.parse(text) : {};
      if (!res.ok) throw new Error(data.error || "Erreur lors de l'envoi.");
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Erreur lors de l'envoi. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  const inline = layout === "inline";

  if (submitted) {
    return (
      <div className={`bg-white rounded-3xl shadow-2xl p-7 text-center ${className}`}>
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <CheckCircle2 className="w-7 h-7 text-green-600" />
        </div>
        <p className="text-lg font-bold text-gray-900">
          Merci{form.nom ? ` ${form.nom.split(" ")[0]}` : ""}, c&apos;est bien reçu !
        </p>
        <p className="text-gray-500 text-sm mt-1">
          Un membre de notre équipe vous rappelle sous 24h pour organiser la visite gratuite.
        </p>
        <a href="tel:+33623136783" className="inline-flex items-center gap-2 mt-4 text-green-700 font-semibold text-sm">
          <Phone className="w-4 h-4" /> Pressé ? Appelez le 06 23 13 67 83
        </a>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-3xl shadow-2xl ${inline ? "p-4 sm:p-5" : "p-6 sm:p-7"} ${className}`}>
      {title && <p className="text-xl font-bold text-gray-900">{title}</p>}
      {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}

      <form
        onSubmit={handleSubmit}
        className={
          inline
            ? `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(5,minmax(0,1fr))_auto] gap-3 ${title || subtitle ? "mt-4" : ""}`
            : "mt-5 space-y-3"
        }
      >
        <div>
          <label htmlFor={`${uid}-nom`} className="sr-only">Nom & prénom</label>
          <input id={`${uid}-nom`} type="text" name="nom" required autoComplete="name" value={form.nom} onChange={handleChange} placeholder="Votre nom *" className={`${fieldClass} text-gray-900`} />
        </div>
        <div>
          <label htmlFor={`${uid}-tel`} className="sr-only">Téléphone</label>
          <input id={`${uid}-tel`} type="tel" name="telephone" required autoComplete="tel" value={form.telephone} onChange={handleChange} placeholder="Votre téléphone *" className={`${fieldClass} text-gray-900`} />
        </div>
        <div>
          <label htmlFor={`${uid}-email`} className="sr-only">Adresse e-mail</label>
          <input id={`${uid}-email`} type="email" name="email" autoComplete="email" value={form.email} onChange={handleChange} placeholder="Votre e-mail" className={`${fieldClass} text-gray-900`} />
        </div>
        <div>
          <label htmlFor={`${uid}-service`} className="sr-only">Type de débarras</label>
          <select id={`${uid}-service`} name="service" required value={form.service} onChange={handleChange} className={`${fieldClass} ${form.service ? "text-gray-900" : "text-gray-400"}`}>
            <option value="">Type de débarras *</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s} className="text-gray-900">{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={`${uid}-ville`} className="sr-only">Ville d&apos;intervention</label>
          <input id={`${uid}-ville`} type="text" name="ville" required autoComplete="address-level2" value={form.ville} onChange={handleChange} placeholder="Ville *" className={`${fieldClass} text-gray-900`} />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`btn-primary justify-center whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed ${inline ? "py-3" : "w-full text-base py-4"}`}
        >
          <Send className="w-5 h-5" />
          {loading ? "Envoi…" : "Être rappelé gratuitement"}
        </button>

        {error && (
          <div className={`bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3 ${inline ? "sm:col-span-2 lg:col-span-3 xl:col-span-6" : ""}`}>
            {error}
          </div>
        )}
      </form>

      <p className={`flex items-center gap-1.5 text-xs text-gray-400 mt-3 ${inline ? "" : "justify-center"}`}>
        <Lock className="w-3.5 h-3.5" /> Gratuit · Sans engagement · Rappel sous 24h
      </p>
    </div>
  );
}
