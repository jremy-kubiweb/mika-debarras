"use client";

import { usePathname } from "next/navigation";
import { Phone, FileText, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/metadata";

const whatsappHref = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  "Bonjour, je souhaite un devis pour un débarras. Je vous envoie quelques photos :"
)}`;

export default function StickyMobileCTA() {
  const pathname = usePathname();
  const devisHref = pathname === "/contact" ? "/contact" : "#devis";

  return (
    <>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-6 right-6 z-50 items-center gap-2 bg-[#25D366] text-white font-semibold text-sm rounded-full shadow-xl pl-4 pr-5 py-3 hover:scale-105 transition-transform"
      >
        <MessageCircle className="w-5 h-5" /> Devis sur photos (WhatsApp)
      </a>

      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] p-3 grid grid-cols-3 gap-2">
        <a href="tel:+33623136783" className="flex items-center justify-center gap-1.5 bg-green-600 text-white font-bold rounded-xl py-3 text-sm">
          <Phone className="w-4 h-4" /> Appeler
        </a>
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 bg-[#25D366] text-white font-bold rounded-xl py-3 text-sm">
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
        <a href={devisHref} className="flex items-center justify-center gap-1.5 gradient-brand text-white font-bold rounded-xl py-3 text-sm">
          <FileText className="w-4 h-4" /> Devis
        </a>
      </div>
    </>
  );
}
