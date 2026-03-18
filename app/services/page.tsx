import type { Metadata } from "next";
import { buildMeta } from "@/lib/metadata";
import Link from "next/link";
import Image from "next/image";
import { IMG } from "@/lib/images";
import {
  Home,
  Building2,
  Archive,
  Package,
  Heart,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  Phone,
} from "lucide-react";
import { services } from "@/data/services";

export const metadata: Metadata = buildMeta({
  title: "Services de Débarras à Lyon — Vide Maison, Cave, Appartement",
  description:
    "Découvrez tous les services de débarras de MiKa Débarras à Lyon : vide maison, vide cave, vide appartement, succession, grenier, local professionnel. Devis gratuit sous 24h.",
  path: "/services",
});

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Building2,
  Archive,
  Package,
  Heart,
  Briefcase,
};

const faqs = [
  {
    q: "Combien coûte un débarras à Lyon ?",
    a: "Le tarif dépend du volume, du type de débarras et de l'accessibilité. Nous proposons un devis gratuit et transparent après visite, sans surprise.",
  },
  {
    q: "Dans quel délai pouvez-vous intervenir ?",
    a: "En général sous 48h à 5 jours selon notre planning. Pour les urgences (décès, logement à libérer rapidement), nous faisons notre maximum pour intervenir dans les 24h.",
  },
  {
    q: "Que faites-vous des objets récupérables ?",
    a: "Nous trions systématiquement : les objets en bon état sont donnés à des associations ou remis en vente. Rien n'est jeté inutilement.",
  },
  {
    q: "Débarrassez-vous les objets lourds (piano, coffre, etc.) ?",
    a: "Oui, nous sommes équipés pour gérer tous types d'objets lourds ou encombrants : monte-meubles, sangles, chariots professionnels.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMG.heroes.services}
            alt=""
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-dark/65" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <span className="badge mb-5">Nos prestations</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Services de <span className="text-brand-400">débarras</span> à Lyon
            </h1>
            <p className="mt-5 text-gray-300/90 text-lg leading-relaxed">
              MiKa Débarras intervient pour tous types de débarras dans le Grand Lyon. Devis gratuit, transparent, sans engagement.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="tel:+33623136783" className="btn-phone">
                <Phone className="w-4 h-4" />
                06 23 13 67 83
              </a>
              <Link href="/contact" className="btn-secondary">
                Devis gratuit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10">
            {services.map((service, idx) => {
              const IconComp = iconMap[service.icon] || Home;
              return (
                <div
                  key={service.slug}
                  id={service.slug}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
                >
                  <div className={`card p-8 ${idx % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="w-14 h-14 gradient-brand rounded-2xl flex items-center justify-center mb-5 shadow-lg">
                      <IconComp className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.titre}</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">{service.descriptionLongue}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-brand-600 font-semibold">{service.prix}</span>
                      <Link href="/contact" className="btn-primary text-sm py-2">
                        Demander un devis
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                  <div className={`relative rounded-2xl overflow-hidden aspect-video bg-gray-100 ${idx % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <Image
                      src={service.image}
                      alt={`${service.titre} à Lyon — MiKa Débarras`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      priority={idx === 0}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Garanties */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-title">Pourquoi choisir MiKa Débarras ?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Devis gratuit sous 24h, sans déplacement obligé",
              "Tarifs transparents et contrat écrit avant chaque intervention",
              "Équipe assurée, formée et professionnelle",
              "Tri éco-responsable systématique — zéro gaspillage",
            ].map((label) => (
              <div key={label} className="flex items-center gap-3 p-4 rounded-xl bg-green-50 border border-green-100">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span className="font-medium text-gray-800 text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge mb-3">FAQ</span>
            <h2 className="section-title">Questions fréquentes</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="card">
                <div className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-lg bg-brand-50 border border-brand-100 text-brand-600 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1.5">{faq.q}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-brand">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Prêt à démarrer votre débarras ?</h2>
          <p className="text-orange-100/80 text-lg mb-10">Contactez-nous pour un devis gratuit et sans engagement sous 24h.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+33623136783" className="btn-phone">
              <Phone className="w-5 h-5" />
              06 23 13 67 83
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl transition-all">
              Devis en ligne
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
