import type { Metadata } from "next";
import { buildMeta } from "@/lib/metadata";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { realisations } from "@/data/realisations";
import { IMG } from "@/lib/images";
import ImageCarousel from "@/components/ImageCarousel";

export const metadata: Metadata = buildMeta({
  title: "Réalisations Débarras Lyon — Avant & Après",
  description:
    "Découvrez nos réalisations de débarras à Lyon : photos avant/après, types d'interventions, volumes traités. Plus de 1 200 débarras réalisés en 10 ans.",
  path: "/realisations",
});

export default function RealisationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMG.heroes.realisations}
            alt=""
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-dark/65" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <span className="badge mb-5">Nos chantiers</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Nos réalisations{" "}
              <span className="text-brand-400">avant / après</span>
            </h1>
            <p className="mt-5 text-gray-300/90 text-lg leading-relaxed">
              Plus de 1 200 interventions réalisées à Lyon et dans le Grand Lyon. Découvrez quelques-unes de nos transformations.
            </p>
          </div>
        </div>
      </section>

      {/* Diaporama galerie */}
      <section className="bg-white pt-12 pb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImageCarousel
            slides={[
              { src: IMG.galerie[0], alt: "Mobilier ancien à évacuer — débarras vide maison Lyon", caption: "Vide maison — mobilier et encombrants à évacuer" },
              { src: IMG.galerie[1], alt: "Pièce chargée avant débarras — meubles et objets divers", caption: "Avant intervention — logement à débarrasser" },
              { src: IMG.galerie[2], alt: "Encombrants à trier — débarras appartement Lyon", caption: "Tri et valorisation des objets récupérables" },
              { src: IMG.galerie[3], alt: "Appartement vidé et propre après débarras", caption: "Après intervention — espace libéré" },
              { src: IMG.galerie[4], alt: "Mobilier de succession — débarras discret à Lyon", caption: "Succession — intervention rapide et discrète" },
              { src: IMG.galerie[5], alt: "Logement remis en état après débarras MiKa", caption: "Résultat final — logement prêt à remettre" },
            ]}
            aspectRatio="aspect-[16/6]"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: "1 200+", label: "Interventions" },
              { value: "500+", label: "Vides maison" },
              { value: "300+", label: "Vides cave" },
              { value: "98%", label: "Clients satisfaits" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="text-3xl md:text-4xl font-bold text-brand-600 tracking-tight">{stat.value}</div>
                <div className="text-gray-500 text-sm mt-1.5 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Réalisations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {realisations.map((real) => (
              <div key={real.id} className="card overflow-hidden p-0">
                {/* Avant/Après visuel */}
                <div className="grid grid-cols-2 h-52">
                  <div className="relative border-r border-gray-100">
                    <Image
                      src={real.avant}
                      alt={`Avant débarras — ${real.titre} à ${real.lieu}`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 z-10 bg-red-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-md tracking-wide">
                      AVANT
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src={real.apres}
                      alt={`Après débarras — ${real.titre} à ${real.lieu} — espace libéré`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover"
                    />
                    <div className="absolute top-3 right-3 z-10 bg-green-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-md tracking-wide">
                      APRÈS
                    </div>
                  </div>
                </div>
                {/* Info */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h2 className="font-bold text-gray-900">{real.titre}</h2>
                    <span className="text-xs text-gray-400 flex-shrink-0 bg-gray-50 px-2 py-0.5 rounded-md border border-gray-100">{real.lieu}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{real.description}</p>
                  <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                    {[
                      { label: "Durée", val: real.duree },
                      { label: "Volume", val: real.volume },
                      { label: "Type", val: real.type },
                    ].map(({ label, val }) => (
                      <div key={label} className="flex-1 text-center bg-gray-50 rounded-lg py-2 px-1">
                        <span className="text-[10px] text-gray-400 uppercase tracking-wide font-medium block">{label}</span>
                        <span className="text-xs font-semibold text-gray-700 mt-0.5 block">{val}</span>
                      </div>
                    ))}
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Votre débarras, notre prochain chantier
          </h2>
          <p className="text-orange-100/80 text-lg mb-10">
            Contactez-nous pour un devis gratuit et rejoignez nos 1 200+ clients satisfaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+33612345678" className="btn-phone">
              <Phone className="w-5 h-5" />
              06 12 34 56 78
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
