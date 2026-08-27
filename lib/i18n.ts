export const LOCALES = ["pt", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "pt";

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function negotiateLocale(acceptLanguage: string | null): Locale {
  const header = (acceptLanguage ?? "").toLowerCase();
  const first = header.split(",")[0]?.split(";")[0]?.trim() ?? "";

  if (first.startsWith("en")) {
    return "en";
  }
  if (first.startsWith("pt")) {
    return "pt";
  }
  if (header.includes("pt")) {
    return "pt";
  }
  if (header.includes("en")) {
    return "en";
  }
  return DEFAULT_LOCALE;
}
