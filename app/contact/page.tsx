import type { Metadata } from "next";
import { buildMeta } from "@/lib/metadata";
import Image from "next/image";
import { IMG } from "@/lib/images";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = buildMeta({
  title: "Contact & Devis Gratuit — Débarras Lyon",
  description:
    "Contactez MiKa Débarras pour un devis gratuit sous 24h. Formulaire en ligne, téléphone ou email. Intervention rapide dans Lyon et le Grand Lyon.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMG.heroes.contact}
            alt=""
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-dark/65" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="badge mb-4">Contactez-nous</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Demandez votre{" "}
              <span className="text-brand-400">devis gratuit</span>
            </h1>
            <p className="mt-4 text-gray-300 text-lg leading-relaxed">
              Réponse garantie sous 24h. Devis gratuit, sans engagement, sur mesure.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Infos contact */}
            <div className="lg:col-span-1 space-y-6">
              <div className="card">
                <h2 className="font-bold text-gray-900 text-lg mb-5">Nos coordonnées</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 gradient-brand rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Téléphone</p>
                      <a href="tel:+33623136783" className="text-brand-600 hover:text-brand-700 text-sm font-medium">
                        06 23 13 67 83
                      </a>
                      <p className="text-gray-400 text-xs mt-0.5">Appel & SMS</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 gradient-brand rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Email</p>
                      <a href="mailto:contact@mika-debarras.fr" className="text-brand-600 hover:text-brand-700 text-sm font-medium">
                        contact@mika-debarras.fr
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 gradient-brand rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Zone d&apos;intervention</p>
                      <p className="text-gray-600 text-sm">Lyon & Grand Lyon (Rhône 69)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 gradient-brand rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Horaires</p>
                      <p className="text-gray-600 text-sm">Lun–Ven : 8h–19h</p>
                      <p className="text-gray-600 text-sm">Sam : 9h–17h</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card bg-green-50 border-green-200">
                <h3 className="font-bold text-green-900 mb-2">Besoin urgent ?</h3>
                <p className="text-green-700 text-sm mb-4">
                  Pour les urgences (décès, logement à libérer rapidement), appelez-nous directement.
                </p>
                <a href="tel:+33623136783" className="btn-phone w-full justify-center text-sm">
                  <Phone className="w-4 h-4" />
                  Appel direct
                </a>
              </div>

              <div className="relative rounded-2xl overflow-hidden h-48">
                <Image
                  src={IMG.contactSide}
                  alt="Débarras professionnel à Lyon"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-dark/40 flex items-end p-4">
                  <p className="text-white text-sm font-medium">Intervention professionnelle à Lyon</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-bold text-gray-900 mb-3">Nos engagements</h3>
                <ul className="space-y-2">
                  {[
                    "Réponse sous 24h garantie",
                    "Devis gratuit et sans engagement",
                    "Tarifs transparents",
                    "Équipe assurée et qualifiée",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Formulaire (client component) */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
