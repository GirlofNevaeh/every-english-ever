import { toAmericanEnglish } from "./american";
import cy from "./catalogs/cy.json" with { type: "json" };
import es from "./catalogs/es.json" with { type: "json" };
import fr from "./catalogs/fr.json" with { type: "json" };
import ga from "./catalogs/ga.json" with { type: "json" };
import gd from "./catalogs/gd.json" with { type: "json" };
import it from "./catalogs/it.json" with { type: "json" };
import ru from "./catalogs/ru.json" with { type: "json" };
import type { LocaleId } from "./languages";
import { ui } from "./ui";

const catalogs: Record<Exclude<LocaleId, "en" | "en-US">, Record<string, string>> = {
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
  if (locale === "en-US") return toAmericanEnglish(text);
  return ui[locale][text] ?? catalogs[locale][text] ?? text;
}

export function fill(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ""));
}
