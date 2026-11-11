export interface ZoneContenu {
  intro: string[];
  quartiers?: string[];
  faq?: { q: string; r: string }[];
}

export const zonesContenu: Record<string, ZoneContenu> = {
  lyon: {
    intro: [
      "À Lyon, un débarras se joue souvent dans des immeubles anciens : escaliers en pierre sans ascenseur sur les pentes de la Croix-Rousse, caves voûtées dans le Vieux-Lyon, grands appartements haussmanniens dans le 6e ou sur la Presqu'île. Chaque arrondissement a ses contraintes, et notre équipe les connaît.",
      "Le stationnement du camion est un point clé en centre-ville : nous organisons l'intervention pour limiter le temps d'arrêt et la gêne pour les voisins. Appartement à libérer en fin de bail, succession, cave de copropriété : nous intervenons dans les 9 arrondissements.",
    ],
    quartiers: ["Presqu'île (1er et 2e)", "Part-Dieu et Monchat (3e)", "Croix-Rousse (4e)", "Vieux-Lyon et Saint-Just (5e)", "Brotteaux (6e)", "Guillotière et Gerland (7e)", "Monplaisir et États-Unis (8e)", "Vaise et la Duchère (9e)"],
    faq: [
      { q: "Comment gérez-vous le stationnement du camion dans Lyon ?", r: "Nous repérons l'accès lors de la visite et planifions l'intervention pour réduire le temps de stationnement. Si un emplacement réservé est nécessaire, nous vous indiquons la marche à suivre auprès de la mairie d'arrondissement." },
      { q: "Intervenez-vous dans les immeubles sans ascenseur de la Croix-Rousse ou du Vieux-Lyon ?", r: "Oui, ce sont des chantiers fréquents pour nous. Le nombre d'étages est pris en compte dans le devis, sans supplément le jour de l'intervention." },
    ],
  },
  villeurbanne: {
    intro: [
      "Villeurbanne mêle grands ensembles, immeubles des années 30 comme aux Gratte-Ciel, petites maisons de ville et nombreux logements étudiants autour du campus de la Doua. Les débarras y sont variés : studio en fin de bail, appartement familial, maison avec cave et garage.",
      "Notre équipe intervient dans tous les quartiers de Villeurbanne, en semaine comme le samedi, pour vider rapidement votre logement et le rendre propre.",
    ],
    quartiers: ["Gratte-Ciel", "Charpennes", "Cusset", "Croix-Luizet", "Grandclément", "Les Buers", "Tonkin", "La Doua"],
    faq: [
      { q: "Pouvez-vous vider un logement étudiant en fin d'année ?", r: "Oui, nous intervenons régulièrement pour des studios et colocations en fin de bail. Indiquez-nous la date de l'état des lieux, nous nous adaptons." },
    ],
  },
  venissieux: {
    intro: [
      "À Vénissieux, nous intervenons aussi bien dans les immeubles collectifs des Minguettes que dans les maisons individuelles du centre ou du Moulin-à-Vent. Caves de résidence, appartements familiaux, maisons avec garage : nous adaptons l'équipe et le camion à chaque chantier.",
      "Notre base d'Irigny est toute proche, ce qui nous permet d'intervenir rapidement à Vénissieux, souvent sous 48h.",
    ],
    quartiers: ["Centre", "Les Minguettes", "Parilly", "Moulin-à-Vent", "Charréard"],
    faq: [
      { q: "Videz-vous les caves des résidences collectives ?", r: "Oui, pour les particuliers comme pour les bailleurs et syndics. Nous évacuons les encombrants et rendons la cave vide et balayée." },
    ],
  },
  "oullins-pierre-benite": {
    intro: [
      "Oullins-Pierre-Bénite, commune nouvelle née de la fusion d'Oullins et de Pierre-Bénite, se trouve à quelques minutes de notre base d'Irigny. C'est l'un de nos secteurs d'intervention les plus fréquents.",
      "Maisons de ville, appartements du centre d'Oullins, logements proches de la vallée de la chimie : nous connaissons bien le terrain et intervenons rapidement pour vos débarras, successions et vide maison.",
    ],
    quartiers: ["Centre d'Oullins", "La Saulaie", "Pierre-Bénite centre", "Haute-Roche"],
  },
  "saint-genis-laval": {
    intro: [
      "Voisine directe d'Irigny, Saint-Genis-Laval est l'une des communes où nous intervenons le plus. On y trouve beaucoup de maisons familiales avec garage, cave et grenier, souvent remplies au fil des décennies.",
      "Vide maison complet avant une vente, débarras après le départ d'un parent en maison de retraite, garage à libérer : nous prenons tout en charge, tri compris.",
    ],
  },
  irigny: {
    intro: [
      "Irigny est notre commune d'attache : c'est d'ici que partent nos équipes pour chaque intervention dans le Grand Lyon. Pour les habitants d'Irigny, nous pouvons souvent passer pour le devis dans la journée.",
      "Maisons avec jardin et dépendances, appartements, caves et garages : nous vidons tout type de logement à Irigny, avec le soin d'une entreprise qui travaille près de chez elle.",
    ],
  },
  bron: {
    intro: [
      "À Bron, nous intervenons dans les copropriétés de Terraillon et de Parilly comme dans les pavillons du centre et des Essarts. Les débarras y concernent souvent des appartements familiaux, des caves et des garages.",
      "Nous intervenons rapidement à Bron, du lundi au samedi, avec un devis gratuit sur place ou sur photos.",
    ],
    quartiers: ["Centre", "Terraillon", "Parilly", "Les Essarts", "Rebufer"],
  },
  "saint-priest": {
    intro: [
      "Saint-Priest est une commune étendue, entre centre-ville, quartiers résidentiels et hameaux comme Manissieux ou Revaison. Les maisons individuelles avec garage et sous-sol y sont nombreuses, tout comme les locaux professionnels.",
      "Vide maison, débarras de garage ou de local d'entreprise : nous adaptons l'équipe et le volume du camion à votre chantier.",
    ],
    quartiers: ["Centre", "Bel Air", "Manissieux", "Revaison", "La Fouillouse"],
  },
  "caluire-et-cuire": {
    intro: [
      "À Caluire-et-Cuire, les débarras concernent souvent de grandes maisons familiales et des appartements spacieux, parfois sur plusieurs niveaux, entre plateau et bords de Saône.",
      "Les successions y sont fréquentes : nous intervenons avec discrétion, mettons de côté papiers et souvenirs, et pouvons travailler en lien avec le notaire.",
    ],
    quartiers: ["Montessuy", "Saint-Clair", "Cuire-le-Bas", "Vassieux", "Le Bourg"],
  },
  "sainte-foy-les-lyon": {
    intro: [
      "Sur les collines de Sainte-Foy-lès-Lyon, nous intervenons dans des maisons avec jardin et des résidences arborées, souvent avec des accès en pente ou des escaliers extérieurs.",
      "Notre équipe est habituée à ces configurations et organise le portage jusqu'au camion pour un débarras rapide et soigné.",
    ],
  },
  "tassin-la-demi-lune": {
    intro: [
      "À Tassin-la-Demi-Lune, nous vidons principalement des maisons individuelles et des appartements de résidences, entre le centre, Alaï et le secteur de la Demi-Lune.",
      "Vente d'une maison familiale, succession, départ en résidence senior : nous gérons le tri et l'évacuation de A à Z.",
    ],
    quartiers: ["Le Bourg", "La Demi-Lune", "Alaï", "Le Méridien"],
  },
  ecully: {
    intro: [
      "Écully combine maisons familiales et résidences, et accueille de nombreux étudiants autour de ses grandes écoles. Les débarras y vont du studio en fin d'année universitaire à la grande maison avec sous-sol.",
      "Nous intervenons à Écully sous 48h en général, avec un devis gratuit et un logement rendu vide et balayé.",
    ],
  },
  "vaulx-en-velin": {
    intro: [
      "À Vaulx-en-Velin, nous intervenons dans les résidences du Mas du Taureau et de la Grappinière comme dans le Village ou les nouveaux programmes du Carré de Soie.",
      "Débarras d'appartement, de cave ou de logement à rendre au bailleur : nous intervenons rapidement et nous adaptons aux contraintes des immeubles collectifs.",
    ],
    quartiers: ["Le Village", "Mas du Taureau", "La Grappinière", "Carré de Soie", "Le Sud"],
  },
  "saint-fons": {
    intro: [
      "Saint-Fons est à quelques minutes de notre base d'Irigny. Nous y intervenons régulièrement pour des appartements, des caves de résidence et des maisons de ville.",
      "Notre proximité nous permet de proposer des interventions rapides et des devis sur place sans délai.",
    ],
  },
  francheville: {
    intro: [
      "Entre Francheville-le-Haut et Francheville-le-Bas, la commune compte beaucoup de maisons avec jardin et de résidences calmes. Les vide maison y sont fréquents lors de ventes ou de successions.",
      "Nous prenons en charge le tri, l'évacuation et le nettoyage, y compris des abris de jardin et garages.",
    ],
  },
  "rillieux-la-pape": {
    intro: [
      "À Rillieux-la-Pape, nous intervenons dans les immeubles de la Ville Nouvelle comme dans les maisons de Crépieux et de Vancia.",
      "Appartements, caves, maisons avec sous-sol : nous adaptons le dispositif à chaque logement et intervenons du lundi au samedi.",
    ],
    quartiers: ["Ville Nouvelle", "Rillieux Village", "Crépieux", "Vancia"],
  },
  "decines-charpieu": {
    intro: [
      "Décines-Charpieu, entre le Grand Large et le secteur du stade, compte de nombreux pavillons et résidences récentes. Nous y intervenons pour des vide maison, débarras de garages et appartements.",
      "Devis gratuit, intervention rapide et logement rendu propre : notre équipe se déplace dans tous les quartiers de Décines-Charpieu.",
    ],
  },
  meyzieu: {
    intro: [
      "À Meyzieu, les maisons individuelles avec garage et jardin sont majoritaires. Les débarras y concernent souvent des sous-sols et garages remplis d'outils, de meubles et de cartons.",
      "Nous évacuons tout, trions ce qui peut être réemployé et rendons les lieux vides et balayés.",
    ],
  },
};
