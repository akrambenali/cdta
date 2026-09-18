export const locales = ["fr", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export const localeConfig: Record<Locale, { label: string; dir: "ltr" | "rtl"; htmlLang: string }> = {
  fr: { label: "Français", dir: "ltr", htmlLang: "fr" },
  ar: { label: "العربية", dir: "rtl", htmlLang: "ar" },
};

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);
