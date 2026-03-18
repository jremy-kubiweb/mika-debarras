import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/metadata";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "MiKa Débarras Lyon — Vide Maison, Cave & Appartement",
    template: "%s | MiKa Débarras Lyon",
  },
  description:
    "MiKa Débarras : entreprise de débarras professionnelle à Lyon. Vide maison, vide cave, succession. Devis gratuit sous 24h. Intervention rapide dans tout le Grand Lyon.",
  keywords: [
    "débarras Lyon",
    "vide maison Lyon",
    "vide cave Lyon",
    "débarras succession Lyon",
    "entreprise débarras Lyon",
    "vide appartement Lyon",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MiKa Débarras",
  description:
    "Entreprise de débarras professionnelle à Lyon. Vide maison, vide cave, vide appartement, succession. Devis gratuit sous 24h.",
  url: "https://www.mika-debarras.fr",
  telephone: "+33623136783",
  email: "contact@mika-debarras.fr",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lyon",
    addressRegion: "Auvergne-Rhône-Alpes",
    addressCountry: "FR",
    postalCode: "69000",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.7640,
    longitude: 4.8357,
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Grand Lyon (Rhône 69)",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  priceRange: "€€",
  serviceType: [
    "Vide Maison",
    "Vide Cave",
    "Vide Appartement",
    "Vide Grenier",
    "Débarras Succession",
    "Débarras Bureau",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
