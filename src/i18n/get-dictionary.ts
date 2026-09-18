import "server-only";
import type { Locale } from "./config";
import type { Dictionary } from "./dictionary-type";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  fr: () => import("./dictionaries/fr").then((mod) => mod.default),
  ar: () => import("./dictionaries/ar").then((mod) => mod.default),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> => dictionaries[locale]();
