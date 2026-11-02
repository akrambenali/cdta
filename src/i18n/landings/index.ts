import "server-only";
import type { Locale } from "@/i18n/config";
import type { ProductSlug } from "@/data/products-meta";
import type { LandingContent, LandingTheme } from "@/i18n/landing-type";

interface LandingDefinition {
  theme: LandingTheme;
  logo?: string;
  heroImage: string;
  content: Record<Locale, () => Promise<LandingContent>>;
}

const landings: Partial<Record<ProductSlug, LandingDefinition>> = {
  bouchli: {
    theme: { accent: "#d7141a", soft: "#fdecec", ink: "#141414" },
    logo: "/images/landing/bouchli/logo.png",
    heroImage: "/images/products/bouchli.jpg",
    content: {
      fr: () => import("./bouchli/fr").then((m) => m.default),
      ar: () => import("./bouchli/ar").then((m) => m.default),
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
