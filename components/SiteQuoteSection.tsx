"use client";

import { usePathname } from "next/navigation";
import QuickQuoteForm from "@/components/QuickQuoteForm";

const PAGES_SANS_FORMULAIRE = ["/", "/contact"];

export default function SiteQuoteSection() {
  const pathname = usePathname();
  if (PAGES_SANS_FORMULAIRE.includes(pathname)) return null;

  return (
    <section id="devis" className="scroll-mt-24 py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Votre devis gratuit en 2 minutes</h2>
          <p className="mt-3 text-gray-600 text-lg">Laissez vos coordonnées, un membre de l&apos;équipe vous rappelle sous 24h.</p>
        </div>
        <QuickQuoteForm source={`Page ${pathname}`} layout="inline" className="border border-gray-100" />
      </div>
    </section>
  );
}
