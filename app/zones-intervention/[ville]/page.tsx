import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, ArrowRight, CheckCircle2, Clock, Truck, Leaf } from "lucide-react";
import { IMG } from "@/lib/images";
import { zones, getZoneBySlug, getVoisines } from "@/data/zones";
import { services } from "@/data/services";
import { buildMeta } from "@/lib/metadata";

interface Props {
  params: { ville: string };
}

export async function generateStaticParams() {
  return zones.map((zone) => ({ ville: zone.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const zone = getZoneBySlug(params.ville);
  if (!zone) return {};
  return buildMeta({
    title: `Débarras ${zone.nom} — Vide Maison & Cave | MiKa Débarras`,
    description: `MiKa Débarras intervient à ${zone.nom} (${zone.codePostal}) pour tous vos débarras : vide maison, vide cave, succession. Devis gratuit sous 24h, intervention sous 48h.`,
    path: `/zones-intervention/${zone.slug}`,
  });
}

export default function VillePage({ params }: Props) {
  const zone = getZoneBySlug(params.ville);
  if (!zone) notFound();

  const voisines = getVoisines(zone);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `MiKa Débarras ${zone.nom}`,
    description: zone.description,
    url: `https://www.mika-debarras.fr/zones-intervention/${zone.slug}`,
    telephone: "+33612345678",
    areaServed: {
      "@type": "City",
      name: zone.nom,
      postalCode: zone.codePostal,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: zone.nom,
      postalCode: zone.codePostal,
      addressCountry: "FR",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero local */}
      <section className="relative bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMG.heroes.ville}
            alt=""
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-dark/65" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="badge">
                <MapPin className="w-3.5 h-3.5" /> {zone.nom} — {zone.codePostal}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Débarras professionnel à{" "}
              <span className="text-brand-400">{zone.nom}</span>
            </h1>
            <p className="mt-4 text-gray-300 text-lg leading-relaxed">
              {zone.description} Devis gratuit sous 24h, intervention rapide, équipe professionnelle et assurée.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="tel:+33612345678" className="btn-phone text-sm">
                <Phone className="w-4 h-4" />
                06 12 34 56 78
              </a>
              <Link href="/contact" className="btn-secondary text-sm">
                Devis gratuit à {zone.nom}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Réassurance locale */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Clock, label: "Devis sous 24h", desc: `Réponse rapide pour ${zone.nom}` },
              { icon: Truck, label: "Intervention rapide", desc: "Disponible sous 48h" },
              { icon: Leaf, label: "Éco-responsable", desc: "Tri et recyclage systématiques" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 gradient-brand rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{item.label}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services à la ville */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-title">Nos services de débarras à {zone.nom}</h2>
            <p className="section-subtitle mx-auto mt-3">
              Toutes nos prestations sont disponibles à {zone.nom} et ses environs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <div key={service.slug} className="bg-white rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.05)] overflow-hidden">
                <div className="relative h-32 w-full">
                  <Image
                    src={service.image}
                    alt={`${service.titre} à ${zone.nom}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1.5">
                    {service.titre} à {zone.nom}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{service.description}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-brand-600 text-sm font-semibold">{service.prix}</span>
                    <Link href="/contact" className="text-brand-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                      Devis <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir localement */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-title">
              Pourquoi choisir MiKa Débarras à {zone.nom} ?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              `Connaissance du terrain à ${zone.nom} et ses accès`,
              "Devis gratuit sur place, réponse sous 24h",
              "Équipe professionnelle, discrète et assurée",
              "Tri éco-responsable : don, recyclage, déchèterie agréée",
              "Tarifs transparents, sans surprise",
              `Disponibles du lundi au samedi à ${zone.nom}`,
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 bg-gray-50">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Villes voisines */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Débarras dans les villes proches de {zone.nom}
          </h2>
          <p className="text-gray-500 text-sm mb-5">
            MiKa Débarras intervient également dans les communes voisines.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {voisines.map((v) => (
              <Link
                key={v.slug}
                href={`/zones-intervention/${v.slug}`}
                className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-brand-400 hover:shadow-sm transition-all group"
              >
                <div className="w-8 h-8 gradient-brand rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm group-hover:text-brand-600 transition-colors">
                    Débarras {v.nom}
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">{v.codePostal}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-brand-400 ml-auto self-center transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Liens services */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Nos services disponibles à {zone.nom}
          </h2>
          <p className="text-gray-500 text-sm mb-5">
            Tous nos services de débarras sont proposés à {zone.nom} et ses alentours.
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services#${s.slug}`}
                className="flex items-center gap-1.5 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-700 font-medium hover:bg-brand-50 hover:border-brand-300 hover:text-brand-700 transition-all"
              >
                {s.titre}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
          <Link
            href="/services"
            className="text-brand-600 hover:text-brand-700 text-sm font-medium flex items-center gap-1.5"
          >
            Voir tous nos services en détail
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Lien contact dédié */}
      <section className="py-10 bg-brand-50 border-t border-brand-100">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-gray-900">
                Besoin d&apos;un débarras à {zone.nom} ?
              </p>
              <p className="text-gray-600 text-sm mt-0.5">
                Devis gratuit en 24h, intervention possible sous 48h.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a href="tel:+33612345678" className="btn-phone text-sm">
                <Phone className="w-4 h-4" />
                06 12 34 56 78
              </a>
              <Link href="/contact" className="btn-primary text-sm">
                Demander un devis
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-brand">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Débarras à {zone.nom} — Devis gratuit
          </h2>
          <p className="text-orange-100 mb-8">
            Contactez MiKa Débarras pour votre débarras à {zone.nom}. Réponse sous 24h, intervention sous 48h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+33612345678" className="btn-phone">
              <Phone className="w-5 h-5" />
              06 12 34 56 78
            </a>
            <Link href="/contact" className="border-2 border-white text-white font-bold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              Devis en ligne
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
