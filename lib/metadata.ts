import type { Metadata } from "next";

export const SITE = {
  name: "MiKa Débarras Lyon",
  url: "https://www.mika-debarras.fr",
  ogImage: "/og-image.jpg",
  locale: "fr_FR",
  phone: "06 12 34 56 78",
} as const;

interface BuildMetaOptions {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
  ogImage?: string;
}

export function buildMeta({
  title,
  description,
  path = "",
  noIndex = false,
  ogImage = SITE.ogImage,
}: BuildMetaOptions): Metadata {
  const url = `${SITE.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      url,
      siteName: SITE.name,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
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
}
