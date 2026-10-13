import { Link, createFileRoute } from "@tanstack/react-router";
import { counties, getCounty } from "@/data/counties";
import { pictures } from "@/data/pictures";
import { places } from "@/data/places";
import { CountyMap } from "@/components/county-map";
import { Photo } from "@/components/photo";
import { PlaceMap } from "@/components/place-map";
import { fill, useTr } from "@/i18n/locale";

export const Route = createFileRoute("/places/")({
  head: () => ({ meta: [{ title: "Places · Every English Person Ever" }] }),
  component: PlacesPage,
});

function PlacesPage() {
  const tr = useTr();
  return (
    <main id="content" className="mx-auto w-full max-w-5xl px-4 pb-16 pt-6">
      <h1 className="font-serif text-4xl text-russet sm:text-5xl">{tr("Places")}</h1>
      <p className="mt-3 max-w-2xl">{tr("Real stops in England. North is at the top of the map. Tap a mark to open a place.")}</p>
      <div className="mt-6">
        <PlaceMap />
      </div>
      <h2 className="mt-12 font-serif text-3xl text-russet">{tr("Stop and look")}</h2>
      <ul className="mt-4 grid gap-6 sm:grid-cols-2">
        {places.map((place) => {
          const picture = pictures[place.picture];
          const county = getCounty(place.county);
          return (
            <li key={place.slug}>
              {picture ? <Photo picture={picture} alt={place.name} /> : null}
              <h3 className="mt-2 font-serif text-2xl">
                <Link to="/places/$slug" params={{ slug: place.slug }} className="underline decoration-russet underline-offset-4">
                  {place.name}
                </Link>
              </h3>
              <p className="text-sm font-semibold text-yew">{county?.name}</p>
              <p className="mt-1">{place.lines[0] ? tr(place.lines[0]) : null}</p>
            </li>
          );
        })}
      </ul>
      <h2 className="mt-12 font-serif text-3xl text-russet">{tr("Counties")}</h2>
      <p className="mt-2 max-w-2xl">
        {fill(tr("These are the ceremonial counties of England. There are {n}. Tap a shape, including the small ones."), { n: counties.length })}
      </p>
      <div className="mt-4">
        <CountyMap />
      </div>
    </main>
  );
}
