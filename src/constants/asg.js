// Contenu officiel de l'ASG - transcrit tel quel depuis le prototype HTML
// fourni par le client ("Alliance Scientifique pour une Santé Globale.html").
// Ne pas modifier les faits (dates, noms, adresses) sans confirmation.

export const org = {
  name: "ASG",
  fullName: "Alliance Scientifique pour une santé Globale",
  kind: "ONG/ASBL",
  location: "Lubumbashi, Haut-Katanga · RDC",
  motto:
    "Chercher pour comprendre ; comprendre pour agir ; agir pour une santé globale.",
  address: [
    "Avenue Kashobwe n° 15",
    "Commune de Lubumbashi",
    "Ville de Lubumbashi, Province du Haut-Katanga",
    "République Démocratique du Congo",
  ],
  presence:
    "Bureaux provinciaux dans les provinces de la RDC et activités avec les ressortissants congolais de la diaspora.",
  foundedNote:
    "Association sans but lucratif, apolitique et non confessionnelle, créée le 30 mai 2020 à Lubumbashi.",
};

export const navItems = [
  { label: "À propos", href: "#apropos" },
  { label: "Mission", href: "#mission" },
  { label: "Domaines", href: "#domaines" },
  { label: "Membres", href: "#membres" },
  // { label: "Gouvernance", href: "#gouvernance" },
  // { label: "Documents", href: "#documents" },
  // { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "ONG/ASBL · Lubumbashi, Haut-Katanga · RDC",
  titleStart: "Une seule santé pour les personnes, les animaux et ",
  titleEmphasis: "l'environnement.",
  lead: "L'Alliance Scientifique pour une santé Globale rassemble médecins, pharmaciens, vétérinaires, agronomes et environnementalistes autour d'une approche « One Health » pour répondre aux défis sanitaires de la République Démocratique du Congo.",
  primaryCta: { label: "Devenir membre", href: "#adhesion" },
  secondaryCta: { label: "Découvrir l'ASG", href: "#apropos" },
  steps: [
    { label: "Étape 1", text: "Chercher pour comprendre" },
    { label: "Étape 2", text: "Comprendre pour agir" },
    { label: "Étape 3", text: "Agir pour une santé globale" },
  ],
};

export const about = {
  eyebrow: "Pourquoi l'ASG",
  title: "Quand la santé animale, humaine et environnementale se rejoignent",
  paragraphs: [
    "Les épidémies d'Ebola, de grippe aviaire et la pandémie de SARS-CoV-2 ont montré à quel point la santé humaine et la santé animale sont liées. Un événement sanitaire d'abord animal peut menacer la santé publique, avec des conséquences sur l'économie, l'environnement et les sociétés.",
    "Beaucoup de pathogènes menacent les êtres humains lorsque leur niche environnementale est profondément perturbée. La biodiversité est donc une barrière contre les maladies, en particulier celles transmises par des vecteurs comme le paludisme.",
    "L'ASG a été créée le 30 mai 2020 pour bâtir l'interface homme-animal-environnement et soutenir les projets du Gouvernement dans ce domaine.",
  ],
};

export const mission = {
  eyebrow: "Mission et vision",
  title: "Un objectif général : promouvoir le bien-être par une santé globale",
  mission:
    "Développer des thématiques de recherche sur les maladies en adoptant une logique pluridisciplinaire.",
  vision:
    "Avec tous les acteurs de santé, nationaux et internationaux, sauvegarder un environnement favorable à la santé et au bien-être pour tous.",
  objectives: [
    "Construire une communauté de chercheurs sur la santé, le climat et l'environnement",
    "Analyser et alerter sur les risques sanitaires liés aux transmissions vectorielles",
    "Étudier les phénomènes environnementaux liés à la santé durable",
    "Améliorer les connaissances endogènes en connaissances scientifiques (médicaments traditionnels améliorés, MTA)",
    "Étudier les interactions entre la santé humaine, animale, végétale et environnementale",
    "Investir dans les domaines favorisant la stabilité de la santé globale",
  ],
};

export const domains = {
  eyebrow: "Domaines d'intervention",
  title: "Trois terrains d'action",
  items: [
    {
      tag: "Domaine A",
      title: "Santé",
      items: [
        "Analyse et alerte sur les risques liés aux transmissions vectorielles",
        "Transformation des savoirs endogènes en connaissances scientifiques",
        "Promotion de la recherche scientifique en santé",
        "Promotion des structures sanitaires (hôpitaux, centres et zones de santé, cliniques) et des mutuelles de santé",
      ],
    },
    {
      tag: "Domaine B",
      title: "Environnement",
      items: [
        "Étude des phénomènes environnementaux liés à la santé durable",
        "Campagnes de sensibilisation, reboisement et systèmes agro-forestiers contre le changement climatique",
        "Communauté de chercheurs sur le climat et l'environnement",
        "Protection des écosystèmes et des espèces rares ou menacées (liste rouge UICN)",
      ],
    },
    {
      tag: "Domaine C",
      title: "Agro-pastoral",
      items: [
        "Promotion des incubateurs d'agri-preneurs",
        "Promotion de l'agroalimentaire",
        "Appui aux pistes locales et routes de desserte agricole, aux réserves naturelles et aux espaces verts",
      ],
    },
  ],
};

export const members = {
  eyebrow: "Communauté",
  title: "Qui peut rejoindre l'ASG",
  lead: "Toute personne physique ou morale, acteur de santé (médecins, pharmaciens, agronomes, vétérinaires, environnementalistes, anthropologues, ingénieurs, juristes…), qui met ses compétences et ses moyens au service de la santé globale.",
  categories: [
    {
      title: "Membres co-fondateurs",
      text: "Pionniers à l'origine de l'idée et de l'édification de l'ASBL. Ils disposent d'une double voix de vote.",
    },
    {
      title: "Membres effectifs",
      text: "Chercheurs et acteurs de santé qui souscrivent aux statuts par une carte d'adhésion et s'engagent à payer le droit d'entrée et les cotisations.",
    },
    {
      title: "Membres d'honneur",
      text: "Personnes physiques ou morales distinguées par leurs pensées et leurs actions dans le monde. Aucune cotisation n'est exigée.",
    },
    {
      title: "Membres sympathisants",
      text: "Amis de l'ASG, personnes physiques ou morales, qui appuient ses initiatives sans y adhérer.",
    },
  ],
  steps: [
    {
      title: "Remplir le formulaire",
      text: "En ligne, depuis le site de l'ONG.",
    },
    {
      title: "Accepter les statuts",
      text: "Lire et accepter les conditions statutaires.",
    },
    {
      title: "Régler les cotisations",
      text: "Par transfert ou virement bancaire. Les montants sont fixés en Assemblée Générale.",
    },
    {
      title: "Recevoir l'attestation",
      text: "Une attestation électronique d'adhésion ouvre l'accès aux services et activités.",
    },
  ],
};

export const governance = {
  eyebrow: "Gouvernance",
  title: "Trois organes, un fonctionnement transparent",
  organs: [
    {
      title: "Assemblée Générale",
      text: "Organe suprême. Elle se réunit une fois par an, approuve le budget et les résultats, et élit le Conseil d'Administration tous les cinq ans.",
    },
    {
      title: "Conseil d'Administration",
      text: "Organe exécutif et de contrôle. Ses membres sont bénévoles, élus pour un mandat de cinq ans renouvelable. Il se réunit chaque fin de mois.",
    },
    {
      title: "Comités provinciaux",
      text: "Relais de l'ASG dans les provinces. Ils fonctionnent comme le Conseil d'Administration et rendent compte chaque fin de mois.",
    },
  ],
  teamTitle: "Conseil d'Administration",
  team: [
    {
      name: "Néhémie KAMBALE VUYINGO",
      role: "Président",
      profession: "Médecin",
    },
    {
      name: "Grégoire THEMBO NDALEGHANA",
      role: "Vice-Président",
      profession: "Agronome",
    },
    {
      name: "Eddie MUTUMBA KAZIMOTO",
      role: "Secrétaire Général",
      profession: "Ingénieur électromécanicien",
    },
    {
      name: "Guillaume KAYA MICHEL",
      role: "Vice-secrétaire Général",
      profession: "Médecin",
    },
    { name: "Maua ROSETTE MADELEINE", role: "Trésorier", profession: "" },
    {
      name: "Raïssa MASENGO KAHOZI",
      role: "Commissaire aux comptes",
      profession: "",
    },
    {
      name: "Augustin BASOLE MUSOLE",
      role: "Conseiller Juridique",
      profession: "Juriste expert",
    },
    {
      name: "Jean Claude BUSHIRI MAHUNGU",
      role: "Administrateur, relations publiques",
      profession: "Médecin stagiaire",
    },
    {
      name: "Fiston KAKULE ANGALI",
      role: "Administrateur, projets",
      profession: "Médecin stagiaire",
    },
  ],
  fine: "Composition déclarée dans les statuts du 30 mai 2020.",
};

export const resources = {
  eyebrow: "Ressources",
  title: "D'où viennent les moyens de l'ASG",
  lead: "Les fonds servent à réaliser les projets ou à faire fonctionner l'ONG. L'exercice commence le 1er janvier et se termine le 31 décembre. Les comptes annuels sont soumis à l'Assemblée Générale.",
  items: [
    {
      title: "Cotisations",
      text: "Montant fixé par le règlement intérieur ou l'Assemblée Générale",
    },
    {
      title: "Dons et legs",
      text: "De toute personne physique ou morale intéressée",
    },
    { title: "Subventions", text: "Publiques ou privées" },
    {
      title: "Produits d'activités",
      text: "Revenus des activités et du patrimoine",
    },
  ],
};

export const documents = {
  eyebrow: "Documents officiels",
  title: "Statut et reconnaissance",
  timeline: [
    {
      date: "2020-05-30",
      label: "30 mai 2020",
      title: "Création de l'ASBL",
      text: "Adoption des statuts et du règlement intérieur à Lubumbashi, conformément à la loi n° 004/2001 du 20 juillet 2001.",
    },
    {
      date: "2021-08-25",
      label: "25 août 2021",
      title: "Acte notarié",
      text: "Les statuts et le règlement intérieur sont authentifiés par la Direction de la Chancellerie et Garde des Sceaux, Ministère de la Justice, à Kinshasa/Gombe.",
    },
    {
      date: "2021-10-29",
      label: "29 octobre 2021",
      title: "Accusé de réception du dossier",
      text: "Le Secrétariat Général à la Justice accuse réception de la requête en obtention de la personnalité juridique, introduite le 28 octobre 2021.",
    },
    {
      date: "2022-11-14",
      label: "14 novembre 2022",
      title: "Enregistrement auprès de la Division Provinciale de la Santé",
      text: "L'ASG est enregistrée comme partenaire de la santé dans le Haut-Katanga (lutte anti-vectorielle, sensibilisation, eau, hygiène et assainissement), dans l'attente de la notification du Secrétariat Général de la Santé Publique, Hygiène et Prévention.",
    },
  ],
};

export const joinCategories = [
  "Membre effectif",
  "Membre sympathisant",
  "Membre d'honneur (sur proposition de l'Assemblée Générale)",
];
