import { Link, createFileRoute } from "@tanstack/react-router";
import { SearchBox } from "@/components/search-box";
import { useLocale } from "@/i18n/locale";
import { searchAll } from "@/lib/find";

type SearchParams = { q: string };

export const Route = createFileRoute("/search")({
  validateSearch: (search: Record<string, unknown>): SearchParams => ({
    q: typeof search.q === "string" ? search.q : "",
  }),
  head: () => ({ meta: [{ title: "Search · Every English Person Ever" }] }),
  component: SearchPage,
});

function SearchPage() {
  const { q } = Route.useSearch();
  const { locale, tr } = useLocale();
  const results = searchAll(q, locale);

  return (
    <main id="content" className="mx-auto w-full max-w-3xl px-4 pb-16 pt-6">
      <h1 className="font-serif text-4xl text-russet sm:text-5xl">{tr("Search")}</h1>
      <div className="mt-6">
        <SearchBox initial={q} />
      </div>
      {q ? (
        <div className="mt-8 space-y-6">
          <p>
            <code className="font-mono">
              {tr("search")} {q}
            </code>
          </p>
          <section>
            <h2 className="font-serif text-2xl text-yew">{tr("People")}</h2>
            <ResultList
              items={results.people.map((person) => ({
                key: person.slug,
                href: { to: "/people/$slug" as const, params: { slug: person.slug } },
                title: person.name,
                text: tr(person.knownFor),
              }))}
            />
          </section>
          <section>
            <h2 className="font-serif text-2xl text-yew">{tr("Places")}</h2>
            <ResultList
              items={results.places.map((place) => ({
                key: place.slug,
                href: { to: "/places/$slug" as const, params: { slug: place.slug } },
                title: place.name,
                text: place.lines[0] ? tr(place.lines[0]) : "",
              }))}
            />
          </section>
          <section>
            <h2 className="font-serif text-2xl text-yew">{tr("Counties")}</h2>
            <ResultList
              items={results.counties.map((county) => ({
                key: county.slug,
                href: { to: "/counties/$slug" as const, params: { slug: county.slug } },
                title: county.name,
                text: county.town,
              }))}
            />
          </section>
          {results.people.length + results.places.length + results.counties.length === 0 ? (
            <p>{tr("No matches yet. Try a person, a place, or a county.")}</p>
          ) : null}
        </div>
      ) : (
        <p className="mt-6">{tr("Type a word, then press Enter and Send.")}</p>
      )}
    </main>
  );
}

function ResultList({
  items,
}: {
  items: { key: string; href: { to: "/people/$slug" | "/places/$slug" | "/counties/$slug"; params: { slug: string } }; title: string; text: string }[];
}) {
  const { tr } = useLocale();
  if (items.length === 0) return <p className="mt-2 text-sm">{tr("None.")}</p>;
  return (
    <ul className="mt-2 space-y-2">
      {items.map((item) => (
        <li key={item.key}>
          <Link to={item.href.to} params={item.href.params} className="underline decoration-russet">
            {item.title}
          </Link>
          <span> — {item.text}</span>
        </li>
      ))}
    </ul>
  );
}
