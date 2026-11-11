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
  const featuredZones = zones.slice(0, 18);

  return (
    <>
      {/* ── HERO SPLIT ── */}
      <section className="relative bg-dark overflow-hidden min-h-[88vh] flex items-center">
        <div className="absolute inset-0">
          <Image src={IMG.heroes.accueil} alt="" fill className="object-cover opacity-30" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-dark/50" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Colonne gauche — texte */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="badge"><MapPin className="w-3.5 h-3.5" /> Lyon & Grand Lyon</span>
                <span className="badge-green"><ShieldCheck className="w-3.5 h-3.5" /> Assurés & certifiés</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight">
                Votre débarras<br />
                <span className="text-brand-400">professionnel</span><br />
                à Lyon
              </h1>

              <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-lg">
                Vide maison, vide cave, succession, appartement encombré…
                MiKa Débarras prend tout en charge, du tri à l'évacuation. <strong className="text-white">Devis gratuit sous 24h.</strong>
              </p>

              {/* Téléphone très visible */}
              <div className="mt-8">
                <a
                  href="tel:+33623136783"
                  className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold text-xl px-8 py-5 rounded-2xl shadow-xl shadow-green-900/40 transition-all hover:scale-[1.02]"
                >
                  <Phone className="w-6 h-6" />
                  06 23 13 67 83
                </a>
                <p className="text-gray-500 text-xs mt-2 ml-1">Lun–Ven 8h–19h · Sam 9h–17h</p>
              </div>

              <div className="mt-5">
                <Link href="/contact" className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 font-semibold transition-colors">
                  Ou remplir le formulaire de devis <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Trust signals */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Devis gratuit & sans engagement",
                  "Intervention sous 48h",
                  "Éco-responsable",
                  "Équipe assurée",
                ].map((item) => (
                  <span key={item} className="flex items-center gap-1.5 text-sm text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" /> {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Colonne droite — carte stats */}
            <div className="hidden lg:flex flex-col gap-4">
              {/* Stats card */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-7">
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-5">En chiffres</p>
                <div className="grid grid-cols-2 gap-5">
                  {stats.map(({ value, label, icon: Icon }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-9 h-9 gradient-brand rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-white">{value}</p>
                        <p className="text-gray-400 text-xs mt-0.5">{label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Google rating card */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <span className="text-blue-500 font-black text-lg">G</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                    <span className="text-white font-bold text-sm ml-1">4.9</span>
                  </div>
                  <p className="text-gray-400 text-xs">Note moyenne · 450+ avis Google</p>
                </div>
                <TrendingUp className="w-5 h-5 text-green-400" />
              </div>

              {/* Urgence */}
              <div className="gradient-brand rounded-3xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold">Disponible cette semaine</p>
                  <p className="text-orange-100 text-sm">Intervention planifiable sous 48h dans tout le Grand Lyon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BANDE SERVICES RAPIDE ── */}
      <section className="bg-white border-b border-gray-100 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 items-center justify-center md:justify-start">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide mr-2">Nos interventions :</span>
            {services.map((s) => {
              const Icon = iconMap[s.icon] || Home;
              return (
                <Link
                  key={s.slug}
                  href={`/services#${s.slug}`}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-brand-50 hover:border-brand-300 hover:text-brand-700 transition-all font-medium"
                >
                  <Icon className="w-3.5 h-3.5" />
                  {s.titre}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SERVICES DÉTAILLÉS ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <span className="badge mb-3">Nos prestations</span>
              <h2 className="section-title">Tous types de débarras<br />à Lyon & Grand Lyon</h2>
            </div>
            <Link href="/services" className="btn-secondary self-start md:self-auto flex-shrink-0">
              Tous nos services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const IconComp = iconMap[service.icon] || Home;
              return (
                <Link
                  key={service.slug}
                  href={`/services#${service.slug}`}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm group hover:-translate-y-1 hover:shadow-lg transition-all duration-200 overflow-hidden flex flex-col"
                >
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.titre} à Lyon`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                      <div className="w-9 h-9 rounded-xl gradient-brand flex items-center justify-center shadow-md">
                        <IconComp className="w-5 h-5 text-white" />
                      </div>
                      <span className="bg-white/90 backdrop-blur-sm text-brand-700 text-xs font-bold px-2.5 py-1 rounded-lg">{service.prix}</span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-base font-bold text-gray-900 mb-2">{service.titre}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">{service.description}</p>
                    <div className="flex items-center gap-1 mt-4 text-brand-600 text-sm font-semibold group-hover:gap-2 transition-all">
                      Demander un devis <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CHIFFRES CLÉS ── */}
      <section className="py-14 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/10">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="bg-dark flex flex-col items-center justify-center py-10 px-6 text-center">
                <Icon className="w-6 h-6 text-brand-400 mb-3" />
                <p className="text-4xl md:text-5xl font-black text-white tracking-tight">{value}</p>
                <p className="text-gray-400 text-sm mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AVANT / APRÈS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <span className="badge mb-3">Nos réalisations</span>
              <h2 className="section-title">Le résultat parle<br />pour lui-même</h2>
            </div>
            <Link href="/realisations" className="btn-secondary self-start md:self-auto flex-shrink-0">
              Toutes nos réalisations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mb-10">
            <ImageCarousel
              slides={[
                { src: IMG.galerie[0], alt: "Débarras vide maison — mobilier ancien à évacuer", caption: "Vide maison Lyon 7ème — 15 tonnes" },
                { src: IMG.galerie[1], alt: "Pièce encombrée avant débarras", caption: "Appartement succession Lyon 3ème — 6 tonnes" },
                { src: IMG.galerie[2], alt: "Cave à vider — encombrants et meubles", caption: "Cave d'immeuble Villeurbanne — 4 tonnes" },
                { src: IMG.galerie[3], alt: "Espace libéré après débarras", caption: "Après débarras — espace récupéré" },
                { src: IMG.galerie[4], alt: "Succession — débarras discret à Lyon", caption: "Succession Caluire-et-Cuire — 3 tonnes" },
                { src: IMG.galerie[5], alt: "Appartement vidé après intervention", caption: "Résultat final — logement prêt à remettre" },
              ]}
              aspectRatio="aspect-[16/7]"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>

          <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
            {[
              { titre: "Vide maison Lyon 7ème", type: "Vide maison — 2 j — 15 t", srcAvant: IMG.avant[0], srcApres: IMG.apres[0], altAvant: "Avant vide maison Lyon 7ème", altApres: "Après vide maison Lyon 7ème" },
              { titre: "Cave Villeurbanne", type: "Vide cave — 1 j — 4 t", srcAvant: IMG.avant[1], srcApres: IMG.apres[1], altAvant: "Avant vide cave Villeurbanne", altApres: "Après vide cave Villeurbanne" },
              { titre: "Appartement Lyon 3ème", type: "Succession — 1 j — 6 t", srcAvant: IMG.avant[2], srcApres: IMG.apres[2], altAvant: "Avant succession Lyon 3ème", altApres: "Après succession Lyon 3ème" },
              { titre: "Grenier Caluire", type: "Vide grenier — 1 j — 3 t", srcAvant: IMG.avant[3], srcApres: IMG.apres[3], altAvant: "Avant vide grenier Caluire", altApres: "Après vide grenier Caluire" },
              { titre: "Local Bron", type: "Débarras local — 3 j — 25 t", srcAvant: IMG.avant[4], srcApres: IMG.apres[4], altAvant: "Avant débarras local Bron", altApres: "Après débarras local Bron" },
              { titre: "Maison Saint-Priest", type: "Vide maison — 1 j — 8 t", srcAvant: IMG.avant[5], srcApres: IMG.apres[5], altAvant: "Avant vide maison Saint-Priest", altApres: "Après vide maison Saint-Priest" },
            ].map((item, i) => (
              <div key={i} className="snap-center flex-shrink-0 w-[85vw] sm:w-[calc(50%-10px)] lg:w-[calc(33.33%-14px)] rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <div className="grid grid-cols-2 h-52">
                  <div className="relative border-r border-gray-100">
                    <Image src={item.srcAvant} alt={item.altAvant} fill sizes="25vw" className="object-cover" />
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-md tracking-wide">AVANT</div>
                  </div>
                  <div className="relative">
                    <Image src={item.srcApres} alt={item.altApres} fill sizes="25vw" className="object-cover" />
                    <div className="absolute top-2 right-2 bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md tracking-wide">APRÈS</div>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 border-t border-gray-100">
                  <h3 className="font-bold text-gray-900 text-sm">{item.titre}</h3>
                  <p className="text-gray-400 text-xs mt-0.5">{item.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESSUS ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge mb-3">Comment ça marche</span>
            <h2 className="section-title">Simple, rapide, sans stress</h2>
            <p className="section-subtitle mx-auto mt-3">
              De votre premier appel à la remise des clés — on s'occupe de tout.
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
                  <div className="card relative z-10 text-center pt-8 hover:shadow-md transition-shadow">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-brand-600 text-white text-xs font-black rounded-full flex items-center justify-center shadow-md shadow-brand-600/30">
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
          <div className="text-center mt-10">
            <a href="tel:+33623136783" className="btn-phone text-base">
              <Phone className="w-5 h-5" /> Appelez pour démarrer — 06 23 13 67 83
            </a>
          </div>
        </div>
      </section>

      {/* ── TÉMOIGNAGES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge mb-3">Avis clients</span>
            <h2 className="section-title">Ils nous ont fait confiance</h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
              <span className="font-bold text-gray-900 ml-1">4.9/5</span>
              <span className="text-gray-400 text-sm">· 450+ avis Google</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center shadow-sm border border-gray-100">
                    <span className="text-blue-500 font-black text-sm">G</span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed flex-1 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-3 border-t border-gray-200">
                  <div className="w-9 h-9 gradient-brand rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs flex items-center gap-1"><MapPin className="w-3 h-3" />{t.ville}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POURQUOI MIKA ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-3xl overflow-hidden aspect-square bg-gray-100 order-last lg:order-first">
              <Image
                src={IMG.team}
                alt="Équipe MiKa Débarras — professionnels à Lyon"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 gradient-brand rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">10 ans d'expérience</p>
                      <p className="text-gray-500 text-xs">Spécialiste débarras Lyon depuis 2014</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="badge mb-4">Notre engagement</span>
              <h2 className="section-title mb-6">Pourquoi choisir MiKa Débarras ?</h2>
              <div className="space-y-4">
                {techniques.map((t) => {
                  const Icon = t.icon;
                  return (
                    <div key={t.title} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">{t.title}</h4>
                        <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">{t.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-8">
                <Link href="/a-propos" className="btn-primary">
                  Notre histoire <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ZONES ── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <span className="badge mb-3"><MapPin className="w-3.5 h-3.5" /> Couverture</span>
              <h2 className="section-title">112 communes autour de Lyon</h2>
            </div>
            <Link href="/zones-intervention" className="btn-secondary self-start md:self-auto flex-shrink-0">
              Voir toutes les villes <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {featuredZones.map((zone) => (
              <Link
                key={zone.slug}
                href={`/zones-intervention/${zone.slug}`}
                className="flex items-center gap-1.5 px-3.5 py-2 bg-gray-50 hover:bg-brand-50 border border-gray-200 hover:border-brand-300 rounded-full text-sm text-gray-600 hover:text-brand-700 transition-all font-medium"
              >
                <MapPin className="w-3 h-3 text-brand-400" />
                {zone.nom}
              </Link>
            ))}
            <Link
              href="/zones-intervention"
              className="flex items-center gap-1.5 px-3.5 py-2 bg-brand-50 border border-brand-200 rounded-full text-sm text-brand-600 font-semibold hover:bg-brand-100 transition-all"
            >
              +94 autres communes <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-20 gradient-brand relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Prêt à libérer<br />de l&apos;espace ?
              </h2>
              <p className="mt-4 text-orange-100 text-lg leading-relaxed">
                Devis gratuit, sans engagement. On vous répond sous 24h et on intervient sous 48h.
              </p>
              <p className="mt-4 text-orange-200 text-sm">
                Lun–Ven 8h–19h · Sam 9h–17h · Urgences acceptées
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+33623136783"
                className="flex items-center justify-center gap-3 bg-white text-gray-900 font-bold text-lg px-7 py-5 rounded-2xl shadow-xl hover:bg-gray-50 transition-all hover:scale-[1.02]"
              >
                <Phone className="w-6 h-6 text-green-600" />
                06 23 13 67 83
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 border-2 border-white/60 text-white font-semibold px-7 py-4 rounded-2xl hover:bg-white/10 transition-all"
              >
                Formulaire de devis en ligne <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
