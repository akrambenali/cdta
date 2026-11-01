import type { Dictionary } from "../dictionary-type";

const fr: Dictionary = {
  meta: {
    siteName: "CDTA",
    tagline: "Conseil & Développement en Transformation Digitale",
    defaultTitle: "CDTA — Transformation digitale en Algérie",
    defaultDescription:
      "Logiciels de gestion, sites e-commerce et accompagnement en transformation digitale pour les PME et entrepreneurs en Algérie. 10 ans d'expérience, solutions clé en main.",
  },
  nav: {
    home: "Accueil",
    products: "Produits",
    consulting: "Consulting",
    about: "À propos",
    contact: "Contact",
    quoteCta: "Demander un devis",
  },
  hero: {
    eyebrow: "Consultant indépendant en transformation digitale",
    title: "Digitalisez votre entreprise",
    highlight: "sans complexité",
    subtitle:
      "Logiciels de gestion, sites e-commerce et accompagnement en transformation digitale : nous concevons des solutions claires, sur mesure et opérationnelles pour les PME et entrepreneurs en Algérie.",
    ctaPrimary: "Découvrir nos produits",
    ctaSecondary: "Prendre rendez-vous",
    stats: [
      { value: "10 ans", label: "d'expérience en développement" },
      { value: "Orange · SFR · Djezzy", label: "expériences télécoms" },
      { value: "DA", label: "paiement en dinars algériens" },
    ],
    dashboard: {
      metricGrowthLabel: "Commandes en ligne",
      metricOrdersLabel: "Commandes traitées",
      stockSyncLabel: "Stock synchronisé",
      stockSyncValue: "12 dépôts · temps réel",
    },
  },
  whyUs: {
    eyebrow: "Pourquoi nous choisir",
    title: "Une expertise technique au service de votre croissance",
    subtitle:
      "Nous combinons rigueur d'ingénierie et sens du terrain algérien pour livrer des solutions qui fonctionnent réellement, du premier jour.",
    items: [
      {
        icon: "shield-check",
        title: "10 ans d'expérience",
        description:
          "Un parcours de développeur front-end et de consultant en transformation digitale, forgé sur des projets exigeants en Algérie et à l'international.",
      },
      {
        icon: "clock",
        title: "Solutions clé en main",
        description:
          "De l'audit initial à la mise en production, chaque projet est livré prêt à l'emploi, avec une documentation claire et une prise en main simple.",
      },
      {
        icon: "wallet",
        title: "Support en dinars algériens",
        description:
          "Devis, facturation et accompagnement adaptés au contexte économique local, sans surprise de change ni complexité administrative.",
      },
      {
        icon: "users",
        title: "Accompagnement personnalisé",
        description:
          "Un interlocuteur unique, disponible et à l'écoute, qui s'adapte à la taille et aux contraintes réelles de votre entreprise.",
      },
    ],
  },
  productsPreview: {
    eyebrow: "Catalogue",
    title: "Des solutions digitales pensées pour votre activité",
    subtitle:
      "Plateformes de distribution, outils de gestion, sites vitrine et e-commerce : chaque produit est conçu pour être opérationnel rapidement.",
    viewAll: "Voir tout le catalogue",
  },
  ctaBand: {
    title: "Un projet de digitalisation en tête ?",
    subtitle:
      "Parlons de vos besoins : nous établissons ensemble un plan clair, réaliste et chiffré en dinars algériens.",
    ctaPrimary: "Demander un devis",
    ctaSecondary: "Voir le consulting",
  },
  productsPage: {
    eyebrow: "Nos produits",
    title: "Un catalogue complet pour digitaliser votre activité",
    subtitle:
      "Chaque solution est déclinable selon la taille de votre entreprise et peut être personnalisée à votre image (marque blanche disponible pour SDP).",
  },
  products: {
    sdp: {
      title: "SDP — Smart Distribution Platform",
      tagline: "Pilotez toute votre chaîne de distribution",
      shortDescription:
        "Plateforme de gestion de la distribution, des commandes et du stock, disponible en marque blanche et déclinable selon votre modèle (SDP Retail, SDP Distribution).",
      features: [
        "Gestion centralisée des commandes et des livraisons",
        "Suivi du stock en temps réel multi-dépôts",
        "Déclinable en marque blanche B2B2B",
        "Tableaux de bord et rapports de performance",
        "Gestion des revendeurs, grossistes et points de vente",
      ],
      priceLabel: "Sur devis",
      priceNote: "Tarification selon le volume et le périmètre fonctionnel",
      detail: {
        intro:
          "SDP (Smart Distribution Platform) est une plateforme complète pour piloter la distribution, les commandes et le stock de votre réseau. Conçue pour être déployée en marque blanche, elle s'adapte aux réseaux B2B2B : distributeurs, grossistes, revendeurs et points de vente.",
        benefits: [
          {
            title: "Visibilité totale sur le stock",
            description: "Suivez vos niveaux de stock en temps réel sur l'ensemble de vos dépôts et points de vente.",
          },
          {
            title: "Commandes fluidifiées",
            description: "Automatisez la prise, la validation et le suivi des commandes entre tous les acteurs du réseau.",
          },
          {
            title: "Marque blanche",
            description: "Déployez la plateforme sous votre propre identité visuelle : SDP Retail, SDP Distribution ou sur mesure.",
          },
          {
            title: "Pilotage par la donnée",
            description: "Des tableaux de bord clairs pour suivre vos performances commerciales et logistiques au quotidien.",
          },
        ],
        forWho:
          "Distributeurs, grossistes, franchises et réseaux commerciaux souhaitant structurer et digitaliser leur chaîne de distribution en Algérie.",
        includes: [
          "Paramétrage de la plateforme selon votre réseau",
          "Personnalisation en marque blanche",
          "Formation des équipes",
          "Support technique et évolutions",
        ],
      },
    },
    gestion: {
      title: "Application de gestion",
      tagline: "Votre back-office métier, simple et efficace",
      shortDescription:
        "Site web / back-office sur mesure pour les PME souhaitant digitaliser leur gestion interne : stock, commandes et clients centralisés dans un seul outil.",
      features: [
        "Gestion du stock et des approvisionnements",
        "Suivi des commandes et de la facturation",
        "Fiche clients et historique des échanges",
        "Accès multi-utilisateurs avec droits personnalisés",
        "Interface claire, accessible depuis mobile et ordinateur",
      ],
      priceLabel: "À partir de 90 000 DA",
      priceNote: "Prix indicatif, ajusté selon vos besoins fonctionnels",
      detail: {
        intro:
          "Une application de gestion sur mesure pour remplacer les tableaux Excel et les processus manuels par un outil centralisé, pensé pour le quotidien de votre équipe.",
        benefits: [
          {
            title: "Un seul outil pour tout gérer",
            description: "Stock, commandes, clients et facturation réunis dans une interface unique et cohérente.",
          },
          {
            title: "Gain de temps immédiat",
            description: "Moins de saisies manuelles, moins d'erreurs, des processus qui suivent votre activité réelle.",
          },
          {
            title: "Accès sécurisé et partagé",
            description: "Chaque membre de l'équipe accède aux informations dont il a besoin, avec les droits adaptés à son rôle.",
          },
          {
            title: "Évolutif",
            description: "L'application grandit avec votre entreprise : nouveaux modules ajoutés au fur et à mesure de vos besoins.",
          },
        ],
        forWho:
          "PME, commerces et entrepreneurs en Algérie qui gèrent encore leur activité avec des outils dispersés (papier, Excel, WhatsApp) et veulent centraliser leur gestion.",
        includes: [
          "Analyse de vos besoins et processus actuels",
          "Développement du back-office sur mesure",
          "Import de vos données existantes",
          "Formation et support au démarrage",
        ],
      },
    },
    vitrine: {
      title: "Site vitrine",
      tagline: "Une présence en ligne professionnelle",
      shortDescription:
        "Création de sites vitrine professionnels pour présenter votre activité, vos services et vos réalisations en ligne, avec un design moderne et soigné.",
      features: [
        "Design moderne, responsive et rapide",
        "Pages sur mesure (services, réalisations, équipe, contact)",
        "Optimisation pour les moteurs de recherche (SEO)",
        "Formulaire de contact intégré",
        "Nom de domaine et hébergement accompagnés",
      ],
      priceLabel: "À partir de 45 000 DA",
      priceNote: "Selon le nombre de pages et les fonctionnalités souhaitées",
      detail: {
        intro:
          "Un site vitrine conçu pour donner une image professionnelle et crédible à votre activité, avec un message clair et une expérience agréable sur mobile comme sur ordinateur.",
        benefits: [
          {
            title: "Crédibilité renforcée",
            description: "Un design soigné qui inspire confiance auprès de vos prospects et partenaires.",
          },
          {
            title: "Visible sur Google",
            description: "Une structure optimisée pour le référencement naturel dès la mise en ligne.",
          },
          {
            title: "Rapide à lancer",
            description: "Un processus clair, de la maquette à la mise en ligne, sans complexité technique de votre côté.",
          },
          {
            title: "Facile à faire évoluer",
            description: "Ajout de pages, de contenus ou de nouvelles sections au fil de la croissance de votre activité.",
          },
        ],
        forWho:
          "Entrepreneurs, commerces, professions libérales et petites entreprises souhaitant exister en ligne de façon professionnelle.",
        includes: [
          "Maquette et validation du design",
          "Développement et intégration des contenus",
          "Optimisation SEO de base",
          "Accompagnement au lancement",
        ],
      },
    },
    ecommerce: {
      title: "Site e-commerce",
      tagline: "Vendez en ligne, sans complexité",
      shortDescription:
        "Boutique en ligne clé en main : catalogue produits, panier, gestion des commandes et suivi des ventes, pensée pour le marché algérien.",
      features: [
        "Catalogue produits avec variantes et stock",
        "Panier et tunnel de commande optimisés",
        "Gestion des commandes et de la livraison",
        "Espace client et historique d'achats",
        "Tableau de bord des ventes et statistiques",
      ],
      priceLabel: "À partir de 150 000 DA",
      priceNote: "Selon le volume du catalogue et les intégrations nécessaires",
      detail: {
        intro:
          "Une boutique en ligne complète pour vendre vos produits sur internet, avec une gestion simplifiée des commandes et une expérience d'achat fluide pour vos clients.",
        benefits: [
          {
            title: "Prêt à vendre",
            description: "Catalogue, panier et gestion des commandes fonctionnent ensemble dès le lancement.",
          },
          {
            title: "Adapté au marché local",
            description: "Options de paiement et de livraison pensées pour les usages algériens (paiement à la livraison, etc.).",
          },
          {
            title: "Gestion simplifiée",
            description: "Un back-office clair pour suivre vos commandes, votre stock et vos ventes au quotidien.",
          },
          {
            title: "Prêt à grandir",
            description: "Une architecture pensée pour absorber la croissance de votre catalogue et de votre trafic.",
          },
        ],
        forWho:
          "Commerçants, marques et entrepreneurs souhaitant vendre leurs produits en ligne avec un outil fiable et évolutif.",
        includes: [
          "Mise en place du catalogue produits",
          "Configuration des modes de paiement et livraison",
          "Formation à la gestion des commandes",
          "Support technique post-lancement",
        ],
      },
    },
    keswa: {
      title: "KESWA — Gestion de magasins de mode",
      tagline: "Tout votre magasin de vêtements en un seul endroit",
      shortDescription:
        "Logiciel de gestion intégré pour les magasins de mode et de prêt-à-porter : point de vente, stock multi-tailles/couleurs, achats, fournisseurs et rapports.",
      features: [
        "Point de vente (POS) rapide avec recherche par nom, code ou code-barres",
        "Gestion des produits par tailles, couleurs et variantes",
        "Scan des codes-barres directement depuis la caméra du téléphone",
        "Suivi des achats, fournisseurs et paiements dus",
        "Comptes séparés et permissions par rôle (gérant, employé)",
        "Rapports de ventes, retours et performance du magasin",
      ],
      priceLabel: "Sur devis",
      priceNote: "Tarification selon le nombre de points de vente et d'utilisateurs",
      detail: {
        intro:
          "KESWA est un système intelligent et intégré pour la gestion des magasins de vêtements et de mode, conçu pour donner une vision claire et un contrôle complet sur les ventes, le stock, les achats et les finances quotidiennes du magasin.",
        benefits: [
          {
            title: "Pensé pour la mode",
            description:
              "Gestion native des tailles, couleurs et modèles, avec code-barres personnalisable par variante.",
          },
          {
            title: "Caisse rapide",
            description:
              "Une interface de vente claire pour accélérer le passage en caisse et réduire les erreurs de prix.",
          },
          {
            title: "Stock toujours à jour",
            description:
              "Les quantités se mettent à jour automatiquement à chaque vente, retour ou réception de marchandise.",
          },
          {
            title: "Gestion à distance",
            description:
              "Suivez les ventes, le stock et les indicateurs de votre magasin depuis votre téléphone, où que vous soyez.",
          },
        ],
        forWho:
          "Magasins de vêtements femme, homme et enfant, boutiques de jalabiyas et hijabs, et enseignes mode gérant plusieurs tailles, couleurs et modèles.",
        includes: [
          "Paramétrage du catalogue et des variantes",
          "Configuration des rôles et permissions",
          "Formation de l'équipe en magasin",
          "Support technique et évolutions",
        ],
      },
    },
    bouchli: {
      title: "BOUCHLI — Gestion de boucheries",
      tagline: "Vente au poids ou à la pièce, sans erreur",
      shortDescription:
        "Système tout-en-un pour les boucheries : point de vente, intégration balance électronique, stock, achats et caisse, fonctionnant même sans connexion internet.",
      features: [
        "Point de vente avec vente à la pièce ou au poids (kg)",
        "Intégration directe avec balance électronique (Rongta RLS1000)",
        "Gestion du stock, des achats et des fournisseurs",
        "Gestion de la caisse et des dépenses quotidiennes",
        "Fonctionne hors connexion (Offline First) avec sauvegarde automatique",
        "Impression de tickets et factures sur imprimante thermique",
      ],
      priceLabel: "Sur devis",
      priceNote: "Tarification selon l'équipement (balance, imprimante) et le nombre de postes",
      detail: {
        intro:
          "BOUCHLI est un système métier complet conçu spécifiquement pour les boucheries : il réunit la caisse, les prix, le poids, le code-barres, le stock, les achats et les finances dans une seule interface simple et rapide.",
        benefits: [
          {
            title: "Zéro erreur de pesée",
            description:
              "Les prix au kilogramme sont calculés automatiquement depuis la balance connectée, sans arrondi ni erreur de saisie.",
          },
          {
            title: "Fonctionne sans internet",
            description:
              "Conçu en Offline First : la vente, le stock et les rapports restent disponibles même en cas de coupure internet.",
          },
          {
            title: "Données protégées",
            description:
              "Sauvegarde automatique des données à chaque fermeture de l'application, pour ne jamais perdre une journée de vente.",
          },
          {
            title: "Prix en dinars algériens",
            description: "Le système de prix est conçu pour gérer avec précision les montants en dinars algériens.",
          },
        ],
        forWho: "Boucheries, charcuteries et commerces de viande souhaitant moderniser leur caisse et leur gestion de stock.",
        includes: [
          "Installation et connexion de la balance électronique",
          "Paramétrage des produits et des prix",
          "Formation du personnel de caisse",
          "Support technique et sauvegardes",
        ],
      },
    },
    "qr-chief": {
      title: "QR-Chief — Générateur de QR codes",
      tagline: "Créez, personnalisez et partagez vos QR codes",
      shortDescription:
        "Application pour créer et personnaliser des codes QR professionnels (liens, textes, fichiers) avec un paiement unique, sans abonnement.",
      features: [
        "Création de QR codes pour liens, textes et fichiers (PDF, images)",
        "Personnalisation des couleurs, formes et logo",
        "Export en PNG, JPG et SVG",
        "Espace personnel pour sauvegarder et gérer vos QR codes",
        "Interface disponible en français, arabe et anglais",
      ],
      priceLabel: "Paiement unique",
      priceNote: "Licence à vie, sans abonnement mensuel ni annuel",
      detail: {
        intro:
          "QR-Chief est une application pour créer, personnaliser et gérer des codes QR professionnels : liens, textes, menus digitaux, documents ou fichiers, avec un rendu à l'image de votre marque.",
        benefits: [
          {
            title: "Un seul paiement, à vie",
            description:
              "Contrairement aux outils par abonnement, QR-Chief se paie une seule fois pour un usage illimité dans le temps.",
          },
          {
            title: "Design professionnel",
            description:
              "Couleurs, formes de modules, logo et fond transparent pour des QR codes à l'image de votre activité.",
          },
          {
            title: "Tout dans un seul endroit",
            description: "Vos QR codes et fichiers associés restent sauvegardés et modifiables dans votre espace personnel.",
          },
        ],
        forWho:
          "Restaurants et cafés (menus digitaux), commerces, entreprises, agences de voyage, marketeurs et indépendants souhaitant partager liens et documents facilement.",
        includes: [
          "Accès à l'application avec licence à vie",
          "Personnalisation initiale à votre image",
          "Accompagnement à la prise en main",
        ],
      },
    },
    "tapsit-school": {
      title: "TAPSIT School — Gestion scolaire",
      tagline: "Une gestion scolaire plus organisée et connectée",
      shortDescription:
        "Plateforme numérique de gestion scolaire reliant administration, enseignants, parents et élèves autour d'informations claires et centralisées.",
      features: [
        "Espace Administration : gestion des classes, enseignants et élèves",
        "Espace Enseignant : absences, notes, évaluations et emploi du temps",
        "Espace Parents : suivi scolaire et communication avec l'établissement",
        "Gestion des rôles, habilitations et confidentialité des données",
        "Identité visuelle personnalisable selon votre établissement",
      ],
      priceLabel: "Sur devis",
      priceNote: "Tarification selon le nombre d'élèves et les modules activés",
      detail: {
        intro:
          "TAPSIT School est une plateforme numérique dédiée à la gestion scolaire et au suivi pédagogique, pensée pour organiser les informations et simplifier la coordination entre l'établissement, les enseignants, les parents et les élèves.",
        benefits: [
          {
            title: "Une seule plateforme pour tous",
            description:
              "Administration, enseignants et parents accèdent chacun à une interface adaptée à leur rôle, reliée aux mêmes données.",
          },
          {
            title: "Suivi pédagogique simplifié",
            description: "Absences, notes, évaluations et moyennes centralisées et accessibles en quelques clics.",
          },
          {
            title: "Communication facilitée",
            description: "Les parents suivent la scolarité de leurs enfants sans dépendre d'échanges papier dispersés.",
          },
          {
            title: "Adaptable à votre établissement",
            description:
              "Logo, couleurs et fonctionnalités peuvent être adaptés à l'identité et à l'organisation de votre école.",
          },
        ],
        forWho:
          "Écoles primaires, collèges, lycées, établissements privés et centres de formation souhaitant digitaliser leur gestion pédagogique.",
        includes: [
          "Paramétrage de l'établissement et des classes",
          "Création des comptes administration, enseignants et parents",
          "Formation des équipes pédagogiques",
          "Support technique et évolutions",
        ],
      },
    },
  },
  consultingCard: {
    title: "Consulting en transformation digitale",
    tagline: "Un accompagnement stratégique, pas seulement technique",
    shortDescription:
      "Audit digital, choix des outils adaptés et accompagnement au changement pour réussir votre transformation digitale, à votre rythme.",
    features: [
      "Audit digital de votre activité",
      "Recommandations d'outils et de priorités",
      "Accompagnement au changement",
      "Missions courtes ou suivi long terme",
    ],
    priceLabel: "Sur devis",
    priceNote: "Formats adaptés aux PME et entrepreneurs",
    ctaLabel: "Découvrir le consulting",
  },
  productDetail: {
    backToCatalog: "Retour au catalogue",
    featuresTitle: "Fonctionnalités clés",
    benefitsTitle: "Ce que vous y gagnez",
    forWhoTitle: "Pour qui ?",
    includesTitle: "Ce qui est inclus",
    priceTitle: "Tarif",
    ctaDemo: "Demander une démo",
    ctaQuote: "Demander un devis",
    otherProductsTitle: "Découvrir d'autres produits",
    brochureLabel: "Télécharger la fiche produit (PDF)",
  },
  consultingPage: {
    hero: {
      eyebrow: "Consulting",
      title: "Une transformation digitale réussie, étape par étape",
      subtitle:
        "Nous accompagnons les PME, commerces et entrepreneurs algériens dans leur digitalisation, avec une démarche claire et des recommandations concrètes.",
      ctaPrimary: "Prendre rendez-vous",
      ctaSecondary: "Voir nos produits",
    },
    approachTitle: "Notre démarche",
    approachSubtitle: "Une méthode simple en quatre étapes, adaptée à la réalité de votre entreprise.",
    steps: [
      {
        number: "01",
        title: "Audit digital",
        description:
          "Nous analysons vos outils actuels, vos processus et vos usages pour identifier précisément vos besoins et vos points de blocage.",
      },
      {
        number: "02",
        title: "Recommandations",
        description:
          "Nous proposons les solutions les plus pertinentes (outils, priorités, budget indicatif) en tenant compte de votre contexte et de vos moyens.",
      },
      {
        number: "03",
        title: "Accompagnement au changement",
        description:
          "Nous vous aidons à mettre en œuvre les changements : mise en place des outils, formation des équipes, ajustement des processus.",
      },
      {
        number: "04",
        title: "Suivi",
        description:
          "Nous restons disponibles après le déploiement pour ajuster, améliorer et vous accompagner dans la durée.",
      },
    ],
    forWho: {
      title: "Pour qui ?",
      description:
        "Notre accompagnement s'adresse à toute organisation en Algérie souhaitant digitaliser son activité de façon structurée et durable.",
      targets: [
        "PME souhaitant moderniser leur gestion interne",
        "Commerces voulant développer leur présence en ligne",
        "Entrepreneurs lançant un nouveau projet digital",
        "Entreprises en croissance ayant besoin de structurer leurs outils",
      ],
    },
    formats: {
      title: "Deux formats d'accompagnement",
      subtitle: "Selon vos besoins, nous adaptons la durée et l'intensité de la mission.",
      options: [
        {
          title: "Mission courte",
          description:
            "Un audit ciblé et des recommandations concrètes, livrés rapidement, pour prendre les bonnes décisions sans attendre.",
          bullet: "Idéal pour un diagnostic ou un projet précis",
        },
        {
          title: "Accompagnement long terme",
          description:
            "Un suivi régulier sur plusieurs mois, pour piloter la transformation digitale dans la durée et ajuster la stratégie au fil de l'avancement.",
          bullet: "Idéal pour une transformation globale de l'entreprise",
        },
      ],
    },
    cta: {
      title: "Parlons de votre projet de digitalisation",
      subtitle: "Un premier échange gratuit pour comprendre vos besoins et vous proposer la meilleure approche.",
      ctaPrimary: "Demander un devis",
    },
  },
  aboutPage: {
    hero: {
      eyebrow: "À propos",
      title: "Un consultant senior, dix ans d'expérience terrain",
      subtitle:
        "Développement front-end, architecture logicielle et transformation digitale, au service des entreprises algériennes.",
    },
    bio: [
      "Fort de dix années d'expérience en développement et en transformation digitale, j'accompagne aujourd'hui les PME et entrepreneurs algériens dans la digitalisation de leur activité, en Algérie comme à l'international.",
      "Spécialisé en développement front-end (Angular, Vue.js) et en architecture de solutions web, j'ai eu l'occasion de travailler sur des projets exigeants au sein de grands groupes télécoms — Orange, SFR et Djezzy — où j'ai développé une exigence forte en matière de qualité, de performance et de fiabilité.",
      "Cette expérience m'a convaincu que la technologie n'a de valeur que si elle sert des objectifs concrets. C'est pourquoi j'accompagne chaque client avec une approche pragmatique : comprendre le métier avant de choisir l'outil, et livrer des solutions réellement utilisables au quotidien.",
    ],
    experienceTitle: "Parcours & expertise",
    experienceItems: [
      { title: "10 ans d'expérience", description: "En développement logiciel et en transformation digitale." },
      { title: "Front-end avancé", description: "Expertise Angular et Vue.js sur des applications à forte exigence technique." },
      { title: "Grands comptes télécoms", description: "Expériences chez Orange, SFR et Djezzy sur des projets à grande échelle." },
      { title: "Vision internationale", description: "Une pratique construite entre l'Algérie et l'international." },
    ],
    skillsTitle: "Compétences clés",
    skills: [
      "Développement front-end (Angular, Vue.js)",
      "Architecture d'applications web et back-office",
      "Plateformes e-commerce et de distribution",
      "Audit digital et conseil en transformation",
      "Accompagnement au changement pour PME",
    ],
    commitmentTitle: "Mon engagement",
    commitments: [
      "Des solutions sur mesure, jamais des templates recyclés",
      "Une communication claire, en français, sans jargon inutile",
      "Des tarifs transparents, négociés en dinars algériens",
      "Un accompagnement disponible après la livraison",
    ],
    cta: {
      title: "Envie d'échanger sur votre projet ?",
      subtitle: "Je réponds personnellement à chaque demande, sous 24 à 48h.",
      ctaPrimary: "Me contacter",
    },
  },
  contactPage: {
    hero: {
      eyebrow: "Contact",
      title: "Parlons de votre projet",
      subtitle:
        "Décrivez votre besoin, nous vous répondons rapidement avec une première analyse et, si besoin, une proposition de devis en dinars algériens.",
    },
    form: {
      name: "Nom complet",
      namePlaceholder: "Votre nom et prénom",
      company: "Entreprise",
      companyPlaceholder: "Nom de votre entreprise (optionnel)",
      email: "Email",
      emailPlaceholder: "vous@exemple.com",
      phone: "Téléphone / WhatsApp",
      phonePlaceholder: "+213 5XX XX XX XX",
      product: "Produit ou service concerné",
      productPlaceholder: "Sélectionnez une option",
      productOptions: [
        { value: "sdp", label: "SDP — Smart Distribution Platform" },
        { value: "gestion", label: "Application de gestion" },
        { value: "vitrine", label: "Site vitrine" },
        { value: "ecommerce", label: "Site e-commerce" },
        { value: "keswa", label: "KESWA — Gestion de magasins de mode" },
        { value: "bouchli", label: "BOUCHLI — Gestion de boucheries" },
        { value: "qr-chief", label: "QR-Chief — Générateur de QR codes" },
        { value: "tapsit-school", label: "TAPSIT School — Gestion scolaire" },
        { value: "consulting", label: "Consulting en transformation digitale" },
        { value: "autre", label: "Autre / je ne sais pas encore" },
      ],
      message: "Votre message",
      messagePlaceholder: "Décrivez votre projet, vos besoins ou vos questions...",
      submit: "Envoyer ma demande",
      submitting: "Envoi en cours...",
      successTitle: "Message envoyé !",
      successMessage: "Merci pour votre message. Nous vous répondons dans les 24 à 48h ouvrées.",
      errorTitle: "Une erreur est survenue",
      errorMessage: "Votre message n'a pas pu être envoyé. Merci de réessayer ou de nous contacter directement par email.",
      requiredNotice: "Champs obligatoires",
    },
    info: {
      title: "Nos coordonnées",
      description: "Vous pouvez aussi nous contacter directement par email, téléphone ou WhatsApp.",
      emailLabel: "Email",
      phoneLabel: "Téléphone",
      whatsappLabel: "WhatsApp",
      locationLabel: "Zone d'intervention",
      location: "Algérie (à distance et sur site selon le projet)",
      paymentNote: "Paiement possible en dinars algériens (DA), devis établi avant tout engagement.",
    },
  },
  footer: {
    description:
      "Conseil et développement en transformation digitale pour les PME et entrepreneurs en Algérie : logiciels de gestion, sites e-commerce et accompagnement stratégique.",
    quickLinksTitle: "Navigation",
    productsTitle: "Produits",
    contactTitle: "Contact",
    rights: "Tous droits réservés.",
    paymentNote: "Paiement en dinars algériens (DA) possible.",
  },
  notFound: {
    title: "Page introuvable",
    description: "La page que vous recherchez n'existe pas ou a été déplacée.",
    cta: "Retour à l'accueil",
  },
};

export default fr;
