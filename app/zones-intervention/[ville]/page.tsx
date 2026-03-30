import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, ArrowRight, CheckCircle2, Clock, Truck, Leaf, Users, Star, Shield, Recycle, MessageCircle, ChevronDown } from "lucide-react";
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
    telephone: "+33623136783",
    areaServed: { "@type": "City", name: zone.nom, postalCode: zone.codePostal },
    address: { "@type": "PostalAddress", addressLocality: zone.nom, postalCode: zone.codePostal, addressCountry: "FR" },
  };

  const faq = [
    {
      q: `MiKa Débarras intervient-il vraiment à ${zone.nom} ?`,
      r: `Oui, ${zone.nom} fait partie de notre zone d'intervention principale. Nous nous déplaçons à ${zone.nom} (${zone.codePostal}) pour tous types de débarras : vide maison, vide cave, vide grenier, succession ou débarras d'appartement.`,
    },
    {
      q: `Quel est le délai d'intervention à ${zone.nom} ?`,
      r: `Nous répondons à toute demande sous 24h. L'intervention peut généralement être planifiée sous 48h à 72h selon les disponibilités. Pour les urgences à ${zone.nom} (succession, logement à libérer rapidement), nous faisons le maximum pour intervenir le jour même ou le lendemain.`,
    },
    {
      q: `Le déplacement est-il payant pour ${zone.nom} ?`,
      r: `Non, le déplacement et l'établissement du devis sont entièrement gratuits à ${zone.nom}. Vous ne payez rien avant d'avoir validé notre offre.`,
    },
    {
      q: `Que faites-vous des objets récupérés à ${zone.nom} ?`,
      r: `Nous trions systématiquement : les objets en bon état sont donnés à des associations locales ou revendus. Les déchets sont acheminés en déchèterie agréée. Nous visons zéro gaspillage à chaque intervention.`,
    },
    {
      q: `Proposez-vous un rachat d'objets de valeur à ${zone.nom} ?`,
      r: `Oui, si nous identifions des objets de valeur lors de notre visite à ${zone.nom} (meubles anciens, bibelots, livres, outils…), nous pouvons vous en proposer le rachat, ce qui peut réduire le coût total du débarras.`,
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* ── HERO ── */}
      <section className="relative bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image src={IMG.heroes.ville} alt="" fill className="object-cover opacity-40" priority />
        </div>
        <div className="absolute inset-0 bg-dark/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="badge"><MapPin className="w-3.5 h-3.5" /> {zone.nom} — {zone.codePostal}</span>
              {zone.population && (
                <span className="badge bg-white/10 text-white/80 border-white/20">
                  <Users className="w-3.5 h-3.5" /> {zone.population.toLocaleString("fr-FR")} hab.
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Débarras & vide maison<br />
              <span className="text-brand-400">à {zone.nom}</span>
            </h1>
            <p className="mt-4 text-gray-300 text-lg leading-relaxed max-w-2xl">
              MiKa Débarras intervient à {zone.nom} pour tous vos débarras : vide maison, vide cave, vide grenier, succession. Devis gratuit sous 24h, équipe professionnelle et assurée.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a href="tel:+33623136783" className="btn-phone">
                <Phone className="w-4 h-4" /> 06 23 13 67 83
              </a>
              <Link href="/contact" className="btn-secondary">
                Devis gratuit à {zone.nom} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-white border-b border-gray-100 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-6 md:gap-10 justify-center md:justify-start">
            {[
              { icon: Clock, label: "Devis sous 24h" },
              { icon: Truck, label: "Intervention sous 48h" },
              { icon: Star, label: "Devis gratuit & sans engagement" },
              { icon: Shield, label: "Équipe assurée" },
              { icon: Recycle, label: "Tri éco-responsable" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                <Icon className="w-4 h-4 text-brand-500 flex-shrink-0" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO + SERVICES ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Texte intro */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Notre service de débarras à {zone.nom}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Vous avez besoin de vider une maison, un appartement, une cave ou un grenier à {zone.nom} ? MiKa Débarras est l'entreprise de débarras locale qu'il vous faut.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Notre équipe intervient à {zone.nom} ({zone.codePostal}) et dans toutes les communes voisines. Nous prenons en charge l'intégralité du travail : tri, déménagement des encombrants, nettoyage de fin de chantier.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Chaque intervention est unique. Nous adaptons notre méthode à votre situation : succession, déménagement, départ en maison de retraite, logement insalubre ou simple accumulation d'objets.
              </p>
              <div className="space-y-2">
                {[
                  `Connaissance du tissu local à ${zone.nom}`,
                  "Devis sur place, gratuit et sans engagement",
                  "Tarifs transparents, sans surprise",
                  "Disponibles du lundi au samedi",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Services grid */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service) => (
                <div key={service.slug} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
                  <div className="relative h-36 w-full">
                    <Image
                      src={service.image}
                      alt={`${service.titre} à ${zone.nom}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-dark/20" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-brand-600 text-white text-xs font-semibold px-2.5 py-1 rounded-lg">{service.prix}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-1.5">
                      {service.titre} à {zone.nom}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">{service.description}</p>
                    <Link href="/contact" className="flex items-center gap-1 text-brand-600 text-sm font-semibold hover:gap-2 transition-all">
                      Demander un devis <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMENT ÇA MARCHE ── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-title">Comment se déroule un débarras à {zone.nom} ?</h2>
            <p className="section-subtitle mx-auto mt-3">Un processus simple et transparent, du premier contact au résultat final.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: "1", titre: "Contact", desc: `Appelez-nous ou remplissez le formulaire. Nous répondons sous 24h pour ${zone.nom}.` },
              { num: "2", titre: "Visite gratuite", desc: `Nous venons sur place à ${zone.nom} pour évaluer le volume et établir un devis précis.` },
              { num: "3", titre: "Intervention", desc: "Notre équipe s'occupe de tout : tri, dépose, chargement, nettoyage." },
              { num: "4", titre: "Fin de chantier", desc: "Vous récupérez un espace vide et propre. Nous gérons l'élimination éco-responsable." },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-12 h-12 gradient-brand rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-white font-bold text-lg">{step.num}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{step.titre}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA MILIEU ── */}
      <section className="py-10 gradient-brand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="text-white">
              <p className="text-xl font-bold">Besoin d'un débarras à {zone.nom} ?</p>
              <p className="text-orange-100 text-sm mt-1">Devis gratuit sous 24h — Intervention sous 48h</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a href="tel:+33623136783" className="flex items-center gap-2 bg-white text-gray-900 font-bold px-5 py-3 rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
                <Phone className="w-4 h-4 text-green-600" /> 06 23 13 67 83
              </a>
              <Link href="/contact" className="flex items-center gap-2 border-2 border-white text-white font-bold px-5 py-3 rounded-xl hover:bg-white/10 transition-colors justify-center">
                Devis en ligne <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── POURQUOI NOUS ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">
                Pourquoi choisir MiKa Débarras à {zone.nom} ?
              </h2>
              <div className="space-y-4">
                {[
                  { icon: Star, titre: "Expertise locale", desc: `Nous connaissons ${zone.nom}, ses accès, ses spécificités. Pas de mauvaise surprise le jour J.` },
                  { icon: Shield, titre: "Assurés et qualifiés", desc: "Notre équipe est assurée pour toutes les interventions, même les plus complexes (caves profondes, appartements exigus, encombrement important)." },
                  { icon: Recycle, titre: "Éco-responsable", desc: "Don aux associations, vente de seconde main, recyclage, déchèterie agréée. Nous trions tout systématiquement." },
                  { icon: MessageCircle, titre: "Transparence totale", desc: "Devis détaillé et sans surprise. Le prix que nous annonçons est le prix que vous payez — rien de plus." },
                ].map(({ icon: Icon, titre, desc }) => (
                  <div key={titre} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                    <div className="w-10 h-10 gradient-brand rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{titre}</p>
                      <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-96 shadow-xl">
              <Image src={IMG.heroes.ville} alt={`Débarras à ${zone.nom}`} fill className="object-cover" />
              <div className="absolute inset-0 bg-dark/30" />
              {zone.population && (
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-2">Commune de {zone.nom}</p>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-xl font-bold text-gray-900">{zone.population.toLocaleString("fr-FR")}</p>
                        <p className="text-xs text-gray-500">habitants</p>
                      </div>
                      {zone.distanceIrigny && (
                        <div>
                          <p className="text-xl font-bold text-gray-900">{zone.distanceIrigny} km</p>
                          <p className="text-xs text-gray-500">de notre base</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-title">Questions fréquentes — Débarras à {zone.nom}</h2>
          </div>
          <div className="space-y-3">
            {faq.map((item, i) => (
              <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-3 p-5 cursor-pointer list-none bg-white hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-gray-900 text-sm">{item.q}</span>
                  <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed bg-gray-50">
                  {item.r}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── VILLES VOISINES ── */}
      {voisines.length > 0 && (
        <section className="py-12 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 mb-1">
              Débarras dans les villes proches de {zone.nom}
            </h2>
            <p className="text-gray-500 text-sm mb-6">Nous intervenons également dans ces communes voisines.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
              {voisines.map((v) => (
                <Link
                  key={v.slug}
                  href={`/zones-intervention/${v.slug}`}
                  className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl hover:border-brand-300 hover:shadow-sm transition-all group"
                >
                  <div className="w-8 h-8 gradient-brand rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 text-sm group-hover:text-brand-600 transition-colors truncate">{v.nom}</p>
                    <p className="text-gray-400 text-xs">{v.codePostal}</p>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-brand-400 ml-auto flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA FINAL ── */}
      <section className="py-16 bg-dark">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            Démarrez votre débarras à {zone.nom}
          </h2>
          <p className="text-gray-400 mb-8">
            Contactez-nous dès aujourd'hui. Devis gratuit sous 24h, intervention rapide et soignée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+33623136783" className="btn-phone text-base">
              <Phone className="w-5 h-5" /> 06 23 13 67 83
            </a>
            <Link href="/contact" className="btn-primary text-base">
              Remplir le formulaire <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
