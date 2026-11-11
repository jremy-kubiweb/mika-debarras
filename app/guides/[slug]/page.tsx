import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Clock, Phone } from "lucide-react";
import HeroQuoteForm from "@/components/HeroQuoteForm";
import { guides, getGuideBySlug } from "@/data/guides";
import { services } from "@/data/services";
import { buildMeta } from "@/lib/metadata";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = getGuideBySlug(params.slug);
  if (!guide) return {};
  return buildMeta({ title: guide.titre, description: guide.description, path: `/guides/${guide.slug}` });
}

export default function GuidePage({ params }: Props) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) notFound();

  const url = `https://www.mika-debarras.fr/guides/${guide.slug}`;
  const servicesLies = services.filter((s) => guide.servicesLies.includes(s.slug));
  const autres = guides.filter((g) => g.slug !== guide.slug);

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: guide.titre,
      description: guide.description,
      datePublished: guide.date,
      dateModified: guide.date,
      mainEntityOfPage: url,
      author: { "@type": "Organization", name: "MiKa Débarras", url: "https://www.mika-debarras.fr" },
      publisher: { "@type": "Organization", name: "MiKa Débarras", url: "https://www.mika-debarras.fr" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.mika-debarras.fr" },
        { "@type": "ListItem", position: 2, name: "Guides", item: "https://www.mika-debarras.fr/guides" },
        { "@type": "ListItem", position: 3, name: guide.titre, item: url },
      ],
    },
  ];

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <section className="relative bg-dark overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="max-w-2xl">
            <nav className="text-sm text-gray-400 mb-5">
              <Link href="/guides" className="hover:text-white">Guides</Link> <span className="mx-1">/</span> <span className="text-gray-200">Article</span>
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">{guide.titre}</h1>
            <p className="mt-5 text-gray-300 text-lg leading-relaxed">{guide.description}</p>
            <p className="mt-4 flex items-center gap-1.5 text-sm text-gray-400">
              <Clock className="w-4 h-4" /> {guide.lecture} de lecture
            </p>
          </div>
          <HeroQuoteForm />
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {guide.sections.map((section) => (
            <section key={section.h2} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.h2}</h2>
              {section.p.map((p) => (
                <p key={p.slice(0, 40)} className="text-gray-700 text-lg leading-relaxed mb-4">{p}</p>
              ))}
            </section>
          ))}

          <div className="rounded-2xl bg-brand-50 border border-brand-100 p-6 sm:p-8">
            <p className="text-xl font-bold text-gray-900">Besoin d&apos;un coup de main pour votre débarras ?</p>
            <p className="mt-2 text-gray-600">Devis gratuit sur place ou sur photos, réponse sous 24h.</p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <Link href="#devis" className="btn-primary justify-center">
                Demander un devis gratuit <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+33623136783" className="btn-phone justify-center">
                <Phone className="w-4 h-4" /> 06 23 13 67 83
              </a>
            </div>
          </div>

          {servicesLies.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Nos services liés</h2>
              <div className="flex flex-wrap gap-2">
                {servicesLies.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="px-3 py-1.5 rounded-full border border-gray-200 text-sm text-gray-700 hover:border-brand-300 hover:text-brand-600">
                    {s.titre}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">À lire aussi</h2>
            <ul className="space-y-2">
              {autres.map((g) => (
                <li key={g.slug}>
                  <Link href={`/guides/${g.slug}`} className="text-brand-600 font-semibold hover:underline">{g.titre}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </>
  );
}
