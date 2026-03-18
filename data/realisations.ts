import { IMG } from "@/lib/images";

export interface Realisation {
  id: number;
  titre: string;
  lieu: string;
  type: string;
  description: string;
  avant: string;
  apres: string;
  duree: string;
  volume: string;
}

export const realisations: Realisation[] = [
  {
    id: 1,
    titre: "Vide maison Lyon 7ème",
    lieu: "Lyon 7ème",
    type: "Vide maison",
    description: "Débarras complet d'une maison de 120m² suite à une succession. Tri, valorisation et évacuation de 15 tonnes de mobilier et objets divers.",
    avant: IMG.avant[0],
    apres: IMG.apres[0],
    duree: "2 jours",
    volume: "15 tonnes",
  },
  {
    id: 2,
    titre: "Cave d'immeuble Villeurbanne",
    lieu: "Villeurbanne",
    type: "Vide cave",
    description: "Évacuation complète d'une cave de 40m² remplie de mobilier stocké depuis 20 ans.",
    avant: IMG.avant[1],
    apres: IMG.apres[1],
    duree: "1 jour",
    volume: "4 tonnes",
  },
  {
    id: 3,
    titre: "Appartement succession Lyon 3ème",
    lieu: "Lyon 3ème",
    type: "Vide appartement",
    description: "Débarras d'un appartement de 65m² en contexte de succession. Intervention discrète et rapide en accord avec le notaire.",
    avant: IMG.avant[2],
    apres: IMG.apres[2],
    duree: "1 jour",
    volume: "6 tonnes",
  },
  {
    id: 4,
    titre: "Grenier maison Caluire",
    lieu: "Caluire-et-Cuire",
    type: "Vide grenier",
    description: "Débarras d'un grenier de 60m² avec récupération de meubles anciens de valeur et évacuation des encombrants.",
    avant: IMG.avant[3],
    apres: IMG.apres[3],
    duree: "1 jour",
    volume: "3 tonnes",
  },
  {
    id: 5,
    titre: "Local commercial Bron",
    lieu: "Bron",
    type: "Débarras local",
    description: "Vidage complet d'un local commercial de 200m² suite à fermeture. Mobilier de bureau, rayonnages et stocks.",
    avant: IMG.avant[4],
    apres: IMG.apres[4],
    duree: "3 jours",
    volume: "25 tonnes",
  },
  {
    id: 6,
    titre: "Maison de retraite Saint-Priest",
    lieu: "Saint-Priest",
    type: "Vide maison",
    description: "Débarras d'une maison de 90m² lors d'un déménagement vers une maison de retraite, avec reprise du mobilier en bon état.",
    avant: IMG.avant[5],
    apres: IMG.apres[5],
    duree: "1 jour",
    volume: "8 tonnes",
  },
];
