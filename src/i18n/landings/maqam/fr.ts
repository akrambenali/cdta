import type { LandingContent } from "@/i18n/landing-type";

const img = (name: string) => `/images/landing/maqam/${name}.jpg`;

const content: LandingContent = {
  seo: {
    title: "MAQAM — Logiciel de gestion hôtelière en Algérie (PMS, réservations, chambres)",
    description:
      "Réservations, calendrier, Room Board, check-in et check-out, clients, paiements, factures, housekeeping, maintenance, rapports et site web de l'hôtel : MAQAM est la plateforme de gestion hôtelière qui organise les détails pour que l'hospitalité reste.",
    keywords: [
      "logiciel de gestion hôtelière",
      "logiciel hôtel Algérie",
      "PMS hôtel",
      "logiciel réservation hôtel",
      "gestion des chambres",
      "check-in check-out",
      "housekeeping",
      "logiciel réception hôtel",
      "MAQAM",
      "مقام",
    ],
    alternateName: "مقام",
  },
  breadcrumb: { home: "Accueil", products: "Produits", current: "MAQAM" },
  hero: {
    title: "La plateforme intelligente de gestion hôtelière,",
    highlight: "pour sublimer l'expérience d'hospitalité",
    subtitle:
      "MAQAM simplifie les opérations quotidiennes de l'hôtel : chambres, réservations et clients, arrivées et départs, paiements et factures, ménage, maintenance et rapports, réunis dans un seul système clair, moderne et simple à utiliser. Nous organisons les détails, pour que l'hospitalité reste.",
    ctaPrimary: "Demander une démo",
    ctaWhatsapp: "Discuter sur WhatsApp",
    ctaBrochure: "Télécharger la brochure (PDF)",
    ctaDemo: "Voir la démo en ligne",
    badges: ["Personnalisable à l'identité de chaque hôtel", "Plateforme cloud", "Ordinateur, tablette et mobile"],
    imageAlt: "Tableau de bord MAQAM sur ordinateur, tablette et téléphone, sur le comptoir d'une réception d'hôtel",
  },
  modules: {
    eyebrow: "Hotel Management Platform",
    title: "Gérer l'hôtel depuis un seul endroit",
    subtitle:
      "MAQAM n'est pas qu'une plateforme de réservation : c'est un système opérationnel complet, qui réduit les tâches répétitives, organise l'information et donne une vision claire de l'état de l'hôtel à chaque instant.",
    items: [
      { icon: "dashboard", title: "Tableau de bord", text: "L'état de l'hôtel en un coup d'œil." },
      { icon: "calendar-x", title: "Calendrier des réservations", text: "Vue jour, semaine et mois." },
      { icon: "grid", title: "Room Board", text: "Toutes les chambres et leur statut, en couleurs." },
      { icon: "concierge", title: "Réservations", text: "Client, chambre, dates, prix et statut liés." },
      { icon: "log-in", title: "Check-in", text: "Arrivée confirmée, statuts mis à jour." },
      { icon: "log-out", title: "Check-out", text: "Compte final, paiement et chambre à nettoyer." },
      { icon: "users", title: "Gestion des clients", text: "Un dossier complet pour chaque client." },
      { icon: "credit-card", title: "Paiements et factures", text: "Encaissements, reste à payer, reçus." },
      { icon: "sparkles", title: "Housekeeping", text: "Chambres à nettoyer, puis disponibles." },
      { icon: "wrench", title: "Maintenance", text: "Pannes suivies jusqu'à leur résolution." },
      { icon: "chart", title: "Rapports et export", text: "Occupation, revenus, export Excel et PDF." },
      { icon: "globe", title: "Site web de l'hôtel", text: "Vitrine en ligne et demandes de réservation." },
    ],
  },
  problem: {
    title: "On organise les détails, l'hospitalité reste",
    subtitle:
      "Chaque jour, un hôtel gère des dizaines de détails : une nouvelle réservation, un client qui arrive, une chambre à nettoyer, un paiement à enregistrer, une facture à émettre, une chambre à réparer, un client qui part. Chacun semble simple, mais leur accumulation complique la gestion.",
    before: {
      title: "Sans système unique",
      items: [
        "Réservations, chambres et paiements suivis dans des outils séparés",
        "Statut des chambres connu en appelant l'équipe de ménage",
        "Comptes clients calculés à la main au moment du départ",
        "Pannes signalées oralement, sans suivi",
        "Direction sans vision claire de l'occupation et des revenus",
      ],
    },
    after: {
      title: "Avec MAQAM",
      items: [
        "Le réceptionniste connaît l'état de chaque chambre",
        "La direction voit l'état de l'hôtel en temps réel",
        "L'équipe de ménage sait ce qui l'attend",
        "La comptabilité suit les paiements et le reste à payer",
        "Des données organisées pour de meilleures décisions",
      ],
    },
  },
  spotlights: [
    {
      image: img("dashboard"),
      imageAlt: "Tableau de bord MAQAM sur écran : chambres, arrivées, départs, activité du jour et tâches",
      eyebrow: "01 — Tableau de bord intelligent",
      title: "Les informations essentielles, dès le premier regard",
      text: "Au lieu de chercher dans plusieurs pages, l'employé obtient d'un coup d'œil une image rapide de l'état de l'hôtel.",
      points: [
        "Chambres occupées et disponibles, statut des chambres",
        "Arrivées et départs du jour",
        "Réservations, paiements et montants restants",
        "Tâches importantes et activité du jour",
      ],
    },
    {
      image: img("calendrier"),
      imageAlt: "Calendrier des réservations MAQAM par chambre sur ordinateur portable",
      eyebrow: "02 — Calendrier des réservations",
      title: "Toutes les réservations sur une seule vue",
      text: "Le calendrier offre une représentation claire des réservations, par jour, par semaine ou par mois, avec un accès direct au détail de chaque réservation.",
      points: [
        "Quand commence et quand se termine chaque séjour",
        "Quelles chambres sont réservées, lesquelles sont libres",
        "Les conflits éventuels entre réservations",
        "Les prochaines réservations à préparer",
      ],
    },
    {
      image: img("room-board"),
      imageAlt: "Room Board MAQAM : chambres par étage avec statuts disponible, réservée, occupée, nettoyage et maintenance",
      eyebrow: "03 — Room Board",
      title: "L'état de l'hôtel en quelques secondes",
      text: "L'une des interfaces clés de MAQAM : toutes les chambres de l'hôtel, étage par étage, avec leur statut affiché de façon visuelle. Le réceptionniste sait immédiatement quelle chambre attribuer.",
      points: [
        "Disponible, réservée, occupée",
        "En cours de nettoyage, en maintenance",
        "Nom du client affiché sur la chambre occupée ou réservée",
        "Filtres par étage et par type de chambre",
      ],
    },
    {
      image: img("reservation"),
      imageAlt: "Détail d'une réservation MAQAM : client, chambre, dates, total, remise, payé, reste et services",
      eyebrow: "04 — Gestion des réservations",
      title: "Chaque réservation reliée au client, à la chambre et aux paiements",
      text: "MAQAM gère les réservations officielles de l'hôtel avec toutes leurs informations : client, chambre, dates d'arrivée et de départ, nombre de personnes, prix, remises, montant payé et restant, services supplémentaires et remarques.",
      points: [
        "Statuts principaux : Confirmed → Checked-in → Checked-out",
        "Gestion des annulations (Cancelled) et des no-show",
        "Services supplémentaires ajoutés au séjour",
        "Remarques et demandes particulières du client",
      ],
      note: "Les demandes envoyées depuis le site ne deviennent pas automatiquement des fiches clients : le client entre dans la base de l'hôtel seulement quand la réservation est confirmée par le personnel.",
    },
    {
      image: img("checkin"),
      imageAlt: "Écran de check-in MAQAM avec le bouton Confirm Check-in",
      imageAspect: "square",
      eyebrow: "05 — Check-in et check-out",
      title: "Un cycle de séjour simplifié",
      text: "À l'arrivée, l'employé vérifie les informations du client, la réservation, la chambre, les dates et le montant dû, puis confirme le check-in : la réservation et la chambre sont mises à jour automatiquement. Au départ, le système affiche le compte final.",
      points: [
        "Compte final : séjour, services, remises, total, payé et reste",
        "Encaissement du reste avant de finaliser le départ",
        "Réservation passée en « Checked-out » une fois le départ terminé",
        "Chambre passée automatiquement en « Cleaning » pour le client suivant",
      ],
      stepsTitle: "Le cycle du séjour",
      steps: ["Réservation confirmée", "Check-in", "Séjour", "Check-out", "Nettoyage", "Chambre disponible"],
    },
    {
      image: img("clients"),
      imageAlt: "Fiche client MAQAM : identité, nationalité, contacts, réservations et séjours",
      eyebrow: "06 — Gestion des clients",
      title: "Un dossier organisé pour chaque client",
      text: "Le système crée et gère les fiches des clients réels de l'hôtel, pour retrouver facilement leur historique en cas de besoin.",
      points: [
        "Nom complet, nationalité, contacts et pièce d'identité",
        "Réservations et historique des séjours",
        "Paiements et montants restants",
        "Remarques sur le client",
      ],
    },
    {
      image: img("factures"),
      imageAlt: "Facture MAQAM détaillée sur ordinateur portable : nuits, services, remise, total, payé et reste",
      eyebrow: "07 — Paiements et factures",
      title: "Le suivi financier du séjour, en toute simplicité",
      text: "MAQAM propose des outils simples et pratiques pour suivre la partie financière liée aux séjours, sans transformer le système en logiciel de comptabilité complexe.",
      points: [
        "Enregistrement des paiements et des modes de paiement",
        "Suivi des montants restants",
        "Factures et reçus de paiement",
        "Services supplémentaires, remises et total du séjour",
        "Documents générés en PDF à la demande : factures, reçus, fiches d'enregistrement, rapports",
      ],
    },
    {
      image: img("maintenance"),
      imageAlt: "Liste des demandes de maintenance MAQAM avec chambre, problème, priorité et statut",
      eyebrow: "08 — Housekeeping et maintenance",
      title: "Des chambres prêtes au bon moment",
      text: "Après chaque départ, la chambre passe en nettoyage puis redevient disponible : la réception sait quelles chambres sont prêtes sans appels incessants. Les problèmes des chambres et des installations sont enregistrés et suivis jusqu'à leur résolution.",
      points: [
        "Housekeeping : Occupied → Cleaning → Available",
        "Maintenance : climatisation, électricité, plomberie, appareils, mobilier, installations",
        "Suivi Open → In Progress → Resolved",
        "Remarques, coût et responsable de l'intervention",
      ],
    },
    {
      image: img("site"),
      imageAlt: "Site web d'hôtel créé avec MAQAM sur écran, tablette et téléphone",
      eyebrow: "09 — Site web de l'hôtel",
      title: "Une vitrine en ligne et des demandes de réservation",
      text: "La plateforme comprend un site web professionnel qui représente l'hôtel auprès des visiteurs : chambres, prix, services, installations, galerie, photos, coordonnées et localisation, sur ordinateur, tablette et téléphone.",
      points: [
        "Demande de réservation sans création de compte",
        "Nom, téléphone, e-mail, dates, nombre de personnes, type et nombre de chambres",
        "Demande transmise au Google Sheets de l'hôtel",
        "L'employé rappelle le client, confirme, puis enregistre la réservation dans MAQAM",
      ],
      note: "Le site reçoit les demandes, l'hôtel ne conserve que les données officielles : la base reste légère et simple.",
    },
  ],
  workflow: {
    title: "Du site web au rapport, un seul circuit",
    subtitle: "Chaque étape alimente la suivante, sans ressaisie ni outils séparés.",
    steps: [
      "Demande en ligne",
      "Confirmation",
      "Réservation",
      "Check-in",
      "Services",
      "Paiements",
      "Check-out",
      "Housekeeping",
      "Rapports",
    ],
  },
  cards: {
    title: "Une identité propre à chaque hôtel",
    subtitle:
      "MAQAM n'impose pas un modèle unique à tous les hôtels : chaque établissement obtient sa propre version du système, à son image. MAQAM est le moteur, votre identité est la façade.",
    items: [
      { icon: "palette", title: "Identité visuelle", text: "Nom de l'hôtel, logo, couleurs et interface du système." },
      { icon: "file-text", title: "Contenus du site", text: "Photos, informations, services et coordonnées de l'hôtel." },
      { icon: "shield-check", title: "Rôles et droits", text: "Directeur, administration, réception, comptabilité, housekeeping, maintenance." },
      { icon: "download", title: "Export à la demande", text: "Clients, réservations, chambres, paiements, factures et rapports en Excel ou PDF." },
    ],
  },
  audiences: {
    title: "MAQAM aujourd'hui… et demain",
    subtitle:
      "MAQAM est conçu pour évoluer sans reconstruire le système de zéro. Parmi les évolutions possibles :",
    items: [
      { icon: "smartphone", title: "Applications mobiles", text: "Applications natives Android et iOS." },
      { icon: "laptop", title: "Application Windows", text: "Version bureau pour la réception et l'administration." },
      { icon: "wifi-off", title: "Mode hors ligne", text: "Travail temporaire sans connexion, puis synchronisation." },
      { icon: "user", title: "Portail client", text: "Suivi des réservations, du séjour et des services." },
      { icon: "bell", title: "Notifications intelligentes", text: "Arrivées, départs, paiements et tâches importantes." },
      { icon: "utensils", title: "Restaurant et services", text: "Modules plus poussés, reliés au compte du client." },
      { icon: "chart", title: "Analyses avancées", text: "Occupation, revenus et performance de l'hôtel." },
      { icon: "globe", title: "Plateformes de réservation", text: "Intégration future avec des channel managers." },
    ],
  },
  faq: {
    title: "Questions fréquentes",
    subtitle: "Tout ce qu'il faut savoir avant d'équiper votre hôtel avec MAQAM.",
    items: [
      {
        q: "MAQAM est-il seulement un logiciel de réservation ?",
        a: "Non. C'est un système opérationnel complet pour l'hôtel : réservations, calendrier, Room Board, check-in et check-out, clients, paiements, factures, services, housekeeping, maintenance, rapports, export et site web.",
      },
      {
        q: "Comment fonctionnent les demandes de réservation du site ?",
        a: "Le visiteur envoie une demande sans créer de compte. Elle est transmise au Google Sheets de l'hôtel ; un employé contacte le client pour confirmer, puis enregistre la réservation et le client dans MAQAM. Seules les données officielles sont conservées.",
      },
      {
        q: "Peut-on suivre l'état des chambres en temps réel ?",
        a: "Oui. Le Room Board affiche toutes les chambres avec leur statut : disponible, réservée, occupée, en nettoyage ou en maintenance. Après un check-out, la chambre passe automatiquement en nettoyage.",
      },
      {
        q: "Peut-on imprimer des factures et des reçus ?",
        a: "Oui. Factures, reçus de paiement, fiches d'enregistrement et rapports sont générés en PDF à la demande, à partir des données du système, sans stocker inutilement des fichiers.",
      },
      {
        q: "Peut-on exporter les données ?",
        a: "Oui. La direction peut exporter clients, réservations, chambres, paiements, factures et rapports aux formats Excel et PDF.",
      },
      {
        q: "Chaque employé a-t-il ses propres droits ?",
        a: "Oui. Les droits varient selon le rôle (directeur, administration, réception, comptabilité, housekeeping, maintenance), et les opérations importantes sont enregistrées : qui a fait quoi, et quand.",
      },
      {
        q: "MAQAM peut-il porter l'identité de notre hôtel ?",
        a: "Oui. Nom, logo, couleurs, interface, photos, contenus du site et coordonnées sont adaptés à votre hôtel. Une offre en marque blanche plus complète pourra être proposée à l'avenir.",
      },
      {
        q: "Combien coûte MAQAM ?",
        a: "Le tarif est établi sur devis, selon la taille de l'hôtel, les modules souhaités et le niveau de personnalisation. Contactez-nous pour une démonstration.",
      },
    ],
  },
  cta: {
    title: "Une gestion plus intelligente, une hospitalité meilleure",
    subtitle:
      "Pour chaque voyageur un lieu, et pour chaque lieu une expérience. Parlons de votre hôtel et voyons comment MAQAM peut s'adapter à votre organisation.",
    primary: "Demander une démo",
    whatsapp: "WhatsApp",
    brochure: "Brochure PDF",
  },
  whatsappMessage: "Bonjour, je souhaite une démonstration de la plateforme MAQAM pour mon hôtel.",
};

export default content;
