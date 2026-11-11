export interface Actualite {
  slug: string;
  titre: string;
  description: string;
  date: string;
  categorie: string;
  lecture: string;
  sections: { h2: string; p: string[] }[];
  servicesLies: string[];
}

export const actualites: Actualite[] = [
  {
    slug: "encombrants-lyon-solutions",
    titre: "Encombrants à Lyon : quelles solutions pour s'en débarrasser ?",
    description:
      "Déchèteries de la Métropole, dons, revente ou entreprise de débarras : le point sur les solutions pour évacuer vos encombrants à Lyon et dans le Grand Lyon.",
    date: "2026-11-10",
    categorie: "Conseils",
    lecture: "4 min",
    servicesLies: ["vide-cave", "vide-appartement"],
    sections: [
      {
        h2: "Ne pas déposer ses encombrants sur le trottoir",
        p: [
          "Un vieux canapé, un matelas ou une armoire déposés sur la voie publique, c'est un dépôt sauvage passible d'amende. À Lyon comme dans toute la Métropole, il existe des solutions légales et souvent simples pour évacuer ses encombrants.",
        ],
      },
      {
        h2: "Les déchèteries de la Métropole de Lyon",
        p: [
          "La Métropole de Lyon dispose d'un réseau de déchèteries accessibles aux particuliers. C'est une bonne solution pour quelques objets, à condition d'avoir un véhicule adapté et de respecter les règles d'accès. Renseignez-vous sur le site de la Métropole avant de vous déplacer.",
        ],
      },
      {
        h2: "Donner ou revendre ce qui peut servir",
        p: [
          "Meubles en bon état, électroménager qui fonctionne, vaisselle : beaucoup d'objets peuvent avoir une seconde vie via les ressourceries, les associations ou les sites de revente entre particuliers.",
        ],
      },
      {
        h2: "Faire appel à une entreprise de débarras",
        p: [
          "Quand le volume est important, que vous n'avez pas de véhicule ou que l'accès est difficile (étage sans ascenseur, cave étroite), une entreprise de débarras est la solution la plus simple. MiKa Débarras se charge du portage, du transport, du tri et du dépôt dans les bonnes filières, partout dans le Grand Lyon.",
        ],
      },
    ],
  },
  {
    slug: "debarras-ehpad-vider-logement-parent",
    titre: "Entrée en EHPAD : comment vider le logement d'un parent ?",
    description:
      "Votre parent entre en maison de retraite ou en EHPAD ? Nos conseils pour choisir ce qu'il emporte, trier le reste et organiser le débarras de son logement.",
    date: "2026-11-03",
    categorie: "Conseils",
    lecture: "5 min",
    servicesLies: ["vide-maison", "vide-appartement"],
    sections: [
      {
        h2: "Un moment chargé d'émotion",
        p: [
          "Quitter son logement pour un EHPAD ou une résidence senior est une étape difficile pour la personne âgée comme pour ses proches. Le débarras doit se faire avec tact, en impliquant votre parent autant que possible dans les choix.",
        ],
      },
      {
        h2: "Choisir ce qui part dans la nouvelle chambre",
        p: [
          "La place en EHPAD est limitée. Renseignez-vous auprès de l'établissement sur le mobilier autorisé, puis sélectionnez avec votre parent les objets qui comptent : un fauteuil, des photos, quelques bibelots, du linge personnel. Ces repères aident à se sentir chez soi.",
        ],
      },
      {
        h2: "Répartir les souvenirs en famille",
        p: [
          "Avant le débarras, faites le tour du logement avec les membres de la famille pour identifier ce que chacun souhaite garder. Prenez des photos des objets pour ceux qui ne peuvent pas se déplacer.",
        ],
      },
      {
        h2: "Confier le reste à un professionnel",
        p: [
          "Une fois les choix faits, MiKa Débarras se charge de vider le logement : tri, dons, recyclage et évacuation. Nous mettons de côté papiers et objets personnels retrouvés, et rendons le logement vide, prêt à être vendu ou rendu au bailleur.",
        ],
      },
    ],
  },
  {
    slug: "fin-de-bail-etudiant-lyon-debarras",
    titre: "Fin de bail étudiant à Lyon : vider son logement sans stress",
    description:
      "Studio, colocation, résidence : comment organiser le débarras de son logement étudiant à Lyon avant l'état des lieux de sortie, et récupérer sa caution.",
    date: "2026-10-27",
    categorie: "Saisonnier",
    lecture: "3 min",
    servicesLies: ["vide-appartement"],
    sections: [
      {
        h2: "Anticiper l'état des lieux",
        p: [
          "À la fin de l'année universitaire, beaucoup d'étudiants lyonnais quittent leur logement en même temps. Pour récupérer votre dépôt de garantie, le logement doit être rendu vide de vos affaires et propre. Prévoyez le débarras quelques jours avant l'état des lieux.",
        ],
      },
      {
        h2: "Trier ce que vous emportez",
        p: [
          "Commencez par ce que vous gardez, puis listez ce qui peut être revendu ou donné à d'autres étudiants : petit électroménager, bureau, chaise, vaisselle. Il restera souvent quelques meubles fatigués et des encombrants.",
        ],
      },
      {
        h2: "Faire évacuer le reste",
        p: [
          "Sans voiture, évacuer un matelas ou un bureau depuis un étage sans ascenseur est compliqué. MiKa Débarras intervient à Lyon, Villeurbanne, Écully et dans toute l'agglomération pour vider studios et colocations rapidement, souvent sous 48h.",
        ],
      },
    ],
  },
  {
    slug: "syndrome-diogene-vider-logement",
    titre: "Syndrome de Diogène : comment vider le logement d'un proche ?",
    description:
      "Accumulation extrême, logement encombré ou insalubre : comment aborder la situation avec bienveillance et organiser le débarras avec des professionnels.",
    date: "2026-10-20",
    categorie: "Conseils",
    lecture: "5 min",
    servicesLies: ["vide-maison", "vide-appartement"],
    sections: [
      {
        h2: "Comprendre avant d'agir",
        p: [
          "Le syndrome de Diogène se traduit par une accumulation importante d'objets et un logement parfois devenu insalubre. Il touche souvent des personnes isolées. Avant tout débarras, il est important d'en parler avec la personne, sans jugement, et si possible avec l'aide de son médecin ou des services sociaux.",
        ],
      },
      {
        h2: "Un chantier qui demande méthode et protection",
        p: [
          "Vider un logement très encombré prend du temps et nécessite des équipements de protection. Il faut trier soigneusement : au milieu de l'accumulation se trouvent souvent des papiers importants, des photos ou de l'argent.",
        ],
      },
      {
        h2: "Notre façon d'intervenir",
        p: [
          "MiKa Débarras intervient avec discrétion, sans jugement, en équipe équipée. Nous trions pièce par pièce, mettons de côté documents et objets personnels, puis évacuons le reste vers les filières adaptées. Le logement est rendu vide et balayé, prêt pour un nettoyage approfondi si besoin.",
        ],
      },
    ],
  },
  {
    slug: "que-deviennent-objets-debarras",
    titre: "Que deviennent les objets après un débarras ?",
    description:
      "Réemploi, dons, recyclage, déchèterie : découvrez le parcours des meubles et objets récupérés lors d'un débarras, et comment nous limitons ce qui est jeté.",
    date: "2026-10-13",
    categorie: "Éco-responsabilité",
    lecture: "3 min",
    servicesLies: ["vide-maison", "vide-cave", "vide-grenier-professionnel"],
    sections: [
      {
        h2: "Le tri, première étape",
        p: [
          "Lors d'un débarras, chaque objet est orienté selon son état : ce qui peut resservir, ce qui peut être recyclé et ce qui doit être éliminé. Ce tri se fait dès le chargement du camion.",
        ],
      },
      {
        h2: "Réemploi et dons",
        p: [
          "Les meubles, la vaisselle, les livres ou les vêtements en bon état peuvent être revendus ou donnés à des associations et ressourceries. C'est la meilleure façon de leur donner une seconde vie.",
        ],
      },
      {
        h2: "Recyclage par matière",
        p: [
          "Métaux, bois, cartons, appareils électriques et électroniques : chaque matière part dans sa filière de recyclage. Les appareils électriques, par exemple, suivent une filière dédiée.",
        ],
      },
      {
        h2: "Ce qui reste",
        p: [
          "Seuls les objets qui ne peuvent être ni réemployés ni recyclés sont déposés en déchèterie agréée. Chez MiKa Débarras, nous cherchons à réduire au maximum cette part.",
        ],
      },
    ],
  },
  {
    slug: "debarras-avant-travaux-renovation",
    titre: "Débarras avant travaux : libérer la place pour rénover",
    description:
      "Rénovation, isolation des combles, nouvelle cuisine : pourquoi et comment vider les pièces avant l'arrivée des artisans pour gagner du temps et de l'argent.",
    date: "2026-10-06",
    categorie: "Conseils",
    lecture: "3 min",
    servicesLies: ["vide-maison", "vide-grenier-professionnel", "vide-cave"],
    sections: [
      {
        h2: "Des artisans plus efficaces dans des pièces vides",
        p: [
          "Les artisans facturent souvent le temps passé. Des pièces encombrées ralentissent le chantier et augmentent le risque d'abîmer vos affaires. Vider avant les travaux, c'est un chantier plus rapide et plus propre.",
        ],
      },
      {
        h2: "Combles et greniers avant isolation",
        p: [
          "Pour isoler des combles, il faut d'abord les vider entièrement. C'est souvent l'occasion de trier des années d'objets stockés. Nous descendons tout en sécurité et évacuons ce que vous ne gardez pas.",
        ],
      },
      {
        h2: "Planifier le débarras",
        p: [
          "Prévoyez le débarras une à deux semaines avant le début des travaux. Indiquez-nous la date du chantier lors de votre demande de devis : nous nous calons sur votre planning.",
        ],
      },
    ],
  },
  {
    slug: "debarras-garage-conseils",
    titre: "Débarras de garage : nos conseils pour retrouver de la place",
    description:
      "Outils, pneus, vélos, cartons, vieux meubles : comment trier et vider un garage encombré, et que faire des produits dangereux qu'on y trouve souvent.",
    date: "2026-09-29",
    categorie: "Conseils",
    lecture: "3 min",
    servicesLies: ["vide-maison", "vide-cave"],
    sections: [
      {
        h2: "Le garage, pièce fourre-tout",
        p: [
          "Dans beaucoup de maisons du Grand Lyon, le garage a cessé d'accueillir la voiture depuis longtemps. Il sert de stockage pour tout ce qu'on ne sait pas où ranger : outils, vélos, cartons de déménagement, meubles en attente.",
        ],
      },
      {
        h2: "Trier par catégorie",
        p: [
          "Regroupez les objets par type : outillage, sport, jardin, meubles, cartons. Vous verrez vite les doublons et ce qui ne sert plus. Les outils et vélos en bon état se revendent ou se donnent facilement.",
        ],
      },
      {
        h2: "Attention aux produits dangereux",
        p: [
          "Pots de peinture, solvants, huiles de vidange, produits phytosanitaires ne doivent jamais être jetés avec les ordures ménagères. Ils sont à déposer en déchèterie dans les bacs prévus. Signalez-les lors de votre demande de devis.",
        ],
      },
      {
        h2: "On s'occupe du reste",
        p: [
          "MiKa Débarras vide votre garage en quelques heures, évacue les encombrants et rend l'espace balayé.",
        ],
      },
    ],
  },
  {
    slug: "debarras-local-commercial-fin-de-bail",
    titre: "Fin de bail commercial : vider son local professionnel",
    description:
      "Fermeture, déménagement ou cessation d'activité : comment organiser le débarras d'un local commercial ou d'un bureau avant la restitution des clés.",
    date: "2026-09-22",
    categorie: "Professionnels",
    lecture: "3 min",
    servicesLies: ["debarras-bureau"],
    sections: [
      {
        h2: "Restituer un local vide",
        p: [
          "En fin de bail commercial, le local doit généralement être restitué libre de tout mobilier et matériel, conformément au bail. Anticipez le débarras pour éviter des frais ou des retenues.",
        ],
      },
      {
        h2: "Inventorier ce qui part",
        p: [
          "Mobilier, rayonnages, comptoir, matériel informatique, archives : listez ce que vous déménagez, ce que vous revendez et ce qui doit être évacué. Les archives contenant des données personnelles doivent être détruites de façon sécurisée.",
        ],
      },
      {
        h2: "Intervenir sans bloquer l'activité",
        p: [
          "Nous intervenons du lundi au samedi, et pouvons adapter les horaires pour ne pas gêner votre activité ou celle des locaux voisins. Devis et facture fournis pour votre comptabilité.",
        ],
      },
    ],
  },
  {
    slug: "debarras-printemps-cave-grenier",
    titre: "Grand ménage de printemps : le bon moment pour vider cave et grenier",
    description:
      "Le printemps est idéal pour désencombrer : nos conseils pour vider cave, grenier et garage, et préparer les déménagements de l'été.",
    date: "2026-09-15",
    categorie: "Saisonnier",
    lecture: "3 min",
    servicesLies: ["vide-cave", "vide-grenier-professionnel"],
    sections: [
      {
        h2: "Pourquoi le printemps ?",
        p: [
          "Les journées rallongent, les températures sont douces : c'est le moment idéal pour monter au grenier sans y étouffer, ou descendre à la cave sans grelotter. C'est aussi la période où l'on prépare les déménagements et ventes immobilières de l'été.",
        ],
      },
      {
        h2: "Une pièce à la fois",
        p: [
          "Plutôt que de tout attaquer en même temps, commencez par une pièce de stockage. Fixez-vous une règle simple : ce qui n'a pas servi depuis plusieurs années peut probablement partir.",
        ],
      },
      {
        h2: "Réservez tôt",
        p: [
          "Le printemps et le début de l'été sont des périodes chargées pour les entreprises de débarras. Pensez à demander votre devis quelques semaines à l'avance pour obtenir la date qui vous arrange.",
        ],
      },
    ],
  },
  {
    slug: "vider-logement-avant-mise-en-location",
    titre: "Propriétaires bailleurs : vider un logement entre deux locations",
    description:
      "Meubles laissés par l'ancien locataire, cave encombrée, logement à remettre en état : comment préparer rapidement votre bien pour une nouvelle location.",
    date: "2026-09-08",
    categorie: "Propriétaires",
    lecture: "3 min",
    servicesLies: ["vide-appartement", "vide-cave"],
    sections: [
      {
        h2: "Chaque semaine de vacance locative coûte",
        p: [
          "Entre deux locataires, chaque semaine sans loyer pèse sur la rentabilité. Un logement vidé rapidement peut être remis en état, photographié et proposé à la location plus vite.",
        ],
      },
      {
        h2: "Objets laissés par l'ancien locataire",
        p: [
          "Il arrive qu'un locataire laisse des meubles ou des affaires en partant. Avant de vous en débarrasser, vérifiez la situation, notamment si le locataire est parti sans rendre les clés : en cas de doute, renseignez-vous sur vos obligations auprès d'un professionnel du droit.",
        ],
      },
      {
        h2: "Un débarras rapide et complet",
        p: [
          "MiKa Débarras intervient en général sous 48h dans le Grand Lyon pour vider appartements, caves et boxes, et rendre le logement balayé, prêt pour les travaux ou les visites.",
        ],
      },
    ],
  },
];

export function getActualiteBySlug(slug: string): Actualite | undefined {
  return actualites.find((a) => a.slug === slug);
}
