"use client";

import { usePathname } from "next/navigation";
import QuickQuoteForm from "@/components/QuickQuoteForm";

export default function HeroQuoteForm() {
  const pathname = usePathname();

  return (
    <div id="devis" className="scroll-mt-28 w-full max-w-md mx-auto lg:mr-0">
      <QuickQuoteForm
        source={`Page ${pathname} — formulaire en haut de page`}
        title="Votre devis gratuit en 2 minutes"
        subtitle="Laissez vos coordonnées : un membre de l'équipe vous rappelle sous 24h."
      />
    </div>
  );
}
