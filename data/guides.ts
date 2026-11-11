export interface Guide {
  slug: string;
  titre: string;
  description: string;
  date: string;
  lecture: string;
  sections: { h2: string; p: string[] }[];
  servicesLies: string[];
}

export const guides: Guide[] = [
  {
    slug: "prix-debarras-lyon",
    titre: "Combien coûte un débarras à Lyon ?",
    description:
      "Volume, accès, tri, distance : les critères qui font le prix d'un débarras à Lyon, nos tarifs de départ et nos conseils pour obtenir un devis juste.",
    date: "2026-11-11",
    lecture: "4 min",
    servicesLies: ["vide-maison", "vide-appartement", "vide-cave"],
    sections: [
      {
        h2: "Les critères qui déterminent le prix",
        p: [
          "Il n'existe pas de prix unique pour un débarras : chaque logement est différent. Le premier critère est le volume d'objets à évacuer, généralement estimé en mètres cubes. Une cave de quelques mètres carrés ne demande pas les mêmes moyens qu'une maison de famille remplie sur trois niveaux.",
          "Viennent ensuite l'accès (étage, présence d'un ascenseur, largeur des escaliers, distance entre le logement et le camion), le temps de tri nécessaire, la nature des objets (meubles massifs, électroménager, déchets spéciaux) et le coût de traitement en déchetterie ou en filière de recyclage.",
        ],
      },
      {
        h2: "Nos tarifs de départ",
        p: [
          "À titre indicatif, nos interventions démarrent à partir de 80 € pour un vide cave, 90 € pour un grenier, 100 € pour un appartement et 150 € pour une maison. Les débarras de succession et de locaux professionnels sont établis sur devis, car ils varient beaucoup d'un chantier à l'autre.",
          "Ces montants sont des points de départ : le prix final est fixé dans le devis, après visite ou sur photos, et ne change pas le jour de l'intervention.",
        ],
      },
      {
        h2: "La valorisation des objets peut réduire la facture",
        p: [
          "Certains meubles, objets anciens ou équipements en bon état peuvent être revendus ou donnés. Lorsque c'est le cas, leur valeur peut venir en déduction du coût du débarras. Nous l'évaluons lors de la visite et l'indiquons clairement dans le devis.",
        ],
      },
      {
        h2: "Comment obtenir un devis juste",
        p: [
          "Méfiez-vous des prix annoncés sans avoir vu le logement. Un devis sérieux est établi après une visite ou à partir de photos de chaque pièce, cave et grenier compris. Il précise ce qui est inclus : main d'œuvre, transport, frais de déchetterie et nettoyage final.",
          "Chez MiKa Débarras, la visite et le devis sont gratuits et sans engagement. Vous pouvez aussi nous envoyer des photos par WhatsApp pour une première estimation rapide.",
        ],
      },
    ],
  },
  {
    slug: "vider-maison-proche-decede",
    titre: "Vider la maison d'un proche décédé : par où commencer ?",
    description:
      "Les étapes pour vider le logement d'un parent disparu sereinement : documents à retrouver, objets à partager, tri et recours à un professionnel du débarras.",
    date: "2026-11-11",
    lecture: "5 min",
    servicesLies: ["succession-heritage", "vide-maison"],
    sections: [
      {
        h2: "Prendre le temps avant de trier",
        p: [
          "Vider la maison d'un proche est une épreuve autant émotionnelle que matérielle. Il n'y a pas d'urgence à tout faire dans les premiers jours, sauf contrainte de bail ou de vente. Prenez le temps de vous mettre d'accord entre membres de la famille sur le calendrier et la répartition des tâches.",
        ],
      },
      {
        h2: "Retrouver les documents importants",
        p: [
          "Avant tout tri, rassemblez les papiers administratifs : livret de famille, titres de propriété, contrats d'assurance, relevés bancaires, avis d'imposition, testament éventuel. Ils seront utiles au notaire et aux démarches. Vérifiez aussi les tiroirs, boîtes et livres : documents et valeurs y sont souvent rangés.",
        ],
      },
      {
        h2: "Identifier ce que chacun souhaite garder",
        p: [
          "Faites le tour du logement en famille pour repérer les meubles, photos et souvenirs que chacun souhaite conserver. Un simple étiquetage avec des pastilles de couleur évite les malentendus le jour du débarras.",
        ],
      },
      {
        h2: "Trier : garder, donner, vendre, recycler",
        p: [
          "Pour le reste, quatre destinations : ce qui est conservé par la famille, ce qui peut être vendu, ce qui peut être donné à des associations, et ce qui doit être recyclé ou jeté. Un professionnel du débarras peut prendre en charge tout ou partie de ce tri.",
        ],
      },
      {
        h2: "Faire appel à un professionnel",
        p: [
          "Une entreprise de débarras vous évite des journées de manutention, la location d'un camion et les allers-retours en déchetterie. Chez MiKa Débarras, nous mettons systématiquement de côté les papiers, photos et objets personnels retrouvés, et nous pouvons intervenir en votre absence si vous habitez loin.",
        ],
      },
    ],
  },
  {
    slug: "debarras-succession-demarches",
    titre: "Débarras et succession : les points à vérifier avant de vider un logement",
    description:
      "Accord des héritiers, rôle du notaire, logement en location ou à vendre : ce qu'il faut vérifier avant de lancer le débarras d'un logement dans le cadre d'une succession.",
    date: "2026-11-11",
    lecture: "4 min",
    servicesLies: ["succession-heritage"],
    sections: [
      {
        h2: "Obtenir l'accord des héritiers",
        p: [
          "Les biens du défunt appartiennent à l'ensemble des héritiers tant que la succession n'est pas réglée. Avant de vider le logement, assurez-vous que tous les héritiers sont d'accord sur le principe et le calendrier du débarras, et sur le sort des objets de valeur.",
        ],
      },
      {
        h2: "Demander conseil au notaire en cas de doute",
        p: [
          "Certains actes sur les biens du défunt peuvent avoir des conséquences sur la succession, notamment si un héritier hésite encore à l'accepter. En cas de doute, demandez l'avis du notaire chargé du dossier avant de vendre ou de jeter quoi que ce soit. Il peut aussi souhaiter un inventaire préalable des biens.",
        ],
      },
      {
        h2: "Logement en location : prévenir le bailleur",
        p: [
          "Si le défunt était locataire, le logement doit être libéré pour la restitution des clés et l'état des lieux. Contactez le bailleur pour connaître les délais et organisez le débarras en conséquence.",
        ],
      },
      {
        h2: "Logement à vendre : vider pour valoriser",
        p: [
          "Si le bien est destiné à la vente, un logement vidé et propre se visite plus facilement et permet aux acheteurs de se projeter. Le débarras peut être planifié avant la mise en vente ou entre le compromis et l'acte définitif, selon ce qui est convenu.",
        ],
      },
      {
        h2: "Comment nous travaillons avec les familles et les notaires",
        p: [
          "MiKa Débarras intervient à la demande des familles, des notaires ou des mandataires. Nous mettons de côté papiers, photos et objets de valeur, et nous adaptons notre calendrier aux étapes de la succession.",
        ],
      },
    ],
  },
  {
    slug: "preparer-vide-maison-avant-vente",
    titre: "Préparer un vide maison avant une vente immobilière",
    description:
      "Pourquoi et quand vider une maison avant de la vendre, comment organiser le tri et ce qu'il faut prévoir pour une remise des clés sans stress.",
    date: "2026-11-11",
    lecture: "4 min",
    servicesLies: ["vide-maison", "vide-appartement", "vide-grenier-professionnel"],
    sections: [
      {
        h2: "Pourquoi vider avant de vendre",
        p: [
          "Un logement encombré paraît plus petit et empêche les acheteurs de se projeter. À l'inverse, des pièces dégagées mettent en valeur les volumes, la lumière et l'état réel du bien, ce qui facilite les visites et les diagnostics.",
        ],
      },
      {
        h2: "Quand programmer le débarras",
        p: [
          "Deux moments sont possibles : avant la mise en vente, pour présenter un bien dégagé, ou après la signature du compromis, pour livrer le logement vide le jour de l'acte. Dans les deux cas, anticipez de quelques semaines pour pouvoir trier sereinement.",
        ],
      },
      {
        h2: "Organiser le tri pièce par pièce",
        p: [
          "Commencez par les espaces de stockage souvent oubliés : cave, grenier, garage, abri de jardin. Mettez de côté ce que vous emportez, puis listez ce qui peut être vendu ou donné. Le reste sera évacué par le professionnel.",
        ],
      },
      {
        h2: "Le jour de la remise des clés",
        p: [
          "L'acheteur attend en général un logement vide de tout meuble et objet, sauf accord contraire. Prévoyez le débarras quelques jours avant la signature pour garder une marge. MiKa Débarras rend les pièces vides et balayées, prêtes pour la remise des clés.",
        ],
      },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
