import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();

export const ogLocale: Record<Locale, string> = { fr: "fr_DZ", ar: "ar_DZ" };

/** Canonical + hreflang alternates for a path shared by every locale (e.g. "/produits/sdp"). */
export function localeAlternates(locale: Locale, path: string = "") {
  const suffix = path === "/" ? "" : path;
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = `/${l}${suffix}`;
  languages["x-default"] = `/fr${suffix}`;
  return { canonical: `/${locale}${suffix}`, languages };
}
