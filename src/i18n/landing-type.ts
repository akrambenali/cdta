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
  | "laptop";

export interface LandingTheme {
  accent: string;
  soft: string;
  ink: string;
}

export interface LandingSpotlight {
  image: string;
  imageAlt: string;
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
  hardware: {
    title: string;
    subtitle: string;
    items: { icon: LandingIcon; title: string; text: string }[];
  };
  faq: { title: string; subtitle: string; items: { q: string; a: string }[] };
  cta: { title: string; subtitle: string; primary: string; whatsapp: string; brochure: string };
  whatsappMessage: string;
}
