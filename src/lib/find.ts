import { counties } from "@/data/counties";
import { people } from "@/data/people";
import { places } from "@/data/places";
import type { LocaleId } from "@/i18n/languages";
import { translate } from "@/i18n/translate";

export function norm(value: string) {
  return value
    .toLowerCase()
    .replace(/æ/g, "ae")
    .replace(/[’']/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .replace(/\s+/g, " ");
}

const fullNames = new Set<string>();

for (const person of people) fullNames.add(norm(person.name));
for (const place of places) fullNames.add(norm(place.name));
for (const county of counties) fullNames.add(norm(county.name));

export function isFullName(value: string) {
  return fullNames.has(norm(value));
}

export function searchAll(query: string, locale: LocaleId = "en") {
  const words = norm(query).split(" ").filter(Boolean);
  const tr = (text: string) => translate(locale, text);
  const hay = (parts: Array<string | undefined>) => {
    const text = norm(parts.filter(Boolean).join(" "));
    return words.every((word) => text.includes(word));
  };

  if (words.length === 0) {
    return { people: [], places: [], counties: [] };
  }

  return {
    people: people.filter((person) =>
      hay([
        person.name,
        person.knownFor,
        tr(person.knownFor),
        person.years,
        ...person.places,
        ...person.lines,
        ...person.lines.map(tr),
        ...(person.inventions ?? []).flatMap((item) => [item.name, tr(item.name), item.shared, item.shared ? tr(item.shared) : undefined]),
      ]),
    ),
    places: places.filter((place) =>
      hay([
        place.name,
        ...place.lines,
        ...place.lines.map(tr),
        counties.find((county) => county.slug === place.county)?.name,
      ]),
    ),
    counties: counties.filter((county) =>
      hay([county.name, county.town, county.land, tr(county.land), ...county.facts, ...county.facts.map(tr)]),
    ),
  };
}
