import type { Locale } from "@/i18n/config";

export function href(locale: Locale, path: string = ""): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean === "/" ? "" : clean}`;
}
