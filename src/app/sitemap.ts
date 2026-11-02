import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { productsMeta } from "@/data/products-meta";
import { SITE_URL } from "@/lib/site";

const staticPaths = ["", "/produits", "/consulting", "/a-propos", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...staticPaths, ...productsMeta.map((p) => `/produits/${p.slug}`)];

  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : path.startsWith("/produits/") ? 0.8 : 0.6,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}${path}`])),
      },
    })),
  );
}
