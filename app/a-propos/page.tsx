import type { Metadata } from "next";
import { buildMeta } from "@/lib/metadata";
import Link from "next/link";
import Image from "next/image";
import { IMG } from "@/lib/images";
import {
  Award,
  Leaf,
  Users,
  ShieldCheck,
  Heart,
  ArrowRight,
  Phone,
} from "lucide-react";

export const metadata: Metadata = buildMeta({
  title: "À Propos de MiKa Débarras — Entreprise de Débarras à Lyon",
  description:
    "10 ans d'expérience, plus de 1 200 interventions. Découvrez l'équipe MiKa Débarras : professionnels du débarras à Lyon, engagés pour un service rapide, humain et éco-responsable.",
  path: "/a-propos",
});

const valeurs = [
  {
    icon: ShieldCheck,
    titre: "Professionnalisme",
    desc: "Équipe formée, assurée, ponctuelle. Nous respectons vos biens, vos lieux et votre temps.",
  },
  {
    icon: Heart,
    titre: "Humanité",
    desc: "Débarras de succession ou de départ en maison de retraite : nous intervenons avec tact et discrétion.",
  },
  {
    icon: Leaf,
    titre: "Éco-responsabilité",
    desc: "Tri systématique, valorisation des objets récupérables, déchèteries agréées. Zéro gaspillage.",
  },
  {
    icon: Users,
    titre: "Proximité",
    desc: "Entreprise locale lyonnaise. Nous connaissons le terrain et les contraintes du Grand Lyon.",
  },
];

const equipe = [
  {
    nom: "Mikael D.",
    role: "Fondateur & Responsable technique",
    exp: "15 ans d'expérience",
    desc: "Expert en débarras et logistique, Mikael a fondé MiKa Débarras avec la conviction que ce métier doit être exercé avec rigueur et humanité.",
  },
  {
    nom: "Julie M.",
    role: "Coordinatrice & Devis",
    exp: "8 ans d'expérience",
    desc: "Julie gère les devis, planifie les interventions et assure le suivi client avec soin. Elle est votre interlocutrice principale.",
  },
  {
    nom: "Karim B.",
    role: "Chef d'équipe terrain",
    exp: "10 ans d'expérience",
    desc: "Karim dirige les opérations sur le terrain avec efficacité et rigueur. Il encadre une équipe de 4 débarasseurs qualifiés.",
  },
];

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMG.heroes.aPropos}
            alt=""
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-dark/65" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <span className="badge mb-5">Notre histoire</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Une entreprise lyonnaise{" "}
              <span className="text-brand-400">au service de votre espace</span>
            </h1>
            <p className="mt-5 text-gray-300/90 text-lg leading-relaxed">
              Fondée à Lyon il y a 10 ans, MiKa Débarras est devenue la référence locale du débarras professionnel, humain et éco-responsable.
            </p>
          </div>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="badge mb-4">Notre histoire</span>
              <h2 className="section-title">10 ans de débarras à Lyon</h2>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  MiKa Débarras a été créée en 2014 par Mikael, fort de 15 ans d'expérience dans la logistique et la gestion des déchets. Sa vision : proposer un service de débarras professionnel, humain et respectueux de l'environnement.
                </p>
                <p>
                  En 10 ans, nous avons réalisé plus de 1 200 interventions à Lyon et dans toute l'agglomération lyonnaise. Notre équipe s'est étoffée, nos processus se sont affinés, mais notre engagement reste intact.
                </p>
                <p>
                  Chaque débarras est unique. Qu'il s'agisse d'une succession, d'un déménagement ou d'un simple vide cave, nous apportons la même attention et le même professionnalisme.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  { value: "2014", label: "Création" },
                  { value: "1 200+", label: "Interventions" },
                  { value: "98%", label: "Satisfaction" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="text-3xl font-bold text-brand-600 tracking-tight">{stat.value}</div>
                    <div className="text-gray-500 text-xs mt-1.5 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden aspect-square bg-gray-100">
              <Image
                src={IMG.team}
                alt="MiKa Débarras — entreprise de débarras à Lyon depuis 2014"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge mb-3">Ce qui nous guide</span>
            <h2 className="section-title">Nos valeurs</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valeurs.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.titre} className="card text-center">
                  <div className="w-12 h-12 gradient-brand rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{v.titre}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge mb-3">L'équipe</span>
            <h2 className="section-title">Les visages de MiKa Débarras</h2>
            <p className="section-subtitle mx-auto mt-3">
              Une équipe soudée, professionnelle et passionnée par son métier.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {equipe.map((membre) => (
              <div key={membre.nom} className="card text-center">
                <div className="w-16 h-16 gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md text-white text-xl font-bold">
                  {membre.nom[0]}
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{membre.nom}</h3>
                <p className="text-brand-600 text-sm font-medium mt-1">{membre.role}</p>
                <span className="inline-flex mt-2 items-center text-xs bg-brand-50 text-brand-700 border border-brand-100 px-2.5 py-1 rounded-full font-medium">
                  {membre.exp}
                </span>
                <p className="text-gray-500 text-sm mt-4 leading-relaxed">{membre.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-title">Garanties & certifications</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Assurance responsabilité civile professionnelle",
              "Transporteur de déchets agréé (n° de récépissé préfectoral)",
              "Partenariats associations locales pour le réemploi",
              "Devis écrits et contrats clairs pour chaque intervention",
              "Formation continue de l'équipe terrain",
              "Satisfaction client : engagement de reprise si insatisfaction",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                <Award className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span className="text-gray-700 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-brand">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Faisons connaissance</h2>
          <p className="text-orange-100/80 text-lg mb-10">
            Contactez notre équipe pour un devis gratuit ou simplement pour en savoir plus sur nos services.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+33623136783" className="btn-phone">
              <Phone className="w-5 h-5" />
              06 23 13 67 83
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl transition-all">
              Nous contacter
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
