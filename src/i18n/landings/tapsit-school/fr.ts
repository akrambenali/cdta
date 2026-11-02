import type { LandingContent } from "@/i18n/landing-type";

const img = (name: string) => `/images/landing/tapsit-school/${name}.jpg`;

const content: LandingContent = {
  seo: {
    title: "TAPSIT School — Plateforme de gestion scolaire en Algérie (espace administration et enseignants)",
    description:
      "TAPSIT School organise la gestion scolaire : classes, élèves, enseignants, affectations, absences, évaluations, notes et moyennes. Interface arabe, droits par rôle, personnalisable à votre établissement.",
    keywords: [
      "logiciel de gestion scolaire",
      "plateforme de gestion scolaire Algérie",
      "logiciel école privée",
      "gestion des absences élèves",
      "logiciel notes et moyennes",
      "espace enseignant",
      "logiciel établissement scolaire",
      "TAPSIT School",
      "تبسيط للمدارس",
    ],
    alternateName: "تبسيط للمدارس",
  },
  breadcrumb: { home: "Accueil", products: "Produits", current: "TAPSIT School" },
  hero: {
    title: "La plateforme de gestion scolaire",
    highlight: "qui simplifie la vie de l'école",
    subtitle:
      "TAPSIT School est un écosystème numérique qui modernise la gestion scolaire, simplifie le suivi pédagogique et renforce la coordination entre l'établissement, les enseignants, les parents et les élèves. Une gestion plus organisée, un meilleur suivi, une expérience numérique intégrée.",
    ctaPrimary: "Demander une démo",
    ctaWhatsapp: "Discuter sur WhatsApp",
    ctaBrochure: "Télécharger la brochure (PDF)",
    badges: ["Espaces Administration et Enseignant", "Interface arabe, de droite à gauche", "Adaptable à votre établissement"],
    imageAlt: "Tableau de bord TAPSIT School sur ordinateur portable, à côté de livres et de crayons",
  },
  modules: {
    eyebrow: "School Management Platform",
    title: "Les outils du quotidien, réunis dans une même plateforme",
    subtitle:
      "Des interfaces numériques reliées entre elles, conçues selon le rôle et les responsabilités de chacun, pour gérer les informations scolaires et suivre le parcours des élèves dans un environnement organisé.",
    items: [
      { icon: "dashboard", title: "Tableau de bord", text: "Une vue d'ensemble pour la direction et pour chaque enseignant." },
      { icon: "users", title: "Classes", text: "Création des classes et organisation de leurs données." },
      { icon: "graduation-cap", title: "Élèves", text: "Dossiers des élèves rattachés à leurs classes." },
      { icon: "presentation", title: "Enseignants", text: "Données des enseignants et de leurs affectations." },
      { icon: "clipboard-check", title: "Affectations", text: "Classes et matières attribuées à chaque enseignant." },
      { icon: "calendar-x", title: "Absences", text: "Présences et absences enregistrées en classe." },
      { icon: "award", title: "Évaluations et notes", text: "Notes saisies et rattachées aux élèves et matières." },
      { icon: "chart", title: "Moyennes et résultats", text: "Suivi des moyennes et du niveau scolaire." },
      { icon: "book-open", title: "Devoirs", text: "Devoirs et observations selon la version utilisée." },
      { icon: "file-text", title: "Rapports", text: "Rapports, synthèses et export des informations prises en charge." },
      { icon: "shield-check", title: "Droits d'accès", text: "Chaque rôle n'accède qu'à ce qui le concerne." },
      { icon: "languages", title: "Interface arabe", text: "Pensée pour l'écriture de droite à gauche." },
    ],
  },
  problem: {
    title: "Du travail éparpillé à un suivi scolaire organisé",
    subtitle:
      "Gérer un établissement demande une coordination constante entre la direction et les enseignants, et un suivi continu des classes, des élèves, des absences et des résultats. Les registres papier et les outils séparés multiplient l'effort.",
    before: {
      title: "Sans plateforme",
      items: [
        "Informations dispersées entre registres papier et fichiers séparés",
        "Absences notées à la main, difficiles à consulter",
        "Notes et moyennes compilées manuellement",
        "Affectations des classes et matières peu lisibles",
        "Direction sans vue d'ensemble sur les données de l'établissement",
      ],
    },
    after: {
      title: "Avec TAPSIT School",
      items: [
        "Données scolaires rassemblées dans un environnement numérique organisé",
        "Présences et absences enregistrées et consultables",
        "Évaluations, notes et moyennes organisées",
        "Affectations et droits définis selon le rôle de chacun",
        "Une interface de pilotage pour la direction",
      ],
    },
  },
  spotlights: [
    {
      image: img("enseignant"),
      imageAlt: "Espace Enseignant TAPSIT Teacher sur ordinateur portable et téléphone",
      eyebrow: "TAPSIT Teacher — Espace Enseignant",
      title: "Tout ce dont l'enseignant a besoin pour suivre ses classes",
      text: "L'interface dédiée à l'enseignant facilite l'accès aux informations pédagogiques et l'organisation du travail lié aux classes, aux élèves, aux présences et aux évaluations, dans une expérience claire en arabe.",
      points: [
        "Tableau de bord pour accéder à ses classes et passer vite aux tâches du jour",
        "« Mes classes » et suivi des élèves selon les affectations",
        "Consultation des séances et de l'emploi du temps",
        "Saisie des absences et présences, avec historique",
        "Gestion des évaluations et des notes, suivi des moyennes et du niveau",
        "Devoirs, rapports et coordination avec la direction",
      ],
      note: "Les données et indicateurs restent des outils d'aide pour l'enseignant : ils ne remplacent pas son évaluation pédagogique directe.",
    },
    {
      image: img("administration"),
      imageAlt: "Espace Administration TAPSIT Admin sur ordinateur portable et téléphone",
      eyebrow: "TAPSIT Admin — Espace Administration",
      title: "Gérer l'établissement depuis un seul endroit",
      text: "L'interface d'administration aide les responsables à organiser les données de base de l'établissement, à gérer classes, élèves et enseignants, à définir affectations et droits, et à accéder aux informations administratives.",
      points: [
        "Tableau de bord d'administration",
        "Gestion des classes, des élèves et des enseignants",
        "Affectation des classes et des matières aux enseignants",
        "Organisation des droits et des accès selon les rôles",
        "Suivi des informations pédagogiques et paramètres administratifs",
        "Journal des opérations, rapports et documents",
      ],
    },
    {
      image: img("parents"),
      imageAlt: "Illustration d'une famille consultant le suivi scolaire de leur enfant sur téléphone",
      eyebrow: "TAPSIT Parents & Students — Feuille de route",
      title: "Étendre l'expérience aux parents et aux élèves",
      text: "La version actuelle se concentre sur le travail entre l'enseignant et la direction. La plateforme est conçue pour s'étendre progressivement aux parents et aux élèves.",
      points: [
        "Parents : absences et présences, résultats et évaluations, notifications et annonces",
        "Parents : communication organisée avec l'établissement, selon les droits définis",
        "Élèves : emploi du temps, absences, notes et résultats",
        "Élèves : devoirs, activités, annonces et ressources pédagogiques",
        "Évolutions possibles : rapports et analyses, communication, ressources numériques",
      ],
      note: "Ces parcours font l'objet d'une étude et d'une priorisation : ils ne sont pas tous disponibles dans la version actuelle.",
    },
    {
      image: img("personnalisation"),
      imageAlt: "Plateforme TAPSIT School personnalisée au nom d'une école, sur ordinateur, tablette et téléphone",
      eyebrow: "Personnalisation",
      title: "Une plateforme adaptable à l'identité de votre établissement",
      text: "Chaque établissement a son identité visuelle, son organisation et ses besoins. TAPSIT School offre une base évolutive, avec la possibilité d'adapter interfaces et fonctions.",
      points: [
        "Logo et couleurs de l'établissement, selon le périmètre convenu",
        "Nom de la plateforme affiché aux utilisateurs",
        "Interfaces, menus et fonctions organisés selon les rôles",
        "Adaptation de certains circuits aux procédures de l'établissement",
        "Développements sur demande : nouvelles fonctions, rapports, intégrations",
      ],
      note: "Les possibilités de personnalisation, le coût, la durée et les conditions sont définis après étude technique et accord sur le périmètre du projet.",
    },
    {
      image: img("securite"),
      imageAlt: "TAPSIT School sur ordinateur et téléphone avec bouclier de sécurité",
      eyebrow: "Sécurité et confidentialité",
      title: "La confiance, base de la gestion numérique",
      text: "Les plateformes scolaires traitent des informations sur les élèves, les enseignants et l'établissement : la confidentialité et l'organisation des droits sont au cœur de la conception de TAPSIT School.",
      points: [
        "Gestion des droits selon le rôle et les responsabilités",
        "Protection des comptes : authentification et gestion des sessions",
        "Accès aux données personnelles limité au strict nécessaire",
        "Architecture maintenable, pensée pour évoluer",
        "Sauvegarde, restauration et mises à jour selon le mode d'hébergement convenu",
      ],
      note: "Les détails d'hébergement, de sauvegarde et de niveau de service sont définis dans le contrat conclu avec l'établissement.",
    },
  ],
  workflow: {
    title: "Une mise en place en 5 étapes",
    subtitle: "Chaque projet d'adaptation suit un processus clair, de l'analyse des besoins à la livraison.",
    steps: ["Analyse des besoins", "Périmètre", "Proposition", "Développement et tests", "Livraison et accompagnement"],
  },
  cards: {
    title: "Ce que TAPSIT School apporte à votre établissement",
    subtitle: "Une plateforme conçue pour organiser le travail administratif et pédagogique, dans un environnement numérique évolutif.",
    items: [
      { icon: "clipboard-check", title: "Une administration plus claire", text: "Données des classes, élèves et enseignants organisées." },
      { icon: "presentation", title: "Un suivi pédagogique régulier", text: "Absences, évaluations, notes et résultats mieux organisés." },
      { icon: "users", title: "Enseignants et direction reliés", text: "Données, affectations et droits partagés dans un même espace." },
      { icon: "folder", title: "Moins d'éparpillement", text: "Tâches et données réunies au lieu d'outils séparés." },
      { icon: "shield-check", title: "Des responsabilités claires", text: "Accès aux fonctions selon le rôle de chacun." },
      { icon: "rocket", title: "Évolutive", text: "Une base technique pour ajouter des services." },
      { icon: "languages", title: "Une expérience arabe claire", text: "Écriture de droite à gauche et besoins des utilisateurs arabophones." },
      { icon: "palette", title: "Personnalisable", text: "Identité visuelle et circuits adaptables selon le projet." },
    ],
  },
  audiences: {
    title: "Pour quels établissements ?",
    subtitle:
      "Une base numérique adaptable aux différents établissements, selon leur organisation, leur taille et leurs services. L'adéquation est confirmée après étude de vos besoins.",
    items: [
      { icon: "school", title: "Écoles primaires", text: "Classes, élèves, présences et absences, accès aux informations utiles." },
      { icon: "graduation-cap", title: "CEM et lycées", text: "Classes, affectations des matières, absences, évaluations, notes et moyennes." },
      { icon: "building", title: "Écoles privées", text: "Identité visuelle et certains circuits adaptés à votre organisation." },
      { icon: "baby", title: "Préscolaire et crèches", text: "Étude de fonctions adaptées : suivi, groupes, présences, lien avec les parents." },
      { icon: "languages", title: "Centres de soutien et écoles de langues", text: "Versions ou modules pour apprenants, groupes, séances et présences." },
      { icon: "briefcase", title: "Instituts et enseignement supérieur", text: "Étude de solutions étendues : promotions, horaires, suivi académique." },
    ],
  },
  faq: {
    title: "Questions fréquentes",
    subtitle: "Tout ce qu'il faut savoir avant de choisir TAPSIT School pour votre établissement.",
    items: [
      {
        q: "Quels espaces sont disponibles aujourd'hui ?",
        a: "La version actuelle se concentre sur l'espace Administration (TAPSIT Admin) et l'espace Enseignant (TAPSIT Teacher). Les espaces Parents et Élèves font partie de la feuille de route et sont développés progressivement.",
      },
      {
        q: "Que peut faire un enseignant sur la plateforme ?",
        a: "Accéder à ses classes et à ses élèves, consulter ses séances et son emploi du temps, saisir les absences, gérer les évaluations et les notes, suivre les moyennes et le niveau, et accéder aux rapports disponibles, selon les droits accordés.",
      },
      {
        q: "Que peut faire la direction ?",
        a: "Gérer les classes, les élèves et les enseignants, affecter classes et matières, définir les rôles et les droits, suivre les informations pédagogiques, consulter le journal des opérations et les rapports.",
      },
      {
        q: "La plateforme est-elle en arabe ?",
        a: "Oui. L'interface est pensée pour l'arabe et l'écriture de droite à gauche, avec une expérience claire pour les utilisateurs arabophones.",
      },
      {
        q: "Peut-on l'adapter à notre école ?",
        a: "Oui. Le logo, les couleurs, le nom affiché, certaines interfaces et certains circuits peuvent être adaptés. Des développements sur demande sont possibles après étude technique et accord sur le périmètre.",
      },
      {
        q: "TAPSIT School convient-il à une crèche ou à une école de langues ?",
        a: "La plateforme est une base adaptable. Pour le préscolaire, les centres de soutien, les écoles de langues ou l'enseignement supérieur, des fonctions dédiées peuvent être étudiées. L'adéquation est confirmée après analyse de vos besoins.",
      },
      {
        q: "Comment les données des élèves sont-elles protégées ?",
        a: "L'accès est organisé par rôle, les comptes sont protégés par authentification et gestion des sessions, et l'accès aux données personnelles est limité au nécessaire. Hébergement, sauvegarde et niveau de service sont précisés dans le contrat.",
      },
      {
        q: "Combien coûte TAPSIT School ?",
        a: "Le tarif est établi sur devis, selon le nombre d'élèves, les espaces activés et le niveau de personnalisation. Contactez-nous pour une démonstration.",
      },
    ],
  },
  cta: {
    title: "Vous souhaitez découvrir la plateforme ?",
    subtitle:
      "Nous serons ravis de vous présenter les fonctions disponibles, de comprendre les besoins de votre établissement et d'étudier les possibilités d'adaptation.",
    primary: "Demander une démo",
    whatsapp: "WhatsApp",
    brochure: "Brochure PDF",
  },
  whatsappMessage: "Bonjour, je souhaite une démonstration de TAPSIT School pour notre établissement.",
};

export default content;
