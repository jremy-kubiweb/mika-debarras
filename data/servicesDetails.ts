export interface ServiceDetail {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  inclus: string[];
  pourQui: string[];
  faq: { q: string; r: string }[];
}

export const servicesDetails: Record<string, ServiceDetail> = {
  "vide-maison": {
    h1: "Vide maison à Lyon et dans le Grand Lyon",
    metaTitle: "Vide Maison Lyon — Débarras complet de maison, devis gratuit",
    metaDescription:
      "Vide maison à Lyon : débarras complet de la cave au grenier, tri, valorisation et évacuation. Devis gratuit sur place sous 24h, intervention rapide.",
    intro: [
      "Vider une maison entière demande du temps, des bras et un camion : meubles, électroménager, vaisselle, linge, outils, cartons accumulés au fil des années. MiKa Débarras prend en charge la totalité du chantier, pièce par pièce, de la cave au grenier en passant par le garage et le jardin.",
      "Avant l'enlèvement, nous trions avec vous ce qui doit être conservé, donné, recyclé ou évacué. Les papiers, photos et objets personnels retrouvés sont mis de côté et vous sont remis. Le reste est valorisé auprès de filières de réemploi ou déposé en déchetterie agréée.",
    ],
    inclus: [
      "Visite et devis gratuits sur place",
      "Tri des objets avec vous ou en votre absence",
      "Démontage des meubles et évacuation de tous les encombrants",
      "Mise de côté des papiers, photos et objets de valeur",
      "Dépôt en filières de réemploi et en déchetterie agréée",
      "Balayage des pièces en fin de chantier",
    ],
    pourQui: ["Succession ou décès d'un proche", "Vente de la maison", "Départ en maison de retraite ou en EHPAD", "Déménagement vers un logement plus petit"],
    faq: [
      { q: "Combien coûte un vide maison à Lyon ?", r: "Le prix dépend du volume, de l'accès et du tri à réaliser. Nos vide maison démarrent à partir de 150 €. Nous établissons toujours un devis gratuit après visite, sans surprise le jour du chantier." },
      { q: "Combien de temps dure un vide maison ?", r: "Une maison de taille moyenne est généralement vidée en une à deux journées. Pour une grande maison avec cave, grenier et dépendances, nous planifions l'intervention avec vous lors de la visite." },
      { q: "Dois-je être présent le jour du débarras ?", r: "Ce n'est pas obligatoire. Nous pouvons récupérer les clés et vous envoyer des photos à chaque étape, ce qui est pratique pour les familles qui habitent loin." },
    ],
  },
  "vide-appartement": {
    h1: "Vide appartement à Lyon",
    metaTitle: "Vide Appartement Lyon — Débarras rapide, même sans ascenseur",
    metaDescription:
      "Débarras d'appartement à Lyon et dans le Grand Lyon : studio, T2, T3, T4. Étages sans ascenseur, cave incluse, logement rendu vide et balayé. Devis gratuit.",
    intro: [
      "À Lyon, vider un appartement, c'est souvent composer avec des escaliers étroits, des étages sans ascenseur, une cave en sous-sol et un stationnement compliqué. Notre équipe est rodée à ces contraintes et organise chaque chantier pour limiter la gêne pour le voisinage.",
      "Fin de bail, mise en location, vente, succession : nous rendons le logement vide et balayé, prêt pour l'état des lieux, la visite des acheteurs ou la remise des clés.",
    ],
    inclus: [
      "Devis gratuit sur place ou sur photos",
      "Évacuation des meubles, électroménager et cartons",
      "Prise en charge de la cave et du box",
      "Protection des parties communes",
      "Logement rendu vide et balayé",
    ],
    pourQui: ["Fin de bail ou état des lieux de sortie", "Propriétaires bailleurs entre deux locations", "Vente d'un appartement", "Succession"],
    faq: [
      { q: "Intervenez-vous dans les immeubles sans ascenseur ?", r: "Oui, c'est une grande partie de nos chantiers à Lyon. Le nombre d'étages est pris en compte dans le devis, il n'y a pas de supplément caché le jour J." },
      { q: "Quel est le prix d'un vide appartement ?", r: "Nos débarras d'appartement démarrent à partir de 100 € pour un petit volume. Le tarif final dépend de la surface, du volume d'objets, de l'étage et de l'accès." },
      { q: "Pouvez-vous intervenir rapidement avant un état des lieux ?", r: "Oui, nous intervenons généralement sous 48h. Précisez la date de votre état des lieux dans le formulaire, nous en tenons compte en priorité." },
    ],
  },
  "vide-cave": {
    h1: "Vide cave à Lyon",
    metaTitle: "Vide Cave Lyon — Débarras de cave et sous-sol en une journée",
    metaDescription:
      "Débarras de cave à Lyon : meubles stockés, cartons, outils, encombrants, étagères. Intervention en une journée, évacuation et recyclage. Devis gratuit.",
    intro: [
      "Les caves lyonnaises sont souvent étroites, humides, mal éclairées et accessibles par des escaliers raides. Avec les années, elles se remplissent de meubles, cartons, vélos, outils et pots de peinture qu'on ne sait plus comment évacuer.",
      "Nous vidons votre cave en une seule intervention dans la grande majorité des cas, démontons les étagères si besoin et orientons chaque type de déchet vers la bonne filière.",
    ],
    inclus: ["Évacuation de tous les objets et encombrants", "Démontage des étagères et rayonnages", "Tri et recyclage des métaux, bois et cartons", "Cave rendue vide et balayée"],
    pourQui: ["Syndics et copropriétés", "Vente ou location d'un appartement avec cave", "Cave inondée ou humide", "Particuliers qui veulent récupérer de la place"],
    faq: [
      { q: "Combien coûte un vide cave ?", r: "À partir de 80 € pour une petite cave. Le prix dépend du volume et de la difficulté d'accès. Une simple photo de la cave nous permet souvent de vous donner une estimation." },
      { q: "Reprenez-vous les pots de peinture et produits chimiques ?", r: "Nous vous indiquons lors de la visite ce que nous pouvons évacuer. Les déchets spéciaux sont déposés dans les filières adaptées et signalés dans le devis." },
    ],
  },
  "vide-grenier-professionnel": {
    h1: "Débarras de grenier et de combles à Lyon",
    metaTitle: "Débarras Grenier Lyon — Vide grenier et combles par des pros",
    metaDescription:
      "Débarras de grenier et combles à Lyon : accès difficiles, escaliers escamotables, objets lourds. Tri, évacuation et recyclage. Devis gratuit sous 24h.",
    intro: [
      "Greniers et combles sont souvent les pièces les plus difficiles à vider : trappe d'accès étroite, escalier escamotable, plancher fragile, chaleur en été. On y retrouve des décennies d'objets : malles, meubles démontés, jouets, cartons de souvenirs.",
      "Notre équipe intervient avec le matériel adapté pour descendre les objets sans abîmer les accès, et prend le temps de trier ce qui mérite d'être conservé.",
    ],
    inclus: ["Descente des objets en sécurité", "Tri des souvenirs et papiers de famille", "Évacuation et recyclage", "Grenier rendu vide et balayé"],
    pourQui: ["Vente d'une maison", "Travaux d'isolation ou d'aménagement des combles", "Succession", "Gain de place"],
    faq: [
      { q: "Combien coûte le débarras d'un grenier ?", r: "À partir de 90 €, selon le volume et la difficulté d'accès. Le devis est gratuit et établi après visite ou sur photos." },
      { q: "Pouvez-vous vider un grenier avant des travaux d'isolation ?", r: "Oui, c'est une demande fréquente. Indiquez-nous la date des travaux, nous planifions le débarras en amont." },
    ],
  },
  "succession-heritage": {
    h1: "Débarras après décès et succession à Lyon",
    metaTitle: "Débarras Succession Lyon — Vide maison après décès, discret et humain",
    metaDescription:
      "Débarras après décès à Lyon : vide maison ou appartement dans le cadre d'une succession, avec tact et discrétion. Lien avec le notaire, devis gratuit.",
    intro: [
      "Vider le logement d'un proche disparu est une étape difficile, souvent à mener dans des délais serrés et parfois à distance. Nous intervenons avec respect et discrétion, à votre rythme, pour vous décharger de la partie matérielle.",
      "Avant tout enlèvement, nous identifions avec vous les objets à conserver ou à partager entre héritiers. Les papiers administratifs, photos, bijoux et souvenirs retrouvés sont systématiquement mis de côté et vous sont remis.",
    ],
    inclus: [
      "Rendez-vous sur place avec la famille ou le notaire",
      "Mise de côté des papiers, photos et objets de valeur",
      "Tri, don et valorisation des objets réutilisables",
      "Évacuation complète et logement rendu vide",
      "Intervention possible en l'absence des héritiers",
    ],
    pourQui: ["Familles et héritiers", "Notaires", "Mandataires et tuteurs", "Bailleurs après le décès d'un locataire"],
    faq: [
      { q: "Peut-on faire le débarras avant la fin de la succession ?", r: "Le débarras se fait en accord avec les héritiers et, si besoin, avec le notaire. Nous pouvons attendre son feu vert et intervenir rapidement ensuite." },
      { q: "Que faites-vous des papiers et objets personnels ?", r: "Ils sont systématiquement mis de côté et remis à la famille. Rien de personnel n'est jeté sans votre accord." },
      { q: "Les héritiers habitent loin, comment faire ?", r: "Nous pouvons récupérer les clés, intervenir en votre absence et vous tenir informé par téléphone et photos à chaque étape." },
    ],
  },
  "debarras-bureau": {
    h1: "Débarras de bureaux et locaux professionnels à Lyon",
    metaTitle: "Débarras Bureau Lyon — Vidage de locaux professionnels",
    metaDescription:
      "Débarras de bureaux, commerces et entrepôts à Lyon : mobilier, archives, matériel. Intervention rapide, hors horaires si besoin. Devis gratuit.",
    intro: [
      "Déménagement, fermeture, réaménagement ou fin de bail commercial : nous vidons vos bureaux, boutiques, ateliers et entrepôts rapidement, en limitant l'impact sur votre activité.",
      "Mobilier de bureau, rayonnages, matériel, archives : nous organisons l'évacuation et orientons ce qui peut l'être vers le réemploi et le recyclage.",
    ],
    inclus: ["Visite et devis gratuits", "Démontage et évacuation du mobilier", "Évacuation des archives et du matériel", "Intervention possible en dehors des horaires d'ouverture", "Locaux rendus vides et balayés"],
    pourQui: ["Entreprises et professions libérales", "Commerçants", "Agences immobilières et gestionnaires", "Syndics"],
    faq: [
      { q: "Pouvez-vous intervenir le soir ou le samedi ?", r: "Oui, nous sommes disponibles du lundi au samedi et adaptons les horaires pour ne pas gêner votre activité." },
      { q: "Fournissez-vous une facture pour l'entreprise ?", r: "Oui, chaque intervention fait l'objet d'un devis puis d'une facture." },
    ],
  },
};
