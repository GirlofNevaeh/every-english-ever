import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { getCounty } from "@/data/counties";
import { places } from "@/data/places";
import { useTr } from "@/i18n/locale";

export const Route = createFileRoute("/counties/$slug")({
  loader: ({ params }) => {
    const county = getCounty(params.slug);
    if (!county) throw notFound();
    return county;
  },
  head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.name ?? "County"} · Every English Ever` }] }),
  component: CountyPage,
});

function CountyPage() {
  const tr = useTr();
  const county = Route.useLoaderData();
  const linked = places.filter((place) => place.county === county.slug);

  return (
    <main id="content" className="mx-auto w-full max-w-3xl px-4 pb-16 pt-6">
      <h1 className="font-serif text-4xl text-russet sm:text-5xl">{county.name}</h1>
      <p className="mt-4">
        <span className="font-semibold">{tr("Main town or city. ")}</span>
        {county.town}
      </p>
      <p className="mt-2">
        <span className="font-semibold">{tr("The land. ")}</span>
        {tr(county.land)}
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-5">
        {county.facts.map((fact) => (
          <li key={fact}>{tr(fact)}</li>
        ))}
      </ul>
      {linked.length > 0 ? (
        <ul className="mt-6 space-y-2">
          {linked.map((place) => (
            <li key={place.slug}>
              <Link className="underline decoration-russet" to="/places/$slug" params={{ slug: place.slug }}>
                {place.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
      <p className="mt-8">
        <Link className="underline decoration-yew" to="/places">
          {tr("Back to the county map")}
        </Link>
      </p>
    </main>
  );
}
