import type { LandingContent } from "@/i18n/landing-type";

const img = (name: string) => `/images/landing/qr-chief/${name}.jpg`;

const content: LandingContent = {
  seo: {
    title: "QR-Chief — Générateur de QR codes personnalisés, licence à vie sans abonnement",
    description:
      "Créez des QR codes pour vos liens, textes, PDF et images, personnalisez couleurs et formes, exportez en PNG, JPG ou SVG. Paiement unique, licence à vie, interface FR/AR/EN.",
    keywords: [
      "générateur QR code",
      "créer un QR code",
      "QR code personnalisé",
      "QR code sans abonnement",
      "QR code menu restaurant",
      "QR code PDF",
      "QR code SVG",
      "générateur QR code Algérie",
      "QR-Chief",
    ],
  },
  breadcrumb: { home: "Accueil", products: "Produits", current: "QR-Chief" },
  hero: {
    title: "Créez votre QR code, personnalisez-le,",
    highlight: "partagez votre contenu intelligemment",
    subtitle:
      "QR-Chief est une application professionnelle pour créer, personnaliser et gérer des QR codes en toute simplicité : liens, textes, fichiers et contenus numériques, aux couleurs de votre marque.",
    ctaPrimary: "Obtenir QR-Chief",
    ctaWhatsapp: "Discuter sur WhatsApp",
    ctaBrochure: "Télécharger la brochure (PDF)",
    badges: ["Paiement unique, licence à vie", "Export PNG, JPG et SVG", "Interface FR, AR et EN"],
    imageAlt: "QR code personnalisé QR-Chief entouré d'icônes de lien, document, image et contact",
  },
  modules: {
    eyebrow: "Create. Customize. Connect.",
    title: "Tout ce qu'il faut pour des QR codes professionnels",
    subtitle:
      "Que vous teniez un restaurant, une boutique ou une entreprise, ou que vous travailliez dans le marketing et le design, QR-Chief vous donne les outils pour créer des QR codes à votre image.",
    items: [
      { icon: "link", title: "Liens web", text: "Un QR code pour chaque lien : site, menu, réseau social." },
      { icon: "type", title: "Texte", text: "Transformez un texte en code scannable." },
      { icon: "file-text", title: "Fichiers PDF et images", text: "Donnez accès à vos documents et photos." },
      { icon: "eye", title: "Aperçu", text: "Visualisez le code avant de le valider et de le télécharger." },
      { icon: "palette", title: "Couleurs", text: "Des couleurs adaptées à votre identité visuelle." },
      { icon: "shapes", title: "Formes des modules", text: "Carrés, arrondis ou courbes selon les options." },
      { icon: "grid", title: "Fond transparent", text: "Un code qui s'intègre à tous vos supports." },
      { icon: "download", title: "PNG, JPG, SVG", text: "Trois formats pour le web, l'image et l'impression." },
      { icon: "save", title: "Codes sauvegardés", text: "Retrouvez et modifiez vos codes à tout moment." },
      { icon: "cloud-upload", title: "Espace personnel", text: "Fichiers et codes liés à votre propre compte." },
      { icon: "globe", title: "Trois langues", text: "Arabe (RTL), français et anglais." },
      { icon: "infinity", title: "Licence à vie", text: "Un seul paiement, sans abonnement à renouveler." },
    ],
  },
  problem: {
    title: "Payez une fois, profitez-en à vie",
    subtitle:
      "Contrairement aux services qui imposent des frais mensuels ou annuels, QR-Chief repose sur une licence à vie, contre un paiement unique.",
    before: {
      title: "Avec un service par abonnement",
      items: [
        "Des frais mensuels ou annuels qui s'accumulent",
        "Une licence à renouveler pour continuer à l'utiliser",
        "La crainte de perdre l'accès à la fin de l'abonnement",
        "Un coût difficile à prévoir sur la durée",
      ],
    },
    after: {
      title: "Avec QR-Chief",
      items: [
        "Un seul paiement pour une licence d'utilisation à vie",
        "Aucun abonnement mensuel ou annuel à renouveler",
        "Vos codes et fichiers liés à votre compte personnel",
        "Un investissement durable dans vos outils numériques",
      ],
    },
  },
  spotlights: [
    {
      image: img("editeur"),
      imageAlt: "Éditeur QR-Chief sur ordinateur portable avec choix de couleurs et aperçu sur téléphone",
      eyebrow: "01 — Création et personnalisation",
      title: "Un QR code à l'image de votre marque",
      text: "Créez un code en quelques clics, puis personnalisez son design pour qu'il corresponde à votre identité visuelle, avec un aperçu avant de le valider.",
      points: [
        "QR codes pour liens web, textes, fichiers PDF et images",
        "Couleurs adaptées à votre identité visuelle",
        "Formes des modules : carrées, arrondies ou courbes selon les options",
        "Formes des repères d'angle personnalisables",
        "Codes avec fond transparent",
        "Niveau de correction d'erreurs et marges ajustables",
      ],
    },
    {
      image: img("gestion"),
      imageAlt: "Liste des QR codes sauvegardés dans QR-Chief sur ordinateur et téléphone",
      eyebrow: "02 — Sauvegarde et gestion",
      title: "Tous vos QR codes au même endroit",
      text: "Chaque code que vous créez est sauvegardé : vous pouvez y revenir, modifier son design et gérer les fichiers qui lui sont associés.",
      points: [
        "Sauvegarde des QR codes que vous avez créés",
        "Retour sur un code sauvegardé pour modifier son design",
        "Gestion des codes et des fichiers liés à votre compte",
        "Interface adaptée aux ordinateurs et aux appareils mobiles",
      ],
    },
    {
      image: img("compte"),
      imageAlt: "Tableau de bord « My QR Codes » de QR-Chief sur ordinateur et téléphone avec envoi de fichiers",
      eyebrow: "03 — Votre compte",
      title: "Vos fichiers et vos codes dans votre espace personnel",
      text: "QR-Chief offre un espace privé lié à votre compte pour conserver les fichiers envoyés et les QR codes créés, et les retrouver facilement en cas de besoin.",
      points: [
        "Fichiers envoyés et QR codes conservés dans votre compte",
        "Accès simple à vos codes quand vous en avez besoin",
        "Pas d'abonnement périodique : pas d'inquiétude sur la fin d'un abonnement",
        "Vos données liées à votre compte, pas de simples fichiers temporaires sur votre appareil",
      ],
      note: "La durée de stockage et la disponibilité des fichiers dépendent des conditions du service de stockage et de la politique de conservation des données.",
    },
  ],
  workflow: {
    title: "De l'idée au QR code imprimé",
    subtitle: "Créez, personnalisez et partagez votre contenu en quelques étapes simples et rapides.",
    steps: ["Contenu", "Couleurs", "Formes", "Aperçu", "Téléchargement", "Sauvegarde", "Partage"],
  },
  cards: {
    title: "Téléchargez dans le bon format",
    subtitle: "Exportez vos designs dans trois formats principaux, selon l'usage.",
    items: [
      { icon: "image", title: "PNG", text: "Pour les sites web, les publications et les designs." },
      { icon: "image", title: "JPG", text: "Pour les images et les supports numériques." },
      { icon: "pen-tool", title: "SVG", text: "Pour les designs vectoriels à agrandir sans perte de netteté." },
      { icon: "globe", title: "Arabe, français, anglais", text: "Interface multilingue, avec écriture de droite à gauche." },
    ],
  },
  audiences: {
    title: "À qui s'adresse QR-Chief ?",
    subtitle: "L'application a été conçue pour un large éventail d'utilisateurs et d'activités.",
    items: [
      { icon: "utensils", title: "Restaurants et cafés", text: "Des QR codes pour les menus numériques." },
      { icon: "shopping-cart", title: "Commerces", text: "Pour faciliter l'accès aux produits et services." },
      { icon: "building", title: "Entreprises et institutions", text: "Pour partager brochures, documents et fichiers." },
      { icon: "briefcase", title: "Cabinets professionnels", text: "Pour mettre formulaires et documents à disposition des clients." },
      { icon: "plane", title: "Agences de voyage", text: "Pour partager programmes, brochures et informations." },
      { icon: "megaphone", title: "Marketeurs et designers", text: "Pour intégrer des QR codes aux campagnes et aux imprimés." },
      { icon: "user", title: "Particuliers et étudiants", text: "Pour partager liens, fichiers et contenus facilement." },
    ],
  },
  faq: {
    title: "Questions fréquentes",
    subtitle: "Tout ce qu'il faut savoir avant d'adopter QR-Chief.",
    items: [
      {
        q: "Faut-il payer un abonnement ?",
        a: "Non. QR-Chief fonctionne avec une licence d'utilisation à vie, contre un paiement unique, sans abonnement mensuel ou annuel à renouveler.",
      },
      {
        q: "Quels contenus puis-je transformer en QR code ?",
        a: "Des liens web, du texte et des fichiers pris en charge comme les PDF et les images.",
      },
      {
        q: "Puis-je personnaliser le design de mes QR codes ?",
        a: "Oui : couleurs, formes des modules (carrées, arrondies ou courbes), formes des repères d'angle, fond transparent, niveau de correction d'erreurs et marges, selon les options disponibles. Un aperçu s'affiche avant le téléchargement.",
      },
      {
        q: "Dans quels formats puis-je télécharger mes codes ?",
        a: "En PNG pour le web et les publications, en JPG pour les images et supports numériques, et en SVG pour les designs vectoriels à redimensionner sans perte de qualité, idéal pour l'impression.",
      },
      {
        q: "Mes QR codes sont-ils sauvegardés ?",
        a: "Oui. Vos codes et vos fichiers sont liés à votre compte personnel : vous pouvez les retrouver, modifier leur design et les gérer. La durée de stockage des fichiers dépend des conditions du service de stockage et de la politique de conservation des données.",
      },
      {
        q: "Dans quelles langues est disponible l'application ?",
        a: "En arabe (avec écriture de droite à gauche), en français et en anglais, sur ordinateur comme sur mobile.",
      },
      {
        q: "Peut-on l'utiliser pour un menu de restaurant ?",
        a: "Oui. Les restaurants et cafés font partie des usages prévus : il suffit de créer un QR code vers votre menu numérique (lien ou PDF) et de l'imprimer sur vos tables ou supports.",
      },
      {
        q: "Combien coûte QR-Chief ?",
        a: "QR-Chief s'achète en une seule fois. Contactez-nous par le formulaire ou WhatsApp pour connaître le tarif de la licence à vie.",
      },
    ],
  },
  cta: {
    title: "Un seul code, de nombreuses possibilités",
    subtitle: "Achetez QR-Chief une fois et profitez de votre licence à vie, sans le poids des abonnements.",
    primary: "Obtenir QR-Chief",
    whatsapp: "WhatsApp",
    brochure: "Brochure PDF",
  },
  whatsappMessage: "Bonjour, je souhaite en savoir plus sur QR-Chief et sa licence à vie.",
};

export default content;
