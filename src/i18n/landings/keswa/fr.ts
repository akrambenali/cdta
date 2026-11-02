import type { LandingContent } from "@/i18n/landing-type";

const img = (name: string) => `/images/landing/keswa/${name}.jpg`;

const content: LandingContent = {
  seo: {
    title: "KESWA — Logiciel de caisse et de gestion pour magasin de vêtements en Algérie",
    description:
      "Caisse POS, stock par tailles et couleurs, code-barres, achats, fournisseurs, factures, retours, rapports et application mobile : KESWA gère votre magasin de mode de A à Z.",
    keywords: [
      "logiciel magasin de vêtements",
      "logiciel boutique de mode",
      "logiciel de caisse prêt-à-porter",
      "logiciel gestion boutique vêtements Algérie",
      "gestion de stock tailles et couleurs",
      "logiciel boutique hijab",
      "point de vente magasin de mode",
      "scan code-barres téléphone",
      "KESWA",
      "كسوة",
    ],
    alternateName: "كسوة",
  },
  breadcrumb: { home: "Accueil", products: "Produits", current: "KESWA" },
  hero: {
    title: "Le logiciel de gestion",
    highlight: "pensé pour les magasins de vêtements et de mode",
    subtitle:
      "KESWA vous donne une vision claire et un contrôle complet sur les ventes, le stock, les achats, les fournisseurs, les factures et les comptes du jour, avec une expérience moderne qui allie simplicité et professionnalisme.",
    ctaPrimary: "Demander une démo",
    ctaWhatsapp: "Discuter sur WhatsApp",
    ctaBrochure: "Télécharger la brochure (PDF)",
    badges: ["Tailles, couleurs et variantes", "Scan code-barres au téléphone", "Suivi du magasin à distance"],
    imageAlt: "Tableau de bord KESWA sur ordinateur et application mobile, avec vêtements et sacs de boutique",
  },
  modules: {
    eyebrow: "Tout votre magasin",
    title: "Tout votre magasin en un seul endroit",
    subtitle:
      "Un contrôle plus simple, un stock plus précis et des décisions plus intelligentes : chaque opération du magasin est reliée au même système.",
    items: [
      { icon: "shopping-cart", title: "Point de vente (POS)", text: "Une caisse moderne et rapide pour servir les clients sans attente." },
      { icon: "shirt", title: "Tailles et couleurs", text: "Produits, catégories, modèles et variantes adaptés à la mode." },
      { icon: "scan-barcode", title: "Code-barres et étiquettes", text: "Un code par produit ou variante, étiquettes prix imprimables." },
      { icon: "package", title: "Stock précis", text: "Quantités mises à jour à chaque vente, retour ou mouvement." },
      { icon: "truck", title: "Achats et fournisseurs", text: "Réceptions, fournisseurs, paiements dus et règlements." },
      { icon: "receipt", title: "Factures de vente", text: "Archive complète avec recherche, filtres et réimpression." },
      { icon: "undo", title: "Retours et remboursements", text: "Retours partiels ou totaux, bons de retour suivis." },
      { icon: "chart", title: "Rapports et indicateurs", text: "Ventes, retours, ventes nettes et quantités vendues." },
      { icon: "users", title: "Employés et droits", text: "Un compte par personne, des permissions selon le rôle." },
      { icon: "smartphone", title: "Scan au téléphone", text: "La caméra du téléphone devient un lecteur de code-barres." },
      { icon: "map-pin", title: "Gestion à distance", text: "Suivez l'activité du magasin même loin de la boutique." },
      { icon: "lock", title: "Données protégées", text: "Opérations sensibles vérifiées, coûts et marges protégés." },
    ],
  },
  problem: {
    title: "Pourquoi KESWA ?",
    subtitle:
      "Parce que gérer un magasin ne devrait pas vous faire perdre votre temps à chercher des articles, compter le stock à la main ou relire des cahiers et des factures éparpillées.",
    before: {
      title: "Sans KESWA",
      items: [
        "Du temps perdu à chercher un article, une taille ou une couleur",
        "Stock compté à la main, écarts découverts trop tard",
        "Cahiers et factures papier dispersés",
        "Aucune visibilité sur ce que fait chaque employé",
        "Impossible de suivre la boutique sans être sur place",
      ],
    },
    after: {
      title: "Avec KESWA",
      items: [
        "Recherche instantanée par nom, référence ou code-barres",
        "Stock mis à jour automatiquement à chaque vente et retour",
        "Ventes, achats, retours et factures dans un seul système",
        "Chaque opération liée à l'utilisateur qui l'a réalisée",
        "Ventes et stock consultables depuis votre téléphone",
      ],
    },
  },
  spotlights: [
    {
      image: img("pos"),
      imageAlt: "Écran de caisse KESWA sur tablette avec catalogue de vêtements et terminal de paiement",
      eyebrow: "01 — Point de vente",
      title: "Une caisse moderne et rapide",
      text: "Une interface de vente pratique, conçue pour faciliter le travail quotidien et accélérer le service client, avec des outils qui aident le vendeur à conclure chaque vente facilement.",
      points: [
        "Recherche rapide des produits par nom, référence ou code-barres",
        "Ajout des produits avec choix de la taille, de la couleur et de la variante",
        "Panier avec quantités, prix et remises",
        "Différents modes de paiement, montant payé et rendu de monnaie",
        "Émission des factures de vente et réimpression des tickets",
        "Interface claire, adaptée au travail continu en caisse",
      ],
    },
    {
      image: img("stock"),
      imageAlt: "Gestion du stock KESWA sur ordinateur portable dans une réserve de vêtements",
      eyebrow: "02 — Stock et produits",
      title: "Un stock organisé comme votre magasin",
      text: "Pilotez vos produits et votre stock depuis un seul endroit, avec une organisation adaptée au commerce de vêtements et à la diversité des modèles, tailles et couleurs.",
      points: [
        "Produits, catégories, caractéristiques et variantes",
        "Code-barres attribué à chaque produit ou variante",
        "Quantités disponibles mises à jour par les ventes, retours et mouvements",
        "Entrées, sorties de stock et régularisation des écarts",
        "Prix de vente et coûts visibles selon les droits de l'utilisateur",
        "Impression d'étiquettes code-barres et prix pour vendre et inventorier plus vite",
      ],
    },
    {
      image: img("achats"),
      imageAlt: "Bon de commande fournisseur KESWA et camion de livraison de marchandises",
      eyebrow: "03 — Achats et fournisseurs",
      title: "De la réception des marchandises au suivi des paiements",
      text: "KESWA organise tout le cycle d'approvisionnement, de la réception des articles jusqu'au suivi de vos engagements financiers envers les fournisseurs.",
      points: [
        "Enregistrement des achats et réception des produits avec mise à jour du stock",
        "Fiches fournisseurs et suivi des opérations d'achat",
        "Suivi des paiements, des montants dus et des règlements",
        "Gestion des retours et régularisations fournisseurs",
        "Historique des opérations pour faciliter le contrôle",
      ],
    },
    {
      image: img("factures"),
      imageAlt: "Liste des factures de vente KESWA avec ticket de caisse et facture imprimée",
      eyebrow: "04 — Factures et retours",
      title: "Chaque vente retrouvée, chaque retour maîtrisé",
      text: "Toutes vos factures sont archivées et consultables, avec un suivi précis des retours et des remboursements.",
      points: [
        "Archive des factures avec recherche et filtres",
        "Détail de chaque facture : produits, quantités et prix",
        "Suivi des retours et des remboursements en espèces",
        "Distinction entre factures complètes, annulées et remboursées partiellement ou totalement",
        "Bons de retour et réimpression des tickets selon les droits",
        "Accès à tout l'historique des ventes, au-delà des dernières factures",
      ],
    },
    {
      image: img("rapports"),
      imageAlt: "Tableau de bord des rapports KESWA : ventes, retours, ventes nettes et répartition par catégorie",
      eyebrow: "05 — Rapports et indicateurs",
      title: "Des chiffres clairs pour décider",
      text: "Les rapports de KESWA organisent l'information pour suivre la performance du magasin et comparer les résultats d'une période à l'autre.",
      points: [
        "Nombre de factures, total des ventes, retours et ventes nettes",
        "Quantités vendues et indicateurs d'activité",
        "Analyse des résultats par période et par filtre",
        "Identification des articles les plus vendus",
        "Aide au réapprovisionnement à partir des données du système",
      ],
    },
    {
      image: img("utilisateurs"),
      imageAlt: "Écran de gestion des utilisateurs et des permissions KESWA",
      eyebrow: "06 — Employés et sécurité",
      title: "Chacun accède à ce dont il a besoin",
      text: "KESWA associe une interface claire à une structure technique qui préserve l'intégrité des opérations du magasin.",
      points: [
        "Comptes séparés pour le gérant et les employés",
        "Permissions définies selon le rôle de chaque utilisateur",
        "Accès restreint aux informations et opérations sensibles",
        "Chaque opération liée à l'identité de l'utilisateur connecté",
        "Coûts et informations de gestion protégés des accès non autorisés",
      ],
    },
    {
      image: img("scan"),
      imageAlt: "Scan de l'étiquette code-barres d'un vêtement avec l'application mobile KESWA",
      imageAspect: "square",
      eyebrow: "07 — Scan au téléphone",
      title: "Votre téléphone devient un lecteur de code-barres",
      text: "KESWA fait du téléphone un outil de travail au quotidien : sa caméra scanne les codes-barres des articles, sans dépendre en permanence d'un lecteur classique.",
      points: [
        "Scan des codes-barres pour identifier un article rapidement",
        "Aide à la vente et vérification des produits depuis le téléphone",
        "Inventaire et contrôle des quantités par scan",
        "Vérification des articles à la réception, au rangement et en réserve",
        "Scans reliés aux fiches produits du système",
      ],
    },
    {
      image: img("mobile"),
      imageAlt: "Application mobile KESWA affichant les ventes du jour, le stock et le graphique de la semaine",
      imageAspect: "square",
      eyebrow: "08 — Application mobile",
      title: "Gérez votre magasin, même à distance",
      text: "KESWA relie l'ordinateur et le téléphone : le propriétaire suit l'activité de sa boutique même lorsqu'il n'est pas sur place.",
      points: [
        "Ventes, stock et produits consultables sur mobile",
        "Suivi des performances et des indicateurs du magasin",
        "Consultation des factures et opérations selon les droits",
        "Tâches du gérant et des employés depuis une interface adaptée au téléphone",
        "Synchronisation des données entre appareils approuvés via une connexion sécurisée",
      ],
    },
  ],
  workflow: {
    title: "Tout est relié, de l'achat au rapport",
    subtitle: "Ventes, stock, achats, retours et suivi des employés font partie d'un même système connecté.",
    steps: ["Fournisseur", "Réception", "Étiquettes", "Stock", "Vente", "Facture", "Retour", "Rapports", "Mobile"],
  },
  audiences: {
    title: "Pour quels magasins ?",
    subtitle:
      "Pour les propriétaires qui veulent organiser leur travail, développer leur activité et piloter leur magasin de façon plus professionnelle.",
    items: [
      { image: img("cible-femmes"), title: "Magasins de vêtements pour femmes" },
      { image: img("cible-hijab"), title: "Boutiques de jilbabs et hijabs" },
      { image: img("cible-enfants"), title: "Magasins de vêtements pour enfants" },
      { image: img("cible-hommes"), title: "Magasins de vêtements pour hommes" },
      { image: img("cible-modeles"), title: "Boutiques multi-modèles, tailles et couleurs" },
    ],
  },
  faq: {
    title: "Questions fréquentes",
    subtitle: "Tout ce qu'il faut savoir avant d'équiper votre magasin avec KESWA.",
    items: [
      {
        q: "KESWA gère-t-il les tailles et les couleurs ?",
        a: "Oui. Chaque produit peut avoir ses variantes (taille, couleur, modèle), avec un code-barres attribué par produit ou par variante. Les quantités sont suivies variante par variante.",
      },
      {
        q: "Puis-je scanner les articles avec mon téléphone ?",
        a: "Oui. La caméra du téléphone sert de lecteur de code-barres pour identifier un article, aider à la vente, vérifier une réception ou faire l'inventaire, sans dépendre en permanence d'un lecteur classique.",
      },
      {
        q: "Puis-je suivre mon magasin à distance ?",
        a: "Oui. L'application mobile donne accès aux ventes, au stock, aux produits et aux indicateurs, avec une synchronisation sécurisée entre les appareils approuvés.",
      },
      {
        q: "Comment sont gérés les retours ?",
        a: "Les retours et remboursements sont suivis depuis les factures, avec une distinction claire entre factures complètes, annulées et remboursées partiellement ou totalement. Le stock est mis à jour automatiquement.",
      },
      {
        q: "Mes employés voient-ils les prix d'achat ?",
        a: "Seulement si vous le décidez. Chaque rôle a ses permissions : les coûts et les informations de gestion restent protégés, et chaque opération est liée à l'utilisateur qui l'a réalisée.",
      },
      {
        q: "À quels magasins KESWA s'adresse-t-il ?",
        a: "Aux magasins de vêtements pour femmes, hommes et enfants, aux boutiques de jilbabs et hijabs, et plus généralement à toute boutique de mode qui gère de nombreux modèles, tailles et couleurs.",
      },
      {
        q: "L'interface est-elle en arabe ?",
        a: "Oui. KESWA propose une interface arabe adaptée à l'usage quotidien, avec des opérations organisées en sections claires et reliées entre elles.",
      },
      {
        q: "Combien coûte KESWA ?",
        a: "Le tarif est établi sur devis, selon le nombre de points de vente et d'utilisateurs. Contactez-nous pour une démonstration et une proposition adaptée à votre magasin.",
      },
    ],
  },
  cta: {
    title: "Équipez votre magasin avec KESWA",
    subtitle: "Un magasin mieux organisé, un stock sous contrôle et des décisions fondées sur les chiffres.",
    primary: "Demander une démo",
    whatsapp: "WhatsApp",
    brochure: "Brochure PDF",
  },
  whatsappMessage: "Bonjour, je souhaite une démonstration du logiciel KESWA pour mon magasin de vêtements.",
};

export default content;
