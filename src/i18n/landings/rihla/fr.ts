import type { LandingContent } from "@/i18n/landing-type";

const img = (name: string) => `/images/landing/rihla/${name}.jpg`;

const content: LandingContent = {
  seo: {
    title: "RIHLA — Plateforme de gestion pour agences de voyage, Hajj et Omra en Algérie",
    description:
      "Site web à votre marque, destinations et packages, inscriptions en ligne, gestion des voyageurs, guides, hôtels et chambres, portail guide et portail voyageur : RIHLA digitalise votre agence de voyage, Hajj et Omra.",
    keywords: [
      "logiciel agence de voyage",
      "logiciel agence de voyage Algérie",
      "logiciel Omra",
      "logiciel gestion Hajj et Omra",
      "gestion des pèlerins",
      "site web agence de voyage",
      "répartition des chambres hôtel groupe",
      "portail guide Omra",
      "RIHLA",
      "رحلة",
    ],
    alternateName: "رحلة",
  },
  breadcrumb: { home: "Accueil", products: "Produits", current: "RIHLA" },
  hero: {
    title: "La plateforme complète des agences de",
    highlight: "voyage, de tourisme, de Hajj et d'Omra",
    subtitle:
      "RIHLA aide l'agence à gérer ses voyages, organiser ses opérations, suivre ses voyageurs et pèlerins, faciliter le travail des guides et offrir une expérience numérique professionnelle à ses clients, dans un seul système connecté. Gestion plus intelligente, meilleurs voyages.",
    ctaPrimary: "Demander une démo",
    ctaWhatsapp: "Discuter sur WhatsApp",
    ctaBrochure: "Télécharger la brochure (PDF)",
    ctaDemo: "Voir la démo en ligne",
    badges: ["Une plateforme à l'identité de votre agence", "Portail guide sur mobile", "Ordinateur et téléphone"],
    imageAlt: "Avion, globe, valise, passeport et application RIHLA devant La Mecque et une skyline",
  },
  modules: {
    eyebrow: "Travel Agency Management Platform",
    title: "Tout le parcours du voyage, de l'inscription au retour",
    subtitle:
      "RIHLA réunit le site de l'agence, ses offres, ses voyageurs, ses guides et ses hôtels dans une expérience simple, moderne et adaptée à l'ordinateur comme au téléphone.",
    items: [
      { icon: "globe", title: "Site web professionnel", text: "Un site moderne et responsive aux couleurs de l'agence." },
      { icon: "map-pin", title: "Destinations et packages", text: "Destination → package → voyage, une structure claire." },
      { icon: "user-plus", title: "Inscription en ligne", text: "Le client s'inscrit directement depuis le site." },
      { icon: "users", title: "Voyageurs et pèlerins", text: "Demandes et données des voyageurs centralisées." },
      { icon: "compass", title: "Gestion des guides", text: "Guides affectés aux voyages, tâches et rapports." },
      { icon: "smartphone", title: "Portail guide", text: "Toutes les informations du voyage dans le téléphone du guide." },
      { icon: "bed", title: "Hôtels et chambres", text: "Répartition des voyageurs par hôtel, étage et chambre." },
      { icon: "book-open", title: "Guide et cartes", text: "Consignes du guide et carte de La Mecque et Médine." },
      { icon: "user", title: "Portail voyageur", text: "Programme, hôtel, chambre et rendez-vous du pèlerin." },
      { icon: "star", title: "Avis et remarques", text: "Les retours des voyageurs pour améliorer les prochains départs." },
      { icon: "chart", title: "Rapports et suivi", text: "Tableau de bord et statistiques des voyages." },
      { icon: "palette", title: "À votre marque", text: "Nom, logo, couleurs et contenus de l'agence." },
    ],
  },
  problem: {
    title: "Des papiers et de WhatsApp à un système connecté",
    subtitle:
      "RIHLA aide l'agence à passer d'outils éparpillés à un écosystème numérique unique, où le site, les voyages, les clients, les voyageurs, les guides, les chambres et les rapports sont reliés.",
    before: {
      title: "Sans RIHLA",
      items: [
        "Inscriptions sur papier et dans des fichiers Excel",
        "Informations du voyage envoyées une par une sur WhatsApp",
        "Fichiers éparpillés entre plusieurs personnes",
        "Répartition des chambres faite à la main",
        "Guides sans accès simple aux informations du groupe",
      ],
    },
    after: {
      title: "Avec RIHLA",
      items: [
        "Inscriptions reçues directement depuis le site de l'agence",
        "Voyageurs, groupes et voyages réunis dans un même système",
        "Chambres, hôtels et occupants organisés et suivis",
        "Un portail mobile pour le guide pendant le voyage",
        "Rapports pour améliorer les prochains voyages",
      ],
    },
  },
  spotlights: [
    {
      image: img("site"),
      imageAlt: "Site web d'agence de voyage créé avec RIHLA, sur ordinateur portable et téléphone",
      eyebrow: "01 — Site web professionnel",
      title: "Un site moderne qui présente vos voyages",
      text: "L'agence dispose d'un site moderne et responsive qui présente ses services et ses programmes de façon professionnelle. Le site est relié au système de gestion : voyages, offres et informations s'affichent selon les données de l'agence.",
      points: [
        "Accueil, destinations, services de l'agence, à propos",
        "Packages, voyages, Hajj et Omra",
        "Hôtels, visas et coordonnées",
        "Formulaire d'inscription aux voyages",
      ],
    },
    {
      image: img("destinations"),
      imageAlt: "Gestion des destinations RIHLA sur ordinateur et liste des packages sur téléphone",
      eyebrow: "02 — Destinations, packages et voyages",
      title: "Des offres organisées selon une structure claire",
      text: "L'agence organise ses offres selon une hiérarchie simple, pour gérer son catalogue de façon plus professionnelle et plus lisible.",
      points: [
        "Destinations, packages et voyages datés",
        "Prix, visuels et descriptions de chaque offre",
        "Offres affichées automatiquement sur le site",
      ],
      stepsTitle: "Exemple",
      steps: ["Destination : Turquie", "Package : Turquie VIP", "Voyage : Turquie — octobre 2026"],
    },
    {
      image: img("inscription"),
      imageAlt: "Formulaire d'inscription RIHLA et confirmation de réception de la demande",
      eyebrow: "03 — Inscription en ligne",
      title: "Le client s'inscrit, l'agence traite la demande",
      text: "Le client peut s'inscrire à un voyage directement depuis le site. Ses informations arrivent dans le système pour que l'équipe de l'agence les vérifie, les suive et organise les données des voyageurs.",
      points: [
        "Nom, e-mail, téléphone, destination, voyage et nombre de voyageurs",
        "Confirmation de réception affichée au client",
        "Demandes centralisées pour l'équipe de l'agence",
      ],
    },
    {
      image: img("guides"),
      imageAlt: "Écran de gestion des guides RIHLA sur ordinateur et téléphone, devant La Mecque",
      eyebrow: "04 — Gestion des guides",
      title: "Des guides affectés, suivis et équipés",
      text: "RIHLA offre au guide un environnement de travail dédié, qui lui donne accès aux informations et aux tâches liées au voyage.",
      points: [
        "Ajout des guides",
        "Affectation aux voyages",
        "Suivi des tâches et des rapports",
        "Organisation des opérations sur le terrain",
      ],
    },
    {
      image: img("portail-guide"),
      imageAlt: "Portail guide RIHLA sur trois téléphones : liste des voyageurs, menu du voyage et informations",
      imageAspect: "square",
      eyebrow: "05 — Portail guide",
      title: "Le voyage dans la poche du guide",
      text: "Un portail pratique, conçu pour être utilisé sur téléphone pendant le voyage : l'information dont le guide a besoin est devant lui au moment où il en a besoin.",
      points: [
        "Liste des voyageurs et pèlerins, informations du voyage",
        "Tâches, hôtels et chambres",
        "Répartition des voyageurs",
        "Notes et alertes, rapports",
        "Guide du guide et cartes",
      ],
    },
    {
      image: img("chambres"),
      imageAlt: "Gestion des chambres et des voyageurs RIHLA : numéro, hôtel, étage, type, capacité et statut",
      eyebrow: "06 — Chambres et voyageurs",
      title: "Une répartition des chambres enfin organisée",
      text: "Surtout pour les voyages de Hajj, d'Omra et les voyages de groupe, le guide peut organiser précisément l'hébergement de chaque voyageur.",
      points: [
        "Numéros de chambre, hôtel et étage",
        "Type et capacité de chaque chambre",
        "Occupants, statut de la chambre et remarques",
        "Problèmes à suivre signalés",
      ],
    },
    {
      image: img("carte"),
      imageAlt: "Guide du guide et carte de La Mecque dans l'application RIHLA",
      imageAspect: "square",
      eyebrow: "07 — Guide et cartes",
      title: "Des outils pour le travail sur le terrain",
      text: "La plateforme comprend des outils d'aide pour le guide pendant le voyage, qui peuvent être enrichis selon les besoins de l'agence.",
      points: [
        "Guide du guide : consignes et procédures courtes avant, pendant et à l'arrivée",
        "Consignes d'hébergement, de transport, urgences et contacts",
        "Carte de La Mecque et de Médine avec les lieux importants du voyage",
      ],
    },
    {
      image: img("portail-voyageur"),
      imageAlt: "Portail voyageur RIHLA sur téléphone : programme, hôtel, chambre, guide et rendez-vous",
      imageAspect: "square",
      eyebrow: "08 — Expérience voyageur",
      title: "Un portail pour le voyageur et le pèlerin",
      text: "La plateforme ne s'arrête pas à l'équipe de l'agence : un portail dédié peut être proposé au voyageur ou au pèlerin pour accéder aux informations de son voyage.",
      points: [
        "Programme du voyage, hôtel et chambre",
        "Informations du guide et rendez-vous",
        "Invocations, consignes et informations importantes",
        "Avis et remarques",
      ],
      note: "Cette expérience pourra évoluer à l'avenir vers une application mobile indépendante.",
    },
  ],
  workflow: {
    title: "D'un site web à un système opérationnel complet",
    subtitle:
      "RIHLA ne se limite pas à un beau site : il relie le parcours du client et le travail de l'agence dans un même circuit numérique.",
    steps: [
      "Site web",
      "Destinations et packages",
      "Voyages et offres",
      "Inscription",
      "Demandes et voyageurs",
      "Affectation du guide",
      "Portail guide",
      "Groupe, chambres et tâches",
      "Portail voyageur",
      "Avis",
      "Rapports",
    ],
  },
  cards: {
    title: "Une plateforme qui porte entièrement l'identité de votre agence",
    subtitle:
      "Pas une agence, pas une identité unique : une plateforme construite pour votre agence. RIHLA travaille en coulisses, votre agence apparaît en façade.",
    items: [
      { icon: "palette", title: "Votre identité visuelle", text: "Nom de l'agence, logo, couleurs, thème et typographies." },
      { icon: "file-text", title: "Vos contenus", text: "Titres, textes, visuels, services et données de l'agence." },
      { icon: "map-pin", title: "Vos offres", text: "Destinations, packages, voyages, hôtels et programmes." },
      { icon: "building", title: "Votre version dédiée", text: "Une version numérique indépendante, pas un compte générique partagé." },
    ],
  },
  audiences: {
    title: "Une plateforme qui grandit avec votre agence",
    subtitle: "RIHLA est conçu pour évoluer. Des modules et services pourront être ajoutés selon les besoins de l'agence.",
    items: [
      { icon: "qr-code", title: "Système QR" },
      { icon: "users", title: "Gestion des employés" },
      { icon: "bus", title: "Transport et bus" },
      { icon: "smartphone", title: "Application chauffeur" },
      { icon: "plane", title: "Application pèlerin" },
      { icon: "bell", title: "Notifications" },
      { icon: "credit-card", title: "Gestion des paiements" },
      { icon: "chart", title: "Rapports et analyses avancés" },
      { icon: "award", title: "Programmes de fidélité" },
      { icon: "link", title: "Intégration avec des services externes" },
      { icon: "sparkles", title: "Outils d'intelligence artificielle" },
      { icon: "rocket", title: "Services numériques sur mesure" },
    ],
  },
  faq: {
    title: "Questions fréquentes",
    subtitle: "Tout ce qu'il faut savoir avant de digitaliser votre agence avec RIHLA.",
    items: [
      {
        q: "À qui s'adresse RIHLA ?",
        a: "Aux agences de tourisme et de voyage, et en particulier aux agences de Hajj et d'Omra qui gèrent des groupes, des hôtels, des chambres et des guides.",
      },
      {
        q: "Mon agence aura-t-elle son propre site et sa propre marque ?",
        a: "Oui. RIHLA n'impose ni son nom, ni ses couleurs, ni un design unique : chaque agence reçoit une version numérique indépendante, à son nom, avec son logo, ses couleurs, ses contenus et ses offres. Le client final traite avec votre agence ; RIHLA est la technologie derrière.",
      },
      {
        q: "Est-ce un simple compte sur une plateforme partagée ?",
        a: "Non. Nous ne vendons pas « un compte dans RIHLA » : nous fournissons l'infrastructure technique et le système de base, puis nous le personnalisons selon le fonctionnement et l'identité de votre agence. Vous n'avez pas à construire un système de zéro ni à assembler plusieurs outils séparés.",
      },
      {
        q: "Comment mes clients s'inscrivent-ils ?",
        a: "Directement depuis le site de l'agence, via un formulaire d'inscription au voyage. Les informations arrivent dans le système, où votre équipe peut vérifier la demande, la suivre et organiser les données des voyageurs.",
      },
      {
        q: "Que peut faire le guide pendant le voyage ?",
        a: "Depuis son téléphone, il accède à la liste des voyageurs, aux informations du voyage, aux tâches, aux hôtels et chambres, à la répartition des voyageurs, aux notes et alertes, aux rapports, au guide du guide et aux cartes.",
      },
      {
        q: "RIHLA gère-t-il la répartition des chambres ?",
        a: "Oui, en particulier pour le Hajj, l'Omra et les voyages de groupe : numéro de chambre, hôtel, étage, type, capacité, occupants, statut, remarques et problèmes à suivre.",
      },
      {
        q: "Peut-on voir une démonstration ?",
        a: "Oui. Une démo en ligne est accessible depuis cette page, et nous pouvons vous présenter la plateforme adaptée à votre agence lors d'un rendez-vous.",
      },
      {
        q: "Combien coûte RIHLA ?",
        a: "Le tarif est établi sur devis, selon les modules souhaités et le niveau de personnalisation. Contactez-nous pour en discuter.",
      },
    ],
  },
  cta: {
    title: "Vous voulez une agence plus digitale ?",
    subtitle:
      "Une plateforme dédiée, une identité propre, une expérience numérique complète. Une plateforme, l'identité de votre agence, votre propre système.",
    primary: "Demander une démo",
    whatsapp: "WhatsApp",
    brochure: "Brochure PDF",
  },
  whatsappMessage: "Bonjour, je souhaite une démonstration de la plateforme RIHLA pour mon agence de voyage.",
};

export default content;
