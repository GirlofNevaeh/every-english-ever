import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { getCounty } from "@/data/counties";
import { pictures } from "@/data/pictures";
import { getPlace } from "@/data/places";
import { Photo } from "@/components/photo";

export const Route = createFileRoute("/places/$slug")({
  loader: ({ params }) => {
    const place = getPlace(params.slug);
    if (!place) throw notFound();
    return place;
  },
  head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.name ?? "Place"} · Every English Ever` }] }),
  component: PlacePage,
});

function PlacePage() {
  const place = Route.useLoaderData();
  const county = getCounty(place.county);
  const picture = pictures[place.picture];

  return (
    <main id="content" className="mx-auto w-full max-w-3xl px-4 pb-16 pt-6">
      <h1 className="font-serif text-4xl text-russet sm:text-5xl">{place.name}</h1>
      {county ? (
        <p className="mt-2">
          <Link className="font-semibold underline decoration-yew" to="/counties/$slug" params={{ slug: county.slug }}>
            {county.name}
          </Link>
        </p>
      ) : null}
      <div className="mt-6">{picture ? <Photo picture={picture} alt={place.name} /> : null}</div>
      <div className="mt-6 space-y-3">
        {place.lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <p className="mt-8">
        <Link className="underline decoration-russet" to="/places">
          All places
        </Link>
      </p>
    </main>
  );
}
