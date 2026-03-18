import type { Metadata } from "next";
import { buildMeta } from "@/lib/metadata";
import Link from "next/link";
import Image from "next/image";
import { IMG } from "@/lib/images";
import { MapPin, ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { zones } from "@/data/zones";

export const metadata: Metadata = buildMeta({
  title: "Zones d'Intervention Débarras — Lyon & Grand Lyon",
  description:
    "MiKa Débarras intervient à Lyon et dans toute l'agglomération lyonnaise : Villeurbanne, Vénissieux, Bron, Caluire, Saint-Priest, Meyzieu et plus. Devis gratuit.",
  path: "/zones-intervention",
});

export default function ZonesPage() {
  return (
    <>
      <section className="relative bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMG.heroes.zones}
            alt=""
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-dark/65" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <span className="badge mb-5">
              <MapPin className="w-3.5 h-3.5" /> Couverture géographique
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Débarras dans tout le{" "}
              <span className="text-brand-400">Grand Lyon</span>
            </h1>
            <p className="mt-5 text-gray-300/90 text-lg leading-relaxed">
              MiKa Débarras se déplace dans Lyon et toute son agglomération. Sélectionnez votre commune pour découvrir nos services locaux.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {zones.map((zone) => (
              <Link
                key={zone.slug}
                href={`/zones-intervention/${zone.slug}`}
                className="card group hover:-translate-y-1 transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 gradient-brand rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs text-gray-400 font-medium">{zone.codePostal}</span>
                </div>
                <h2 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-brand-600 transition-colors">
                  {zone.nom}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                  {zone.description}
                </p>
                <div className="mt-3 flex items-center gap-1 text-brand-600 text-sm font-medium">
                  Voir la page locale
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-4">
                Vous ne trouvez pas votre commune ?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Notre zone d'intervention s'étend sur l'ensemble du département du Rhône (69) et des communes limitrophes. Contactez-nous directement pour vérifier si nous pouvons intervenir chez vous.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Intervention possible dans tout le Rhône",
                  "Déplacement gratuit dans un rayon de 40 km",
                  "Au-delà, majoration kilométrique transparente",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+33612345678" className="btn-phone text-sm">
                  <Phone className="w-4 h-4" />
                  06 12 34 56 78
                </a>
                <Link href="/contact" className="btn-secondary text-sm">
                  Devis gratuit
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl aspect-square flex items-center justify-center">
              <div className="text-center px-8">
                <div className="w-20 h-20 bg-white/70 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <MapPin className="w-10 h-10 text-gray-400" />
                </div>
                <p className="text-sm text-gray-400 font-medium">Carte Grand Lyon</p>
                <p className="text-xs text-gray-400 mt-1">Rhône (69)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
