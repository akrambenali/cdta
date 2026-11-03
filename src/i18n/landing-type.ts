export type LandingIcon =
  | "monitor"
  | "tag"
  | "package"
  | "truck"
  | "file-text"
  | "banknote"
  | "chart"
  | "scale"
  | "scan-barcode"
  | "database-backup"
  | "users"
  | "undo"
  | "wifi-off"
  | "printer"
  | "shield-check"
  | "languages"
  | "laptop"
  | "shirt"
  | "smartphone"
  | "shopping-cart"
  | "receipt"
  | "lock"
  | "refresh"
  | "map-pin"
  | "link"
  | "type"
  | "eye"
  | "palette"
  | "shapes"
  | "scan"
  | "grid"
  | "image"
  | "download"
  | "save"
  | "pencil"
  | "folder"
  | "globe"
  | "infinity"
  | "calendar-x"
  | "qr-code"
  | "cloud-upload"
  | "utensils"
  | "building"
  | "briefcase"
  | "plane"
  | "megaphone"
  | "user"
  | "pen-tool"
  | "store"
  | "search"
  | "credit-card"
  | "workflow"
  | "rocket"
  | "warehouse"
  | "dashboard"
  | "school"
  | "graduation-cap"
  | "presentation"
  | "clipboard-check"
  | "award"
  | "book-open"
  | "settings"
  | "bell"
  | "baby"
  | "bed"
  | "headset"
  | "bus"
  | "star"
  | "sparkles"
  | "user-plus"
  | "compass";

export interface LandingTheme {
  accent: string;
  soft: string;
  ink: string;
}

export interface LandingSpotlight {
  image: string;
  imageAlt: string;
  /** Default is 4:3; square suits phone screenshots. */
  imageAspect?: "square";
  eyebrow: string;
  title: string;
  text: string;
  points: string[];
  stepsTitle?: string;
  steps?: string[];
  note?: string;
}

export interface LandingContent {
  seo: {
    title: string;
    description: string;
    keywords: string[];
    alternateName?: string;
  };
  breadcrumb: { home: string; products: string; current: string };
  hero: {
    title: string;
    highlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaWhatsapp: string;
    ctaBrochure: string;
    ctaDemo?: string;
    badges: string[];
    imageAlt: string;
  };
  modules: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { icon: LandingIcon; title: string; text: string }[];
  };
  problem: {
    title: string;
    subtitle: string;
    before: { title: string; items: string[] };
    after: { title: string; items: string[] };
  };
  spotlights: LandingSpotlight[];
  workflow: { title: string; subtitle: string; steps: string[] };
  cards?: {
    title: string;
    subtitle: string;
    items: { icon: LandingIcon; title: string; text: string }[];
  };
  audiences?: {
    title: string;
    subtitle: string;
    items: { image?: string; icon?: LandingIcon; title: string; text?: string }[];
  };
  faq: { title: string; subtitle: string; items: { q: string; a: string }[] };
  cta: { title: string; subtitle: string; primary: string; whatsapp: string; brochure: string };
  whatsappMessage: string;
}
