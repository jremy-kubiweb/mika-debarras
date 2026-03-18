import type { Metadata } from "next";
import { buildMeta } from "@/lib/metadata";
import Link from "next/link";
import Image from "next/image";
import { IMG } from "@/lib/images";
import ImageCarousel from "@/components/ImageCarousel";
import {
  Phone,
  Clock,
  Leaf,
  ShieldCheck,
  Star,
  ArrowRight,
  CheckCircle2,
  Truck,
  Search,
  ClipboardList,
  Recycle,
  Home,
  Building2,
  Archive,
  Package,
  Heart,
  Briefcase,
  MapPin,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";
import { services } from "@/data/services";
import { zones } from "@/data/zones";

export const metadata: Metadata = buildMeta({
  title: "MiKa Débarras Lyon — Vide Maison, Cave & Appartement | Devis Gratuit",
  description:
    "MiKa Débarras : expert en débarras à Lyon depuis 10 ans. Vide maison, vide cave, succession. Devis gratuit sous 24h, intervention rapide dans le Grand Lyon.",
  path: "/",
});

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Building2,
  Archive,
  Package,
  Heart,
  Briefcase,
};

const stats = [
  { value: "1 200+", label: "Interventions réalisées", icon: Truck },
  { value: "98%", label: "Clients satisfaits", icon: Star },
  { value: "10 ans", label: "D'expérience à Lyon", icon: Award },
  { value: "48h", label: "Délai d'intervention", icon: Clock },
];

const processSteps = [
  {
    num: "01",
    title: "Prise de contact",
    desc: "Appelez-nous ou remplissez le formulaire en ligne. Nous répondons sous 24h.",
    icon: Phone,
  },
  {
    num: "02",
    title: "Visite & devis gratuit",
    desc: "Nous nous déplaçons pour évaluer le volume et vous remettre un devis transparent et sans surprise.",
    icon: Search,
  },
  {
    num: "03",
    title: "Intervention planifiée",
    desc: "Notre équipe intervient à la date convenue. Tri, chargement et évacuation des objets.",
    icon: ClipboardList,
  },
  {
    num: "04",
    title: "Valorisation & restitution",
    desc: "Les objets récupérables sont donnés ou revendus. Vous récupérez un espace propre.",
    icon: Recycle,
  },
];

const techniques = [
  {
    title: "Tri sélectif",
    desc: "Chaque intervention donne lieu à un tri rigoureux : réemploi, recyclage, déchèterie agréée.",
    icon: Recycle,
  },
  {
    title: "Matériel professionnel",
    desc: "Chariots, monte-meubles, camions adaptés : nous sommes équipés pour tous types d'accès.",
    icon: Truck,
  },
  {
    title: "Traçabilité",
    desc: "Bordereaux de suivi des déchets fournis, conformes à la réglementation en vigueur.",
    icon: ClipboardList,
  },
  {
    title: "Équipe qualifiée",
    desc: "Professionnels formés, assurés et discrets. Intervention soignée, sans dégradation.",
    icon: ShieldCheck,
  },
];

const testimonials = [
  {
    name: "Marie L.",
    ville: "Lyon 6ème",
    text: "Équipe très professionnelle et rapide. Ils ont vidé la maison de ma mère en 2 jours avec beaucoup de respect. Je recommande vivement !",
    rating: 5,
  },
  {
    name: "Thomas B.",
    ville: "Villeurbanne",
    text: "Devis reçu le lendemain de ma demande, intervention dans la semaine. Tarif honnête et boulot propre. Merci MiKa Débarras !",
    rating: 5,
  },
  {
    name: "Sophie R.",
    ville: "Caluire-et-Cuire",
    text: "J'avais une cave complètement bouchée depuis des années. En une journée, tout était réglé. Service impeccable.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMG.heroes.accueil}
            alt=""
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-dark/65" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-36">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <span className="badge">
                <MapPin className="w-3.5 h-3.5" /> Lyon & Grand Lyon
              </span>
              <span className="badge-green">
                <ShieldCheck className="w-3.5 h-3.5" /> Assurés & certifiés
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] text-shadow">
              Débarras professionnel{" "}
              <span className="text-brand-400">à Lyon</span>
              <br />
              <span className="text-white/90">Devis gratuit sous 24h</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300/90 leading-relaxed max-w-2xl">
              Vide maison, vide cave, vide appartement, succession… MiKa Débarras intervient dans tout le Grand Lyon avec rapidité, professionnalisme et respect de l'environnement.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="tel:+33623136783" className="btn-phone text-base">
                <Phone className="w-5 h-5" />
                06 23 13 67 83
              </a>
              <Link href="/contact" className="btn-secondary text-base">
                Demander un devis gratuit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" /> Devis gratuit & sans engagement
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" /> Intervention sous 48h
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" /> Éco-responsable
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Réassurance ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Clock, bg: "bg-brand-50", border: "border-brand-100", iconBg: "gradient-brand", label: "Devis sous 24h", desc: "Réponse garantie, 7j/7 par téléphone ou email." },
              { icon: Truck, bg: "bg-green-50", border: "border-green-100", iconBg: "bg-green-600", label: "Intervention rapide", desc: "Disponibles sous 48h dans tout le Grand Lyon." },
              { icon: Leaf, bg: "bg-teal-50", border: "border-teal-100", iconBg: "bg-teal-600", label: "Éco-responsable", desc: "Tri, recyclage et don : nous valorisons vos encombrants." },
            ].map(({ icon: Icon, bg, border, iconBg, label, desc }) => (
              <div key={label} className={`flex items-start gap-4 p-5 rounded-2xl ${bg} border ${border}`}>
                <div className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{label}</h3>
                  <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge mb-3">Nos prestations</span>
            <h2 className="section-title">Tous types de débarras à Lyon</h2>
            <p className="section-subtitle mx-auto mt-3">
              Quelle que soit la nature de votre besoin, notre équipe vous accompagne de A à Z.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const IconComp = iconMap[service.icon] || Home;
              return (
                <Link
                  key={service.slug}
                  href={`/services#${service.slug}`}
                  className="bg-white rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.05)] group hover:-translate-y-1 hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col"
                >
                  <div className="relative h-36 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.titre} à Lyon`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute bottom-2 left-3 bg-white/90 backdrop-blur-sm text-brand-700 text-xs font-semibold px-2 py-0.5 rounded-md">
                      {service.prix}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl gradient-brand flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-brand-600/40 transition-shadow">
                        <IconComp className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-base font-bold text-gray-900">{service.titre}</h3>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">{service.description}</p>
                    <div className="flex items-center justify-end mt-4 pt-3 border-t border-gray-100">
                      <span className="text-brand-600 text-xs font-medium mr-auto">En savoir plus</span>
                      <ArrowRight className="w-4 h-4 text-brand-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-primary">
              Voir tous nos services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Chiffres clés ── */}
      <section className="py-16 gradient-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-5 h-5 text-white/80" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white tracking-tight">{stat.value}</div>
                  <div className="text-orange-100/80 text-sm mt-2 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Avant / Après ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge mb-3">Nos réalisations</span>
            <h2 className="section-title">Avant / Après</h2>
            <p className="section-subtitle mx-auto mt-3">
              Découvrez la transformation d'espaces que nous avons réalisés pour nos clients à Lyon.
            </p>
          </div>

          {/* Diaporama galerie */}
          <div className="mb-10">
            <ImageCarousel
              slides={[
                { src: IMG.galerie[0], alt: "Débarras vide maison — mobilier ancien à évacuer", caption: "Vide maison Lyon 7ème — 15 tonnes" },
                { src: IMG.galerie[1], alt: "Pièce encombrée avant débarras — mobilier et objets divers", caption: "Appartement succession Lyon 3ème — 6 tonnes" },
                { src: IMG.galerie[2], alt: "Logement à vider — encombrants et meubles anciens", caption: "Cave d\'immeuble Villeurbanne — 4 tonnes" },
                { src: IMG.galerie[3], alt: "Espace libéré après débarras — pièce vide et propre", caption: "Après débarras — espace récupéré" },
                { src: IMG.galerie[4], alt: "Mobilier ancien et succession — débarras discret à Lyon", caption: "Succession Caluire-et-Cuire — 3 tonnes" },
                { src: IMG.galerie[5], alt: "Appartement vidé et nettoyé après intervention MiKa", caption: "Résultat final — logement prêt à remettre" },
              ]}
              aspectRatio="aspect-[16/7]"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>

          {/* Paires Avant/Après */}
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
            {[
              { titre: "Vide maison Lyon 7ème", type: "Vide maison — 2 j — 15 t", srcAvant: IMG.avant[0], srcApres: IMG.apres[0], altAvant: "Avant débarras vide maison Lyon 7ème", altApres: "Après débarras vide maison Lyon 7ème" },
              { titre: "Cave Villeurbanne", type: "Vide cave — 1 j — 4 t", srcAvant: IMG.avant[1], srcApres: IMG.apres[1], altAvant: "Avant vide cave Villeurbanne", altApres: "Après vide cave Villeurbanne" },
              { titre: "Appartement Lyon 3ème", type: "Succession — 1 j — 6 t", srcAvant: IMG.avant[2], srcApres: IMG.apres[2], altAvant: "Avant succession Lyon 3ème", altApres: "Après succession Lyon 3ème" },
              { titre: "Grenier Caluire", type: "Vide grenier — 1 j — 3 t", srcAvant: IMG.avant[3], srcApres: IMG.apres[3], altAvant: "Avant vide grenier Caluire", altApres: "Après vide grenier Caluire" },
              { titre: "Local commercial Bron", type: "Débarras local — 3 j — 25 t", srcAvant: IMG.avant[4], srcApres: IMG.apres[4], altAvant: "Avant débarras local Bron", altApres: "Après débarras local Bron" },
              { titre: "Maison Saint-Priest", type: "Vide maison — 1 j — 8 t", srcAvant: IMG.avant[5], srcApres: IMG.apres[5], altAvant: "Avant vide maison Saint-Priest", altApres: "Après vide maison Saint-Priest" },
            ].map((item, i) => (
              <div key={i} className="snap-center flex-shrink-0 w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] rounded-2xl overflow-hidden border border-gray-100 shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
                <div className="grid grid-cols-2 h-48">
                  <div className="relative border-r border-gray-200">
                    <Image
                      src={item.srcAvant}
                      alt={item.altAvant}
                      fill
                      sizes="25vw"
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 z-10 bg-red-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-md tracking-wide">AVANT</div>
                  </div>
                  <div className="relative">
                    <Image
                      src={item.srcApres}
                      alt={item.altApres}
                      fill
                      sizes="25vw"
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 z-10 bg-green-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-md tracking-wide">APRÈS</div>
                  </div>
                </div>
                <div className="p-4 bg-gray-50">
                  <h3 className="font-bold text-gray-900">{item.titre}</h3>
                  <p className="text-gray-500 text-sm mt-0.5">{item.type}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/realisations" className="btn-primary">
              Voir toutes nos réalisations
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Processus ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge mb-3">Comment ça marche</span>
            <h2 className="section-title">Notre processus en 4 étapes</h2>
            <p className="section-subtitle mx-auto mt-3">
              Un processus clair et transparent du premier contact à la restitution de votre espace.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="relative">
                  {idx < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-[52px] left-[calc(50%+36px)] right-[calc(-50%+36px)] h-px bg-brand-100 z-0" />
                  )}
                  <div className="card relative z-10 text-center pt-8">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-brand-600 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-md shadow-brand-600/30">
                      {step.num}
                    </div>
                    <div className="w-12 h-12 gradient-brand rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Techniques ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge mb-4">Notre approche</span>
              <h2 className="section-title">Des techniques professionnelles au service de votre débarras</h2>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Chez MiKa Débarras, chaque intervention est préparée et exécutée avec méthode. Nous combinons savoir-faire humain et équipements adaptés pour garantir efficacité et respect des lieux.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {techniques.map((t) => {
                  const Icon = t.icon;
                  return (
                    <div key={t.title} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-brand-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{t.title}</h4>
                        <p className="text-gray-500 text-[13px] mt-0.5 leading-relaxed">{t.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-8">
                <Link href="/a-propos" className="btn-primary">
                  En savoir plus sur MiKa Débarras
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden aspect-square bg-gray-100">
              <Image
                src={IMG.team}
                alt="Équipe MiKa Débarras — débarasseurs professionnels à Lyon"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Témoignages ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge mb-3">Avis clients</span>
            <h2 className="section-title">Ce que disent nos clients</h2>
            <p className="section-subtitle mx-auto mt-3">
              Plus de 98% de clients satisfaits — note moyenne 4.9/5 sur Google
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="card flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-4xl text-gray-100 font-serif leading-none select-none">&ldquo;</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{t.text}</p>
                <div className="flex items-center gap-3 pt-3 border-t border-gray-50">
                  <div className="w-9 h-9 gradient-brand rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.ville}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Zones ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge mb-3">
              <MapPin className="w-3.5 h-3.5" /> Zones couvertes
            </span>
            <h2 className="section-title">Débarras dans tout le Grand Lyon</h2>
            <p className="section-subtitle mx-auto mt-3">
              Nous intervenons dans Lyon et toute l'agglomération lyonnaise.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {zones.map((zone) => (
              <Link
                key={zone.slug}
                href={`/zones-intervention/${zone.slug}`}
                className="flex items-center gap-1.5 px-4 py-2.5 bg-white hover:bg-brand-50 border border-gray-200 hover:border-brand-300 rounded-full text-sm text-gray-600 hover:text-brand-700 transition-all font-medium shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_8px_rgba(234,88,12,0.12)]"
              >
                <MapPin className="w-3.5 h-3.5 text-brand-400" />
                {zone.nom}
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/zones-intervention" className="btn-secondary">
              Voir toutes les zones
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex w-16 h-16 gradient-brand rounded-2xl items-center justify-center mb-8 shadow-xl shadow-brand-600/30">
            <Truck className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Prêt à libérer de l&apos;espace ?
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Contactez MiKa Débarras dès aujourd&apos;hui. Devis gratuit, sans engagement, réponse sous 24h.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+33623136783" className="btn-phone text-base">
              <Phone className="w-5 h-5" />
              06 23 13 67 83
            </a>
            <Link href="/contact" className="btn-secondary text-base">
              Demander un devis en ligne
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <p className="mt-8 text-gray-600 text-sm">
            Lun–Ven 8h–19h · Sam 9h–17h · Urgences ponctuelles acceptées
          </p>
        </div>
      </section>
    </>
  );
}
