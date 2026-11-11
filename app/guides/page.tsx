import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import HeroQuoteForm from "@/components/HeroQuoteForm";
import { guides } from "@/data/guides";
import { buildMeta } from "@/lib/metadata";

export const metadata: Metadata = buildMeta({
  title: "Guides pratiques du débarras — Prix, succession, vide maison",
  description:
    "Nos guides pour préparer votre débarras à Lyon : prix d'un débarras, vider la maison d'un proche décédé, succession, vide maison avant une vente.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <>
      <section className="relative bg-dark overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="max-w-2xl">
            <span className="badge mb-5">
              <BookOpen className="w-3.5 h-3.5" /> Guides pratiques
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Bien préparer votre <span className="text-brand-400">débarras</span>
            </h1>
            <p className="mt-5 text-gray-300 text-lg leading-relaxed">
              Prix, succession, vente immobilière : nos conseils de professionnels pour aborder votre débarras sereinement.
            </p>
          </div>
          <HeroQuoteForm />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {guides.map((g) => (
            <Link key={g.slug} href={`/guides/${g.slug}`} className="card group hover:shadow-lg transition-shadow">
              <p className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
                <Clock className="w-3.5 h-3.5" /> {g.lecture} de lecture
              </p>
              <h2 className="text-xl font-bold text-gray-900 group-hover:text-brand-600 transition-colors">{g.titre}</h2>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{g.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-brand-600 font-semibold text-sm">
                Lire le guide <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
