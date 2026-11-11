import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Newspaper } from "lucide-react";
import HeroQuoteForm from "@/components/HeroQuoteForm";
import { actualites } from "@/data/actualites";
import { buildMeta } from "@/lib/metadata";

export const metadata: Metadata = buildMeta({
  title: "Actualités du débarras à Lyon — Conseils et nouvelles",
  description:
    "Les actualités de MiKa Débarras : conseils pour vos encombrants à Lyon, débarras avant EHPAD, fin de bail, travaux, réemploi des objets et plus encore.",
  path: "/actualites",
});

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

export default function ActualitesPage() {
  const articles = [...actualites].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <section className="relative bg-dark overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="max-w-2xl">
            <span className="badge mb-5">
              <Newspaper className="w-3.5 h-3.5" /> Actualités
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              L&apos;actualité du <span className="text-brand-400">débarras</span> à Lyon
            </h1>
            <p className="mt-5 text-gray-300 text-lg leading-relaxed">
              Conseils, saisons, réglementation et coulisses de nos chantiers dans le Grand Lyon.
            </p>
          </div>
          <HeroQuoteForm />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a) => (
            <Link key={a.slug} href={`/actualites/${a.slug}`} className="card group hover:shadow-lg transition-shadow flex flex-col">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="badge">{a.categorie}</span>
                <time dateTime={a.date} className="text-xs text-gray-400">{formatDate(a.date)}</time>
              </div>
              <h2 className="text-lg font-bold text-gray-900 group-hover:text-brand-600 transition-colors">{a.titre}</h2>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed flex-1">{a.description}</p>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="flex items-center gap-1.5 text-gray-400">
                  <Clock className="w-3.5 h-3.5" /> {a.lecture}
                </span>
                <span className="inline-flex items-center gap-1 text-brand-600 font-semibold">
                  Lire <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
