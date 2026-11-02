import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { localeAlternates, ogLocale } from "@/lib/site";

const SITE_NAME = "CDTA";

/**
 * Child-route `openGraph`/`twitter` objects replace the parent's instead of merging,
 * so every page builds the full set here.
 */
export function pageMetadata({
  locale,
  path,
  title,
  description,
  keywords,
  ogType = "website",
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  ogType?: "website" | "article";
}): Metadata {
  const alternates = localeAlternates(locale, path);
  return {
    title,
    description,
    keywords,
    alternates,
    openGraph: {
      type: ogType,
      siteName: SITE_NAME,
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
      url: alternates.canonical,
      title,
      description,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
