import { IMG } from "@/lib/images";

export interface Service {
  slug: string;
  titre: string;
  description: string;
  descriptionLongue: string;
  icon: string;
  prix: string;
  image: string;
}

export const services: Service[] = [
  {
    slug: "vide-maison",
    titre: "Vide Maison",
    description: "Débarras complet d'une maison, de la cave au grenier, avec tri et valorisation des objets.",
    descriptionLongue:
      "Notre service de vide maison prend en charge l'intégralité du débarras : meubles, électroménager, objets divers. Nous trions, valorisons les objets récupérables et éliminons le reste dans le respect des normes environnementales.",
    icon: "Home",
    prix: "À partir de 150€",
    image: IMG.services["vide-maison"],
  },
  {
    slug: "vide-appartement",
    titre: "Vide Appartement",
    description: "Débarras rapide d'appartements, studios et lofts à Lyon et agglomération.",
    descriptionLongue:
      "Que ce soit pour une succession, un déménagement ou une mise en location, notre équipe intervient pour vider votre appartement rapidement et dans le respect des lieux.",
    icon: "Building2",
    prix: "À partir de 100€",
    image: IMG.services["vide-appartement"],
  },
  {
    slug: "vide-cave",
    titre: "Vide Cave",
    description: "Évacuation de cave : meubles stockés, outils, cartons, encombrants.",
    descriptionLongue:
      "Caves humides, encombrées, difficiles d'accès : notre équipe est équipée pour vider tout type de cave en une journée. Nous gérons aussi la dépose des étagères et l'évacuation des déchets spéciaux.",
    icon: "Archive",
    prix: "À partir de 80€",
    image: IMG.services["vide-cave"],
  },
  {
    slug: "vide-grenier-professionnel",
    titre: "Vide Grenier",
    description: "Débarras de grenier : récupération, tri et évacuation de tous vos encombrants.",
    descriptionLongue:
      "Vieux meubles, cartons empilés, objets oubliés… Notre équipe accède à tous types de greniers et combles pour un débarras en bonne et due forme, sans abîmer les accès.",
    icon: "Package",
    prix: "À partir de 90€",
    image: IMG.services["vide-grenier-professionnel"],
  },
  {
    slug: "succession-heritage",
    titre: "Succession & Héritage",
    description: "Accompagnement discret et humain pour les débarras de successions.",
    descriptionLongue:
      "Les débarras de successions nécessitent tact et discrétion. Nous intervenons rapidement après un décès pour libérer un logement avec respect et professionnalisme, en lien avec les notaires si besoin.",
    icon: "Heart",
    prix: "Sur devis",
    image: IMG.services["succession-heritage"],
  },
  {
    slug: "debarras-bureau",
    titre: "Débarras Bureau & Local",
    description: "Vidage de bureaux, entrepôts et locaux commerciaux à Lyon.",
    descriptionLongue:
      "Déménagement d'entreprise, fermeture de commerce ou restructuration : nous intervenons pour le débarras de tous types de locaux professionnels avec rapidité et discrétion.",
    icon: "Briefcase",
    prix: "Sur devis",
    image: IMG.services["debarras-bureau"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
