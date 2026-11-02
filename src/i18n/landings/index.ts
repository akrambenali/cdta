import "server-only";
import type { Locale } from "@/i18n/config";
import type { ProductSlug } from "@/data/products-meta";
import type { LandingContent, LandingTheme } from "@/i18n/landing-type";

interface LandingDefinition {
  theme: LandingTheme;
  logo?: { src: string; width: number; height: number };
  heroImage: { src: string; width: number; height: number };
  content: Record<Locale, () => Promise<LandingContent>>;
}

const landings: Partial<Record<ProductSlug, LandingDefinition>> = {
  bouchli: {
    theme: { accent: "#d7141a", soft: "#fdecec", ink: "#141414" },
    logo: { src: "/images/landing/bouchli/logo.png", width: 720, height: 162 },
    heroImage: { src: "/images/products/bouchli.jpg", width: 1400, height: 1170 },
    content: {
      fr: () => import("./bouchli/fr").then((m) => m.default),
      ar: () => import("./bouchli/ar").then((m) => m.default),
    },
  },
  keswa: {
    theme: { accent: "#0f8f86", soft: "#e7f5f4", ink: "#0d2747" },
    logo: { src: "/images/landing/keswa/logo.png", width: 720, height: 225 },
    heroImage: { src: "/images/landing/keswa/hero.jpg", width: 1400, height: 1430 },
    content: {
      fr: () => import("./keswa/fr").then((m) => m.default),
      ar: () => import("./keswa/ar").then((m) => m.default),
    },
  },
  "qr-chief": {
    theme: { accent: "#1d4ed8", soft: "#eaf0ff", ink: "#0b1a4a" },
    logo: { src: "/images/landing/qr-chief/logo.png", width: 720, height: 209 },
    heroImage: { src: "/images/landing/qr-chief/hero.jpg", width: 1181, height: 1377 },
    content: {
      fr: () => import("./qr-chief/fr").then((m) => m.default),
      ar: () => import("./qr-chief/ar").then((m) => m.default),
    },
  },
  sdp: {
    theme: { accent: "#cc6200", soft: "#fff3e6", ink: "#0b2152" },
    logo: { src: "/images/landing/sdp/logo.png", width: 720, height: 244 },
    heroImage: { src: "/images/landing/sdp/hero.jpg", width: 1400, height: 778 },
    content: {
      fr: () => import("./sdp/fr").then((m) => m.default),
      ar: () => import("./sdp/ar").then((m) => m.default),
    },
  },
  "tapsit-school": {
    theme: { accent: "#0b7d74", soft: "#e6f6f4", ink: "#0c2461" },
    logo: { src: "/images/landing/tapsit-school/logo.png", width: 720, height: 208 },
    heroImage: { src: "/images/landing/tapsit-school/hero.jpg", width: 949, height: 938 },
    content: {
      fr: () => import("./tapsit-school/fr").then((m) => m.default),
      ar: () => import("./tapsit-school/ar").then((m) => m.default),
    },
  },
};

export type Landing = Omit<LandingDefinition, "content"> & { content: LandingContent };

export async function getLanding(slug: ProductSlug, locale: Locale): Promise<Landing | null> {
  const definition = landings[slug];
  if (!definition) return null;
  const { content, ...rest } = definition;
  return { ...rest, content: await content[locale]() };
}

export function getLandingTheme(slug: ProductSlug): LandingTheme | null {
  return landings[slug]?.theme ?? null;
}
