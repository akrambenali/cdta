import type { ProductSlug } from "@/data/products-meta";

export interface ProductContent {
  title: string;
  tagline: string;
  shortDescription: string;
  features: string[];
  priceLabel: string;
  priceNote: string;
  detail: {
    intro: string;
    benefits: { title: string; description: string }[];
    forWho: string;
    includes: string[];
  };
}

export interface CardLinkContent {
  title: string;
  tagline: string;
  shortDescription: string;
  features: string[];
  priceLabel: string;
  priceNote: string;
  ctaLabel: string;
}

export interface Dictionary {
  meta: {
    siteName: string;
    tagline: string;
    defaultTitle: string;
    defaultDescription: string;
  };
  nav: {
    home: string;
    products: string;
    consulting: string;
    about: string;
    contact: string;
    quoteCta: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
    dashboard: {
      metricGrowthLabel: string;
      metricOrdersLabel: string;
      stockSyncLabel: string;
      stockSyncValue: string;
    };
  };
  whyUs: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { icon: "shield-check" | "clock" | "wallet" | "users"; title: string; description: string }[];
  };
  productsPreview: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewAll: string;
  };
  ctaBand: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  productsPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  products: Record<ProductSlug, ProductContent>;
  consultingCard: CardLinkContent;
  productDetail: {
    backToCatalog: string;
    featuresTitle: string;
    benefitsTitle: string;
    forWhoTitle: string;
    includesTitle: string;
    priceTitle: string;
    ctaDemo: string;
    ctaQuote: string;
    otherProductsTitle: string;
  };
  consultingPage: {
    hero: { eyebrow: string; title: string; subtitle: string; ctaPrimary: string; ctaSecondary: string };
    approachTitle: string;
    approachSubtitle: string;
    steps: { number: string; title: string; description: string }[];
    forWho: {
      title: string;
      description: string;
      targets: string[];
    };
    formats: {
      title: string;
      subtitle: string;
      options: { title: string; description: string; bullet: string }[];
    };
    cta: { title: string; subtitle: string; ctaPrimary: string };
  };
  aboutPage: {
    hero: { eyebrow: string; title: string; subtitle: string };
    bio: string[];
    experienceTitle: string;
    experienceItems: { title: string; description: string }[];
    skillsTitle: string;
    skills: string[];
    commitmentTitle: string;
    commitments: string[];
    cta: { title: string; subtitle: string; ctaPrimary: string };
  };
  contactPage: {
    hero: { eyebrow: string; title: string; subtitle: string };
    form: {
      name: string;
      namePlaceholder: string;
      company: string;
      companyPlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      product: string;
      productPlaceholder: string;
      productOptions: { value: string; label: string }[];
      message: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
      successTitle: string;
      successMessage: string;
      errorTitle: string;
      errorMessage: string;
      requiredNotice: string;
    };
    info: {
      title: string;
      description: string;
      emailLabel: string;
      phoneLabel: string;
      whatsappLabel: string;
      locationLabel: string;
      location: string;
      paymentNote: string;
    };
  };
  footer: {
    description: string;
    quickLinksTitle: string;
    productsTitle: string;
    contactTitle: string;
    rights: string;
    paymentNote: string;
  };
  notFound: {
    title: string;
    description: string;
    cta: string;
  };
}
