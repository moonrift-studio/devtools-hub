import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/en";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en").then((m) => m.default),
  ja: () => import("./dictionaries/ja").then((m) => m.default),
  ko: () => import("./dictionaries/ko").then((m) => m.default),
  de: () => import("./dictionaries/de").then((m) => m.default),
  fr: () => import("./dictionaries/fr").then((m) => m.default),
  es: () => import("./dictionaries/es").then((m) => m.default),
  pt: () => import("./dictionaries/pt").then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
