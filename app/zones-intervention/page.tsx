import type { Metadata } from "next";
import { buildMeta } from "@/lib/metadata";
import Link from "next/link";
import Image from "next/image";
import { IMG } from "@/lib/images";
import { MapPin, ArrowRight, Phone, CheckCircle2, Users } from "lucide-react";
import { zones } from "@/data/zones";

export const metadata: Metadata = buildMeta({
  title: "Zones d'Intervention Débarras — 111 villes autour de Lyon",
  description:
    "MiKa Débarras intervient dans 111 communes dans un rayon de 40 km autour de Lyon : Grand Lyon, Ain, Isère, Loire. Devis gratuit sous 24h.",
  path: "/zones-intervention",
});

export default function ZonesPage() {
  const totalPop = zones.reduce((sum, z) => sum + (z.population || 0), 0);

  const zonesTriees = [...zones].sort((a, b) =>
    a.nom.localeCompare(b.nom, "fr")
  );

  const lettres = Array.from(
    new Set(zonesTriees.map((z) => z.nom[0].toUpperCase()))
  ).sort();

  const depts = [
    { code: "69", label: "Rhône & Métropole de Lyon" },
    { code: "01", label: "Ain" },
    { code: "38", label: "Isère" },
    { code: "42", label: "Loire" },
    { code: "71", label: "Saône-et-Loire" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image src={IMG.heroes.zones} alt="" fill className="object-cover opacity-50" priority />
        </div>
        <div className="absolute inset-0 bg-dark/65" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-2xl">
            <span className="badge mb-5">
              <MapPin className="w-3.5 h-3.5" /> Couverture géographique
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Débarras dans{" "}
              <span className="text-brand-400">111 communes</span>
              <br />autour de Lyon
            </h1>
            <p className="mt-4 text-gray-300 text-lg leading-relaxed">
              MiKa Débarras intervient dans un rayon de 40 km autour d'Irigny dans le Rhône, l'Ain, l'Isère et la Loire.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "111", label: "Communes couvertes" },
              { value: "40 km", label: "Rayon d'intervention" },
              { value: `${Math.round(totalPop / 1000)} 000+`, label: "Habitants desservis" },
              { value: "5 depts", label: "Rhône, Ain, Isère, Loire, S-et-L" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold text-brand-600">{s.value}</p>
                <p className="text-sm text-gray-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Départements rapides */}
      <section className="bg-gray-50 border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide mr-2">Départements :</span>
            {depts.map((d) => (
              <span key={d.code} className="px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-medium text-gray-700">
                {d.code} – {d.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation alphabétique */}
      <section className="bg-white sticky top-[72px] z-30 border-b border-gray-100 shadow-sm py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-1">
            {lettres.map((l) => (
              <a
                key={l}
                href={`#lettre-${l}`}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-sm font-bold text-gray-500 hover:bg-brand-50 hover:text-brand-600 transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Listing alphabétique */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {lettres.map((lettre) => {
            const villesDuGroupe = zonesTriees.filter(
              (z) => z.nom[0].toUpperCase() === lettre
            );
            return (
              <div key={lettre} id={`lettre-${lettre}`}>
                {/* En-tête lettre */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 gradient-brand rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <span className="text-white font-bold text-sm">{lettre}</span>
                  </div>
                  <div className="flex-1 h-px bg-gray-200" />
                  <span className="text-xs text-gray-400">{villesDuGroupe.length} commune{villesDuGroupe.length > 1 ? "s" : ""}</span>
                </div>

                {/* Grille de villes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                  {villesDuGroupe.map((zone) => (
                    <Link
                      key={zone.slug}
                      href={`/zones-intervention/${zone.slug}`}
                      className="flex items-center justify-between bg-white border border-gray-100 rounded-xl px-4 py-3 hover:border-brand-300 hover:shadow-sm hover:bg-brand-50/30 transition-all group"
                    >
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-900 text-sm group-hover:text-brand-700 transition-colors truncate">
                          {zone.nom}
                        </p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-xs text-gray-400">{zone.codePostal}</span>
                          {zone.population && (
                            <>
                              <span className="text-gray-200">·</span>
                              <span className="flex items-center gap-0.5 text-xs text-gray-400">
                                <Users className="w-3 h-3" />
                                {zone.population.toLocaleString("fr-FR")}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-brand-400 flex-shrink-0 ml-2 group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA bas de page */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-50 border border-brand-100 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-bold text-gray-900 text-lg">Votre ville n'est pas dans la liste ?</p>
              <p className="text-gray-600 text-sm mt-1">
                Contactez-nous — nous intervenons au-delà de 40 km avec une majoration kilométrique transparente.
              </p>
              <ul className="mt-3 space-y-1">
                {["Déplacement gratuit jusqu'à 40 km", "Intervention possible dans tout le Rhône", "Majoration transparente au-delà"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <a href="tel:+33623136783" className="btn-phone">
                <Phone className="w-4 h-4" />
                06 23 13 67 83
              </a>
              <Link href="/contact" className="btn-secondary text-sm justify-center">
                Devis gratuit <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
