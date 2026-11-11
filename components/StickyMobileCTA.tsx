"use client";

import { usePathname } from "next/navigation";
import { Phone, FileText } from "lucide-react";

export default function StickyMobileCTA() {
  const pathname = usePathname();
  const devisHref = pathname === "/contact" ? "/contact" : "#devis";

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] p-3 grid grid-cols-2 gap-3">
      <a href="tel:+33623136783" className="flex items-center justify-center gap-2 bg-green-600 text-white font-bold rounded-xl py-3 text-sm">
        <Phone className="w-4 h-4" /> Appeler
      </a>
      <a href={devisHref} className="flex items-center justify-center gap-2 gradient-brand text-white font-bold rounded-xl py-3 text-sm">
        <FileText className="w-4 h-4" /> Devis gratuit
      </a>
    </div>
  );
}
