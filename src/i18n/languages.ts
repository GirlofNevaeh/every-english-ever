export const languages = [
  { id: "en", native: "English", english: "English", html: "en" },
  { id: "gd", native: "Gàidhlig", english: "Scots Gaelic", html: "gd" },
  { id: "cy", native: "Cymraeg", english: "Welsh", html: "cy" },
  { id: "ga", native: "Gaeilge", english: "Irish", html: "ga" },
  { id: "fr", native: "Français", english: "French", html: "fr" },
  { id: "it", native: "Italiano", english: "Italian", html: "it" },
  { id: "es", native: "Español", english: "Spanish", html: "es" },
  { id: "ru", native: "Русский", english: "Russian", html: "ru" },
] as const;

export type LocaleId = (typeof languages)[number]["id"];

export const localeIds = languages.map((language) => language.id);

export function isLocaleId(value: string | null): value is LocaleId {
  return localeIds.includes(value as LocaleId);
}
