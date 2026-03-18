export interface Zone {
  slug: string;
  nom: string;
  codePostal: string;
  description: string;
  population?: number;
  voisines: string[];
}

export const zones: Zone[] = [
  {
    slug: "lyon",
    nom: "Lyon",
    codePostal: "69001-69009",
    description: "Débarras et vide maison à Lyon — intervention dans tous les arrondissements.",
    population: 522228,
    voisines: ["villeurbanne", "caluire-et-cuire", "venissieux", "bron", "tassin-la-demi-lune"],
  },
  {
    slug: "villeurbanne",
    nom: "Villeurbanne",
    codePostal: "69100",
    description: "Service de débarras professionnel à Villeurbanne, proche Lyon.",
    population: 150247,
    voisines: ["lyon", "caluire-et-cuire", "bron", "decines-charpieu", "meyzieu"],
  },
  {
    slug: "venissieux",
    nom: "Vénissieux",
    codePostal: "69200",
    description: "Vide cave, débarras maison et appartement à Vénissieux.",
    population: 66000,
    voisines: ["lyon", "bron", "saint-priest", "mions", "oullins"],
  },
  {
    slug: "saint-priest",
    nom: "Saint-Priest",
    codePostal: "69800",
    description: "Débarras rapide et professionnel à Saint-Priest.",
    population: 44000,
    voisines: ["venissieux", "bron", "mions", "meyzieu", "decines-charpieu"],
  },
  {
    slug: "bron",
    nom: "Bron",
    codePostal: "69500",
    description: "Vide maison et débarras tous volumes à Bron.",
    population: 40000,
    voisines: ["lyon", "villeurbanne", "venissieux", "saint-priest", "decines-charpieu"],
  },
  {
    slug: "caluire-et-cuire",
    nom: "Caluire-et-Cuire",
    codePostal: "69300",
    description: "Débarras et vide grenier professionnel à Caluire-et-Cuire.",
    population: 43000,
    voisines: ["lyon", "villeurbanne", "meyzieu"],
  },
  {
    slug: "tassin-la-demi-lune",
    nom: "Tassin-la-Demi-Lune",
    codePostal: "69160",
    description: "Service de débarras à Tassin-la-Demi-Lune — intervention rapide.",
    population: 22000,
    voisines: ["lyon", "oullins", "caluire-et-cuire"],
  },
  {
    slug: "oullins",
    nom: "Oullins",
    codePostal: "69600",
    description: "Débarras professionnel et vide maison à Oullins.",
    population: 27000,
    voisines: ["lyon", "venissieux", "givors", "tassin-la-demi-lune"],
  },
  {
    slug: "givors",
    nom: "Givors",
    codePostal: "69700",
    description: "Vide appartement, débarras maison à Givors et ses environs.",
    population: 19000,
    voisines: ["oullins", "venissieux", "mions"],
  },
  {
    slug: "meyzieu",
    nom: "Meyzieu",
    codePostal: "69330",
    description: "Débarras et vide cave à Meyzieu — devis gratuit sous 24h.",
    population: 32000,
    voisines: ["villeurbanne", "decines-charpieu", "bron", "saint-priest"],
  },
  {
    slug: "decines-charpieu",
    nom: "Décines-Charpieu",
    codePostal: "69150",
    description: "Service de débarras professionnel à Décines-Charpieu.",
    population: 27000,
    voisines: ["villeurbanne", "bron", "meyzieu", "saint-priest"],
  },
  {
    slug: "mions",
    nom: "Mions",
    codePostal: "69780",
    description: "Débarras rapide à Mions — intervention sous 48h.",
    population: 12000,
    voisines: ["venissieux", "saint-priest", "givors", "decines-charpieu"],
  },
];

export function getZoneBySlug(slug: string): Zone | undefined {
  return zones.find((z) => z.slug === slug);
}

export function getVoisines(zone: Zone): Zone[] {
  return zone.voisines
    .map((slug) => zones.find((z) => z.slug === slug))
    .filter((z): z is Zone => z !== undefined);
}
