import cy from "./catalogs/cy.json";
import es from "./catalogs/es.json";
import fr from "./catalogs/fr.json";
import ga from "./catalogs/ga.json";
import gd from "./catalogs/gd.json";
import it from "./catalogs/it.json";
import ru from "./catalogs/ru.json";
import type { LocaleId } from "./languages";
import { ui } from "./ui";

const catalogs: Record<Exclude<LocaleId, "en">, Record<string, string>> = {
  gd,
  cy,
  ga,
  fr,
  it,
  es,
  ru,
};

export function translate(locale: LocaleId, text: string) {
  if (!text || locale === "en") return text;
  return ui[locale][text] ?? catalogs[locale][text] ?? text;
}

export function fill(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ""));
}
