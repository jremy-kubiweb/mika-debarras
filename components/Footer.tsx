import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Truck, Facebook, Instagram } from "lucide-react";

const services = [
  { href: "/services#vide-maison", label: "Vide Maison" },
  { href: "/services#vide-appartement", label: "Vide Appartement" },
  { href: "/services#vide-cave", label: "Vide Cave" },
  { href: "/services#vide-grenier-professionnel", label: "Vide Grenier" },
  { href: "/services#succession-heritage", label: "Succession & Héritage" },
  { href: "/services#debarras-bureau", label: "Débarras Bureau" },
];

const zones = [
  { href: "/zones-intervention/lyon", label: "Lyon" },
  { href: "/zones-intervention/villeurbanne", label: "Villeurbanne" },
  { href: "/zones-intervention/venissieux", label: "Vénissieux" },
  { href: "/zones-intervention/bron", label: "Bron" },
  { href: "/zones-intervention/caluire-et-cuire", label: "Caluire-et-Cuire" },
  { href: "/zones-intervention/saint-priest", label: "Saint-Priest" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* CTA Banner */}
      <div className="gradient-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Besoin d&apos;un débarras rapide à Lyon ?</h2>
              <p className="text-orange-100/80 mt-1.5 text-sm">Devis gratuit sous 24h — Intervention sous 48h</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href="tel:+33623136783"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-700 font-bold px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors shadow-md text-sm"
              >
                <Phone className="w-4 h-4" />
                06 23 13 67 83
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl transition-all text-sm"
              >
                Devis gratuit
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 gradient-brand rounded-xl flex items-center justify-center shadow-md">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[17px] font-bold tracking-tight">
                  MiKa <span className="text-brand-400">Débarras</span>
                </span>
                <span className="text-[11px] text-gray-500 uppercase tracking-wide mt-0.5">Lyon & Grand Lyon</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Entreprise de débarras professionnelle intervenant à Lyon et dans toute l&apos;agglomération lyonnaise.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-dark-700 rounded-xl flex items-center justify-center text-gray-500 hover:text-white hover:bg-brand-600 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-dark-700 rounded-xl flex items-center justify-center text-gray-500 hover:text-white hover:bg-brand-600 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Nos Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Zones d&apos;intervention</h3>
            <ul className="space-y-2.5">
              {zones.map((z) => (
                <li key={z.href}>
                  <Link href={z.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {z.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/zones-intervention" className="text-brand-400 hover:text-brand-300 text-sm font-medium transition-colors">
                  Toutes les zones →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Contact</h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <Phone className="w-3.5 h-3.5 text-brand-500 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+33623136783" className="text-gray-300 hover:text-white text-sm transition-colors block font-medium">
                    06 23 13 67 83
                  </a>
                  <span className="text-gray-600 text-xs">Appel & SMS</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-3.5 h-3.5 text-brand-500 mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@mika-debarras.fr" className="text-gray-400 hover:text-white text-sm transition-colors break-all">
                  contact@mika-debarras.fr
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-3.5 h-3.5 text-brand-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Lyon & Grand Lyon (69)</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-3.5 h-3.5 text-brand-500 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-gray-400 text-sm block">Lun–Ven : 8h–19h</span>
                  <span className="text-gray-400 text-sm block">Sam : 9h–17h</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} MiKa Débarras — Tous droits réservés
          </p>
          <div className="flex items-center gap-5">
            <Link href="/mentions-legales" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
