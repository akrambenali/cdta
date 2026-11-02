import type { LandingContent } from "@/i18n/landing-type";

const img = (name: string) => `/images/landing/sdp/${name}.jpg`;

const content: LandingContent = {
  seo: {
    title: "SDP — Plateforme de gestion de la distribution, des commandes et du stock en Algérie",
    description:
      "SDP digitalise toute la chaîne de distribution : portail commerçants, commandes, stock, factures, paiements, livraison et rapports. Plateforme personnalisable à l'identité de votre entreprise.",
    keywords: [
      "logiciel de distribution",
      "plateforme de distribution Algérie",
      "gestion des commandes grossiste",
      "logiciel grossiste",
      "portail commandes revendeurs",
      "gestion de stock et livraison",
      "plateforme B2B marque blanche",
      "Smart Distribution Platform",
      "SDP",
    ],
  },
  breadcrumb: { home: "Accueil", products: "Produits", current: "SDP" },
  hero: {
    title: "La plateforme intelligente pour gérer",
    highlight: "la distribution, les commandes et le stock",
    subtitle:
      "SDP — Smart Distribution Platform — couvre tout le cycle de distribution : du catalogue produits et de la création de la commande jusqu'à la validation, le stock, la facturation, la livraison et le paiement. Une plateforme qui porte votre identité et s'adapte à vos besoins.",
    ctaPrimary: "Demander une démo",
    ctaWhatsapp: "Discuter sur WhatsApp",
    ctaBrochure: "Télécharger la brochure (PDF)",
    badges: ["Portail dédié aux commerçants", "Stock réservé à la validation", "Personnalisable à votre marque"],
    imageAlt: "Tableau de bord SDP sur ordinateur portable et application mobile, avec cartons et camion de livraison",
  },
  modules: {
    eyebrow: "Smart distribution",
    title: "Toute la chaîne de distribution sur une seule plateforme",
    subtitle:
      "SDP transforme la distribution traditionnelle en un système numérique centralisé, organisé et évolutif, qui donne à l'entreprise, à la direction et aux magasins une vision claire et à jour de toutes les opérations.",
    items: [
      { icon: "package", title: "Produits", text: "Catalogue, prix, offres et quantités disponibles." },
      { icon: "store", title: "Magasins", text: "Un compte et un portail pour chaque point de vente." },
      { icon: "shopping-cart", title: "Commandes", text: "Du panier à la livraison, chaque commande est suivie." },
      { icon: "warehouse", title: "Stock", text: "Quantités réservées, sorties et retours automatiques." },
      { icon: "receipt", title: "Factures", text: "Facture électronique liée à chaque commande validée." },
      { icon: "credit-card", title: "Paiements", text: "Statut de paiement distinct du statut de commande." },
      { icon: "truck", title: "Livraison", text: "Affectation et suivi des missions de livraison." },
      { icon: "dashboard", title: "Tableau de bord", text: "Indicateurs, dernières commandes et alertes." },
      { icon: "users", title: "Utilisateurs et rôles", text: "Administrateur, gérant de magasin, livreur." },
      { icon: "search", title: "Recherche et filtres", text: "Commandes, factures et paiements filtrés en un clic." },
      { icon: "shield-check", title: "Sécurité", text: "Authentification, sessions et accès selon les droits." },
      { icon: "palette", title: "Marque blanche", text: "Nom, logo, couleurs et circuit adaptés à votre entreprise." },
    ],
  },
  problem: {
    title: "Fini les commandes par téléphone et les tableaux manuels",
    subtitle:
      "SDP réunit toutes les étapes du processus commercial sur une même plateforme, pour ne plus dépendre des appels, des messages, des tableaux faits à la main ou d'un suivi éparpillé des commandes.",
    before: {
      title: "Sans SDP",
      items: [
        "Commandes reçues par téléphone ou par message",
        "Tableaux Excel tenus à la main",
        "Suivi des commandes dispersé entre plusieurs personnes",
        "Stock disponible connu approximativement",
        "Livraisons et encaissements difficiles à rapprocher",
      ],
    },
    after: {
      title: "Avec SDP",
      items: [
        "Chaque magasin passe ses commandes en ligne depuis son compte",
        "Un circuit clair : nouvelle, acceptée, livrée",
        "Stock réservé à la validation et déduit à la livraison",
        "Factures générées automatiquement et paiements suivis",
        "Une vue d'ensemble de la distribution depuis un seul endroit",
      ],
    },
  },
  spotlights: [
    {
      image: img("portail"),
      imageAlt: "Portail commerçant SDP : catalogue produits sur ordinateur et panier sur téléphone",
      eyebrow: "01 — Portail commerçants",
      title: "Un portail dédié à chaque magasin",
      text: "Chaque magasin dispose de son propre compte pour accéder à la plateforme et gérer facilement ses commandes.",
      points: [
        "Parcourir les produits disponibles, rechercher par nom ou SKU",
        "Consulter les prix, les offres et les quantités disponibles",
        "Ajouter au panier, modifier les quantités ou retirer un produit",
        "Envoyer la commande en ligne et suivre son statut",
        "Consulter les factures et l'état du paiement",
        "Recommander facilement les mêmes produits",
      ],
    },
    {
      image: img("commandes"),
      imageAlt: "Liste des commandes SDP avec statut, montant et état de paiement, filtres sur téléphone",
      eyebrow: "02 — Gestion des commandes",
      title: "Chaque commande suivie, de sa création à la livraison",
      text: "La plateforme offre un cycle de commande clair, avec la possibilité de suivre chaque commande depuis sa création jusqu'à sa livraison, et de l'annuler si nécessaire.",
      points: [
        "Statut de commande séparé du statut de paiement : « livrée — non payée » puis « livrée — payée »",
        "Meilleur contrôle des comptes et du recouvrement pour la direction",
        "Recherche de produits, de commandes et de magasins",
        "Filtres par statut de commande, par facture et par état de paiement",
        "Outils de recherche et de filtrage adaptés au téléphone",
      ],
      stepsTitle: "Les statuts principaux",
      steps: ["Nouvelle", "Acceptée", "Livrée"],
    },
    {
      image: img("factures"),
      imageAlt: "Facture SDP sur ordinateur avec statuts payée, non payée et annulée",
      eyebrow: "03 — Facturation",
      title: "Une facturation intégrée à la commande",
      text: "Dès la validation d'une commande, la facture électronique est générée et liée à cette commande.",
      points: [
        "Statuts de facture : non payée, payée ou annulée",
        "Enregistrement du paiement par l'administration",
        "Mise à jour automatique du statut de la facture et de la commande",
      ],
    },
    {
      image: img("stock"),
      imageAlt: "Écran de stock SDP sur tablette avec quantités disponibles, réservées et totales en entrepôt",
      eyebrow: "04 — Gestion du stock",
      title: "Un stock piloté par le cycle des commandes",
      text: "La plateforme est reliée au cycle commande–stock : les quantités sont contrôlées selon l'état de chaque commande, ce qui réduit les erreurs de calcul manuel et améliore la précision du stock.",
      points: [
        "Quantités disponibles, réservées et totales par produit",
        "Moins d'erreurs de calcul manuel",
        "Un stock plus fiable pour l'équipe commerciale",
      ],
      stepsTitle: "Le stock suit la commande",
      steps: [
        "Commande acceptée : quantité réservée",
        "Livraison : sortie du stock confirmée",
        "Annulation : quantité réservée restituée selon les conditions",
      ],
    },
    {
      image: img("dashboard"),
      imageAlt: "Tableau de bord SDP : total des commandes, ventes, magasins actifs, graphique et alertes",
      eyebrow: "05 — Tableau de bord",
      title: "Toute l'activité commerciale sous les yeux",
      text: "La plateforme donne à la direction un centre de pilotage unique pour suivre l'activité : une vue complète des opérations de distribution, depuis un seul endroit.",
      points: [
        "Suivi des commandes et des dernières commandes reçues",
        "Gestion des produits, des magasins et des utilisateurs",
        "Gestion des livraisons, des factures et des paiements",
        "Contrôle du stock, indicateurs et statistiques",
        "Analyse des commandes par statut",
      ],
    },
    {
      image: img("livraison"),
      imageAlt: "Suivi de livraison SDP : camion sur une carte, chauffeur en route et commande livrée",
      eyebrow: "06 — Livraison",
      title: "Des livraisons organisées et suivies",
      text: "La plateforme comprend une structure dédiée aux opérations de livraison, qui permet d'affecter les missions et d'en suivre l'avancement.",
      points: [
        "Affectation des livraisons aux chauffeurs",
        "Suivi de chaque mission jusqu'à la remise",
        "Rôle « livreur » avec ses propres accès",
        "Architecture prévue pour un portail chauffeurs dédié, sans refonte du système",
      ],
    },
    {
      image: img("utilisateurs"),
      imageAlt: "Gestion des utilisateurs SDP : administrateur, gérant de magasin et livreur",
      eyebrow: "07 — Utilisateurs et sécurité",
      title: "Chaque utilisateur accède à ce qui le concerne",
      text: "Un système de droits définit le type de chaque utilisateur et les fonctions qui lui sont accessibles, avec une authentification complète et la gestion des sessions.",
      points: [
        "Rôles : administrateur, gérant de magasin, livreur",
        "Rôles et permissions extensibles selon les besoins de l'entreprise",
        "Connexion, déconnexion et « se souvenir de moi »",
        "Changement et récupération du mot de passe",
        "Protection du compte contre les tentatives de connexion répétées",
      ],
    },
    {
      image: img("responsive"),
      imageAlt: "SDP affiché sur ordinateur, tablette et smartphone",
      eyebrow: "08 — Sur tous les écrans",
      title: "Un design entièrement responsive",
      text: "La plateforme fonctionne sur ordinateur, smartphone et tablette, avec une interface qui s'adapte à la taille de l'écran.",
      points: [
        "Produits et panier faciles à utiliser sur mobile",
        "Tableaux, listes et commandes lisibles sur petit écran",
        "Factures et tableau de bord accessibles partout",
      ],
    },
  ],
  workflow: {
    title: "Un seul système pour tout le cycle de distribution",
    subtitle: "SDP réunit les différentes étapes du processus commercial sur une même plateforme.",
    steps: ["Produit", "Magasin", "Panier", "Commande", "Validation", "Stock", "Facture", "Livraison", "Paiement"],
  },
  audiences: {
    title: "Une plateforme à votre image",
    subtitle:
      "Pas une simple plateforme prête à l'emploi, mais une solution numérique personnalisable : même technologie, identité différente, expérience pensée pour vos besoins.",
    items: [
      { image: img("variante-retail"), title: "SDP Retail", text: "Une plateforme dédiée au commerce de détail, avec une identité propre." },
      { image: img("variante-distribution"), title: "SDP Distribution", text: "Une plateforme dédiée à la distribution et au commerce de gros." },
      { image: img("variante-marque"), title: "[Votre entreprise] Platform", text: "Une plateforme qui porte entièrement l'identité de votre société." },
    ],
  },
  cards: {
    title: "Personnalisable selon votre activité",
    subtitle: "Toutes les entreprises ne travaillent pas de la même façon : SDP se configure selon votre circuit de travail.",
    items: [
      {
        icon: "palette",
        title: "Identité visuelle",
        text: "Nom de l'application, logo, couleurs principales et secondaires, thème, icônes et images de marque.",
      },
      {
        icon: "workflow",
        title: "Circuit de travail",
        text: "Création et validation des commandes, statuts, livraison, encaissement et gestion du stock.",
      },
      {
        icon: "users",
        title: "Rôles et fonctions",
        text: "Rôles des utilisateurs, gestion des magasins et des clients, rapports et indicateurs attendus.",
      },
      {
        icon: "rocket",
        title: "Évolutive",
        text: "Nouvelles fonctions ou fonctions modifiées, pour grandir avec votre entreprise.",
      },
    ],
  },
  faq: {
    title: "Questions fréquentes",
    subtitle: "Tout ce qu'il faut savoir avant de digitaliser votre distribution avec SDP.",
    items: [
      {
        q: "À qui s'adresse SDP ?",
        a: "Aux entreprises qui vendent et distribuent leurs produits à un réseau de magasins agréés : distributeurs, grossistes, producteurs ou enseignes de détail qui veulent centraliser commandes, stock, factures et livraisons.",
      },
      {
        q: "Peut-on mettre la plateforme à nos couleurs ?",
        a: "Oui. Le nom de l'application, le logo, les couleurs, le thème, les icônes et les visuels de marque peuvent être personnalisés. SDP peut devenir « SDP Retail », « SDP Distribution » ou une plateforme au nom de votre entreprise.",
      },
      {
        q: "Peut-on adapter le circuit de commande à notre fonctionnement ?",
        a: "Oui. La création et la validation des commandes, les statuts, la livraison et l'encaissement, la gestion du stock, les rôles, la gestion des magasins et les rapports se configurent selon votre cycle de travail.",
      },
      {
        q: "Comment les magasins passent-ils commande ?",
        a: "Chaque magasin dispose de son compte : il parcourt le catalogue, consulte prix, offres et disponibilités, remplit son panier puis envoie sa commande en ligne. Il suit ensuite son statut, ses factures et ses paiements.",
      },
      {
        q: "Comment le stock est-il mis à jour ?",
        a: "La quantité est réservée dès que la commande est acceptée, sa sortie est confirmée à la livraison, et en cas d'annulation la quantité réservée peut être remise en stock selon les conditions définies.",
      },
      {
        q: "Peut-on suivre séparément la livraison et le paiement ?",
        a: "Oui. Le statut de la commande est distinct du statut de paiement : une commande peut être « livrée — non payée » puis passer à « livrée — payée ». La direction garde ainsi le contrôle sur les comptes et le recouvrement.",
      },
      {
        q: "SDP fonctionne-t-il sur téléphone ?",
        a: "Oui. La plateforme est entièrement responsive : ordinateur, smartphone et tablette, avec des écrans produits, panier, commandes, factures et tableau de bord adaptés à chaque taille d'écran.",
      },
      {
        q: "Combien coûte SDP ?",
        a: "Le tarif est établi sur devis, selon le niveau de personnalisation et l'organisation de votre réseau de distribution. Contactez-nous pour une démonstration.",
      },
    ],
  },
  cta: {
    title: "Une plateforme, votre marque, votre organisation",
    subtitle: "Your Business. Your Brand. Your Platform. Parlons de votre réseau de distribution.",
    primary: "Demander une démo",
    whatsapp: "WhatsApp",
    brochure: "Brochure PDF",
  },
  whatsappMessage: "Bonjour, je souhaite une démonstration de la plateforme SDP pour mon activité de distribution.",
};

export default content;
