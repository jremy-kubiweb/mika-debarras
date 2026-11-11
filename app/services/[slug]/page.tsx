import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Phone, ArrowRight, ChevronDown, Users, Tag } from "lucide-react";
import HeroQuoteForm from "@/components/HeroQuoteForm";
import { services, getServiceBySlug } from "@/data/services";
import { servicesDetails } from "@/data/servicesDetails";
import { zones } from "@/data/zones";
import { buildMeta } from "@/lib/metadata";

interface Props {
  params: { slug: string };
}

const VILLES_PRINCIPALES = ["lyon", "villeurbanne", "venissieux", "oullins-pierre-benite", "saint-genis-laval", "bron", "saint-priest", "caluire-et-cuire", "sainte-foy-les-lyon", "tassin-la-demi-lune", "ecully", "irigny"];

export async function generateStaticParams() {
  return services.filter((s) => servicesDetails[s.slug]).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const detail = servicesDetails[params.slug];
  if (!detail) return {};
  return buildMeta({ title: detail.metaTitle, description: detail.metaDescription, path: `/services/${params.slug}` });
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  const detail = servicesDetails[params.slug];
  if (!service || !detail) notFound();

  const villes = VILLES_PRINCIPALES.map((slug) => zones.find((z) => z.slug === slug)).filter((z): z is NonNullable<typeof z> => Boolean(z));
  const autres = services.filter((s) => s.slug !== service.slug && servicesDetails[s.slug]);
  const url = `https://www.mika-debarras.fr/services/${service.slug}`;

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.titre,
      serviceType: service.titre,
      description: detail.metaDescription,
      url,
      areaServed: { "@type": "AdministrativeArea", name: "Lyon et Grand Lyon" },
      provider: {
        "@type": "LocalBusiness",
        name: "MiKa Débarras",
        telephone: "+33623136783",
        url: "https://www.mika-debarras.fr",
        address: { "@type": "PostalAddress", addressLocality: "Irigny", postalCode: "69540", addressRegion: "Auvergne-Rhône-Alpes", addressCountry: "FR" },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: detail.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.r } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.mika-debarras.fr" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.mika-debarras.fr/services" },
        { "@type": "ListItem", position: 3, name: service.titre, item: url },
      ],
    },
  ];

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <section className="relative bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image src={service.image} alt="" fill sizes="100vw" className="object-cover opacity-40" priority />
        </div>
        <div className="absolute inset-0 bg-dark/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="max-w-2xl">
            <nav className="text-sm text-gray-400 mb-5">
              <Link href="/services" className="hover:text-white">Services</Link> <span className="mx-1">/</span> <span className="text-gray-200">{service.titre}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">{detail.h1}</h1>
            <p className="mt-5 text-gray-300 text-lg leading-relaxed">{service.description}</p>
            <div className="mt-6 inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white rounded-xl px-4 py-2 text-sm">
              <Tag className="w-4 h-4 text-brand-400" /> Tarif indicatif : <strong>{service.prix}</strong>
            </div>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a href="tel:+33623136783" className="btn-phone">
                <Phone className="w-4 h-4" /> 06 23 13 67 83
              </a>
            </div>
          </div>
          <HeroQuoteForm />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-5">
            <h2 className="section-title">Notre méthode</h2>
            {detail.intro.map((p) => (
              <p key={p.slice(0, 40)} className="text-gray-600 text-lg leading-relaxed">{p}</p>
            ))}
            <h2 className="text-2xl font-bold text-gray-900 pt-4">Ce qui est inclus</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {detail.inclus.map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <aside className="card h-fit">
            <h2 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-brand-500" /> Pour qui ?
            </h2>
            <ul className="space-y-2">
              {detail.pourQui.map((p) => (
                <li key={p} className="flex items-start gap-2 text-gray-700 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" /> {p}
                </li>
              ))}
            </ul>
            <Link href="#devis" className="btn-primary w-full justify-center mt-6">
              Demander un devis gratuit <ArrowRight className="w-4 h-4" />
            </Link>
          </aside>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-10">Questions fréquentes — {service.titre}</h2>
          <div className="space-y-3">
            {detail.faq.map((item) => (
              <details key={item.q} className="group border border-gray-200 rounded-xl overflow-hidden bg-white">
                <summary className="flex items-center justify-between gap-3 p-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-gray-900 text-sm">{item.q}</span>
                  <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{item.r}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">{service.titre} près de chez vous</h2>
            <div className="flex flex-wrap gap-2">
              {villes.map((v) => (
                <Link key={v.slug} href={`/zones-intervention/${v.slug}`} className="px-3 py-1.5 rounded-full border border-gray-200 text-sm text-gray-700 hover:border-brand-300 hover:text-brand-600">
                  {v.nom}
                </Link>
              ))}
              <Link href="/zones-intervention" className="px-3 py-1.5 rounded-full text-sm text-brand-600 font-semibold">Toutes les communes →</Link>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Nos autres services</h2>
            <div className="flex flex-wrap gap-2">
              {autres.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="px-3 py-1.5 rounded-full border border-gray-200 text-sm text-gray-700 hover:border-brand-300 hover:text-brand-600">
                  {s.titre}
                </Link>
              ))}
              <Link href="/guides" className="px-3 py-1.5 rounded-full text-sm text-brand-600 font-semibold">Nos guides pratiques →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
