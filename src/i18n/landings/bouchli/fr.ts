import type { LandingContent } from "@/i18n/landing-type";

const content: LandingContent = {
  seo: {
    title: "BOUCHLI — Logiciel de caisse et de gestion pour boucherie en Algérie",
    description:
      "Caisse POS, vente au poids ou à la pièce, balance Rongta RLS1000, stock, achats, factures et rapports : Bouchli gère votre boucherie, même sans internet. Interface 100 % arabe.",
    keywords: [
      "logiciel boucherie",
      "logiciel de caisse boucherie",
      "logiciel boucherie Algérie",
      "caisse enregistreuse boucherie",
      "point de vente boucherie",
      "balance Rongta RLS1000",
      "gestion de stock boucherie",
      "vente au poids",
      "Bouchli",
      "بوشلي",
    ],
    alternateName: "بوشلي",
  },
  breadcrumb: { home: "Accueil", products: "Produits", current: "BOUCHLI" },
  hero: {
    title: "Le logiciel de caisse et de gestion",
    highlight: "pensé pour les boucheries",
    subtitle:
      "BOUCHLI réunit la caisse, les produits, les prix, le code-barres, la balance électronique, le stock, les achats, les factures, la trésorerie, les rapports et la sauvegarde dans une seule application, simple, rapide et en arabe.",
    ctaPrimary: "Demander une démo",
    ctaWhatsapp: "Discuter sur WhatsApp",
    ctaBrochure: "Télécharger la brochure (PDF)",
    badges: ["Balance Rongta RLS1000 intégrée", "Fonctionne sans internet", "Interface 100 % arabe"],
    imageAlt: "Caisse tactile BOUCHLI avec balance électronique, imprimante de tickets et lecteur de code-barres",
  },
  modules: {
    eyebrow: "Tout-en-un",
    title: "Une seule application pour tout le quotidien de votre boucherie",
    subtitle:
      "Du comptoir à la balance, des factures au stock et des rapports à la sauvegarde : chaque opération est enregistrée au même endroit.",
    items: [
      { icon: "monitor", title: "Point de vente (POS)", text: "Une caisse rapide et claire pour le vendeur et le caissier." },
      { icon: "tag", title: "Produits et prix", text: "Prix à la pièce ou au kilo, précis en dinars algériens." },
      { icon: "scan-barcode", title: "Code-barres", text: "Codes générés par le système, codes d'origine et codes de balance." },
      { icon: "scale", title: "Balance électronique", text: "Intégration directe avec la Rongta RLS1000 en réseau local." },
      { icon: "package", title: "Stock", text: "Entrées, sorties, retours et inventaires suivis automatiquement." },
      { icon: "truck", title: "Achats et fournisseurs", text: "Approvisionnements, quantités, prix et historique d'achat." },
      { icon: "file-text", title: "Ventes et factures", text: "Un historique complet et consultable de chaque vente." },
      { icon: "undo", title: "Retours", text: "Retour depuis la facture d'origine, stock mis à jour." },
      { icon: "banknote", title: "Trésorerie et dépenses", text: "Entrées de caisse, dépenses et mouvements de la journée." },
      { icon: "chart", title: "Rapports", text: "Ventes, stock, achats, dépenses et performance d'activité." },
      { icon: "users", title: "Utilisateurs et droits", text: "Gérant ou caissier : chacun voit ce qui le concerne." },
      { icon: "database-backup", title: "Sauvegarde automatique", text: "Copies locales vérifiées, y compris à la fermeture." },
      { icon: "wifi-off", title: "Sans internet", text: "Toutes les opérations essentielles fonctionnent en local." },
      { icon: "printer", title: "Impression thermique", text: "Tickets de vente lisibles, en arabe, réimprimables." },
      { icon: "languages", title: "Interface arabe", text: "Conçue en arabe et de droite à gauche dès le départ." },
      { icon: "shield-check", title: "Licence protégée", text: "Licence locale liée au poste, sans connexion permanente." },
    ],
  },
  problem: {
    title: "Fini les cahiers et les logiciels éparpillés",
    subtitle:
      "L'objectif de BOUCHLI n'est pas seulement d'enregistrer des ventes, mais de réunir toutes les opérations essentielles de la boutique dans un seul système.",
    before: {
      title: "Sans BOUCHLI",
      items: [
        "Ventes et dettes notées dans des cahiers dispersés",
        "Montants calculés à la main, avec des erreurs d'arrondi",
        "Prix ressaisis séparément sur la balance",
        "Stock estimé de mémoire, sans historique",
        "Plusieurs logiciels séparés qui ne se parlent pas",
      ],
    },
    after: {
      title: "Avec BOUCHLI",
      items: [
        "Chaque vente enregistrée et retrouvable en quelques secondes",
        "Prix au kilo calculés automatiquement, sans erreur de décimales",
        "Produits et prix envoyés directement à la balance",
        "Mouvements de stock tracés à chaque vente, achat ou retour",
        "Une seule application pour la caisse, le stock et les rapports",
      ],
    },
  },
  spotlights: [
    {
      image: "/images/landing/bouchli/pos.jpg",
      imageAlt: "Écran de caisse BOUCHLI dans une boucherie, avec imprimante de tickets",
      eyebrow: "01 — Point de vente",
      title: "Une caisse rapide, au poids comme à la pièce",
      text: "L'écran de vente est le cœur du système : il rend la vente quotidienne rapide et claire pour le vendeur comme pour le caissier.",
      points: [
        "Ajout rapide des produits au panier",
        "Recherche par nom ou par code-barres, lecteur branché directement",
        "Vente à la pièce ou au poids, prix calculés automatiquement",
        "Total instantané et remises selon les droits de l'utilisateur",
        "Mise en attente d'une vente pour la reprendre plus tard",
        "Ticket imprimé sur imprimante thermique en fin de vente",
      ],
    },
    {
      image: "/images/landing/bouchli/balance.jpg",
      imageAlt: "Balance électronique Rongta RLS1000 connectée au logiciel BOUCHLI",
      eyebrow: "02 — Balance Rongta RLS1000",
      title: "Votre balance synchronisée, sans double saisie",
      text: "BOUCHLI communique directement avec la balance Rongta RLS1000 via le réseau local. Les produits et les prix sont envoyés depuis le logiciel, et les codes-barres de la balance sont relus à la caisse (produit, poids ou valeur).",
      points: [
        "Envoi des PLU, prix, Hotkey, Tare et PT",
        "Données de code-barres et réglages d'étiquettes",
        "Passage direct de la pesée à la vente en caisse",
      ],
      stepsTitle: "Synchronisation protégée (Preview / Commit)",
      steps: [
        "Aperçu des données à envoyer",
        "Création d'une empreinte numérique",
        "Confirmation par l'utilisateur",
        "Relecture des données actuelles",
        "Comparaison des empreintes",
        "Envoi bloqué si les données ont changé",
      ],
      note: "Impossible d'envoyer à la balance des données différentes de celles que vous avez vérifiées.",
    },
    {
      image: "/images/landing/bouchli/stock.jpg",
      imageAlt: "Gestion du stock de viande dans BOUCHLI sur ordinateur portable",
      eyebrow: "03 — Stock, achats et factures",
      title: "Sachez ce qui s'est vraiment passé dans votre stock",
      text: "Chaque vente, achat ou retour met à jour le stock. Vous consultez l'historique au lieu de compter à la main.",
      points: [
        "Entrées, sorties par vente, retours et ajustements d'inventaire",
        "Fournisseurs, achats, quantités, prix et impact sur le stock",
        "Historique complet des factures : produits, quantités, totaux, date et heure",
        "Le prix de vente est conservé dans la facture : changer un prix ne modifie jamais les anciennes factures",
        "Retours effectués depuis la facture d'origine, stock mis à jour automatiquement",
      ],
    },
    {
      image: "/images/landing/bouchli/sauvegarde.jpg",
      imageAlt: "Sauvegarde automatique réussie dans BOUCHLI avec disque de sauvegarde",
      eyebrow: "04 — Fiabilité",
      title: "Vos données protégées, même sans internet",
      text: "BOUCHLI est conçu pour fonctionner en local, sans dépendre d'un serveur cloud : idéal pour une boutique qui doit continuer à vendre pendant une coupure.",
      points: [
        "Offline First : vente, stock, factures, achats, rapports et balance en local",
        "Sauvegarde automatique planifiée et à chaque fermeture de l'application",
        "Intégrité de chaque copie vérifiée avant d'être validée",
        "Fermeture sécurisée : ventes en cours enregistrées avant de quitter",
        "L'application ne se ferme pas si la sauvegarde échoue",
        "Licence locale liée au poste, sans connexion permanente",
      ],
    },
    {
      image: "/images/landing/bouchli/interface.jpg",
      imageAlt: "Interface arabe tactile de BOUCHLI avec gros boutons et prix lisibles",
      eyebrow: "05 — Interface et équipe",
      title: "Une interface arabe simple, pour toute l'équipe",
      text: "BOUCHLI a été conçu dès le départ en arabe et de droite à gauche, avec une attention particulière à la lisibilité au comptoir.",
      points: [
        "Textes clairs, gros boutons pour les opérations importantes",
        "Utilisable au clavier comme sur écran tactile",
        "Chiffres et prix bien lisibles, écran caissier simplifié",
        "Rôles Gérant (droits complets) et Caissier/Employé (droits limités)",
        "Rapports : ventes, factures, produits, stock, achats, dépenses et trésorerie",
      ],
    },
  ],
  workflow: {
    title: "Tout est relié, du produit à la sauvegarde",
    subtitle: "Au lieu de cahiers dispersés ou de plusieurs programmes séparés, chaque étape alimente la suivante.",
    steps: ["Produit", "Prix", "Vente", "Facture", "Stock", "Achats", "Trésorerie", "Rapports", "Balance", "Sauvegarde"],
  },
  cards: {
    title: "Compatible avec l'équipement de votre comptoir",
    subtitle: "BOUCHLI est une application de bureau pour Windows qui s'intègre au matériel courant des boucheries.",
    items: [
      { icon: "laptop", title: "PC ou caisse tactile Windows", text: "Clavier et écran tactile pris en charge." },
      { icon: "scale", title: "Balance Rongta RLS1000", text: "Connexion directe par le réseau local." },
      { icon: "printer", title: "Imprimante thermique", text: "Tickets de vente et réimpression des factures." },
      { icon: "scan-barcode", title: "Lecteur de code-barres", text: "Branché et utilisable directement en caisse." },
    ],
  },
  faq: {
    title: "Questions fréquentes",
    subtitle: "Tout ce qu'il faut savoir avant d'équiper votre boucherie avec BOUCHLI.",
    items: [
      {
        q: "BOUCHLI fonctionne-t-il sans connexion internet ?",
        a: "Oui. BOUCHLI est conçu en Offline First : la vente, les produits, le stock, les factures, les achats, les rapports, la sauvegarde et la balance en réseau local fonctionnent sans serveur cloud ni connexion permanente.",
      },
      {
        q: "Quelle balance électronique est compatible ?",
        a: "BOUCHLI s'intègre directement à la balance Rongta RLS1000 via le réseau local : PLU, prix, Hotkey, Tare, PT, codes-barres et réglages d'étiquettes. Pour un autre modèle, contactez-nous pour étudier la compatibilité.",
      },
      {
        q: "Peut-on vendre au poids et à la pièce ?",
        a: "Oui. Chaque produit est défini à la pièce ou au poids, avec un prix au kilogramme. Les montants sont calculés précisément en dinars algériens, sans erreur d'arrondi.",
      },
      {
        q: "Que se passe-t-il pour mes anciennes factures si je change un prix ?",
        a: "Rien : le prix utilisé au moment de la vente est conservé dans la facture. Modifier un prix n'affecte que les ventes suivantes.",
      },
      {
        q: "Mes données sont-elles sauvegardées ?",
        a: "Oui. BOUCHLI crée des sauvegardes locales selon le planning défini et à chaque fermeture, vérifie l'intégrité de chaque copie et refuse de se fermer si la sauvegarde échoue.",
      },
      {
        q: "Puis-je limiter ce que voient mes employés ?",
        a: "Oui. Le rôle Gérant dispose de tous les droits, tandis que le rôle Caissier/Employé n'accède qu'aux fonctions dont il a besoin. Les opérations sensibles restent protégées.",
      },
      {
        q: "BOUCHLI calcule-t-il le bénéfice net ?",
        a: "Les rapports suivent l'activité (ventes, achats, dépenses, trésorerie). Le bénéfice net réel n'est calculé que si les coûts d'achat sont renseignés : il faut donc distinguer résultat d'activité et bénéfice comptable.",
      },
      {
        q: "Combien coûte BOUCHLI ?",
        a: "Le tarif est établi sur devis, selon l'équipement (balance, imprimante) et le nombre de postes. Contactez-nous pour une démonstration et une proposition adaptée.",
      },
    ],
  },
  cta: {
    title: "Équipez votre boucherie avec BOUCHLI",
    subtitle: "Une gestion plus simple, des ventes plus rapides et un meilleur contrôle de votre boutique.",
    primary: "Demander une démo",
    whatsapp: "WhatsApp",
    brochure: "Brochure PDF",
  },
  whatsappMessage: "Bonjour, je souhaite une démonstration du logiciel BOUCHLI pour ma boucherie.",
};

export default content;
