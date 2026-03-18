"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, CheckCircle2, ArrowRight } from "lucide-react";

const serviceOptions = [
  "Vide Maison",
  "Vide Appartement",
  "Vide Cave",
  "Vide Grenier",
  "Succession & Héritage",
  "Débarras Bureau / Local",
  "Autre",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    service: "",
    ville: "",
    message: "",
    urgence: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
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

  if (submitted) {
    return (
      <div className="card flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Message envoyé !</h2>
        <p className="text-gray-600 max-w-sm">
          Merci pour votre demande. Notre équipe vous contactera sous 24h pour convenir d&apos;une visite gratuite.
        </p>
        <Link href="/" className="mt-6 btn-primary text-sm">
          Retour à l&apos;accueil
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="card">
      <h2 className="font-bold text-gray-900 text-xl mb-6">
        Formulaire de demande de devis
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Nom & Prénom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="nom"
              required
              value={form.nom}
              onChange={handleChange}
              placeholder="Jean Dupont"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none text-sm transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Téléphone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="telephone"
              required
              value={form.telephone}
              onChange={handleChange}
              placeholder="06 23 13 67 83"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none text-sm transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jean.dupont@email.fr"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none text-sm transition-all"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Type de débarras <span className="text-red-500">*</span>
            </label>
            <select
              name="service"
              required
              value={form.service}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none text-sm transition-all bg-white"
            >
              <option value="">Sélectionnez…</option>
              {serviceOptions.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Ville d&apos;intervention <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="ville"
              required
              value={form.ville}
              onChange={handleChange}
              placeholder="Lyon, Villeurbanne…"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none text-sm transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Description du besoin
          </label>
          <textarea
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="Décrivez votre besoin : surface approximative, type d'objets, accès (ascenseur, escalier…), délai souhaité…"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none text-sm transition-all resize-none"
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="urgence"
            name="urgence"
            checked={form.urgence}
            onChange={handleChange}
            className="w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
          />
          <label htmlFor="urgence" className="text-sm text-gray-700">
            Intervention urgente souhaitée (sous 48h)
          </label>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
            {error}
          </div>
        )}
        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full justify-center text-base py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <svg className="animate-spin w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Envoi en cours…
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Envoyer ma demande de devis
              </>
            )}
          </button>
          <p className="text-center text-xs text-gray-400 mt-3">
            Vos données sont traitées conformément à notre{" "}
            <Link href="/politique-confidentialite" className="underline hover:text-gray-600">
              politique de confidentialité
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
