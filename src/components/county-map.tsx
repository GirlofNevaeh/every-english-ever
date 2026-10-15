import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { getCounty } from "@/data/counties";
import { countyShapes, project } from "@/data/county-shapes";
import { places } from "@/data/places";
import { useTr } from "@/i18n/locale";

export function CountyMap() {
  const tr = useTr();
  const [slug, setSlug] = useState<string>("northumberland");
  const county = getCounty(slug);
  const linked = places.filter((place) => place.county === slug);

  const london = useMemo(() => {
    const northWest = project(-0.55, 51.73);
    const southEast = project(0.35, 51.26);
    return {
      x: northWest.x,
      y: northWest.y,
      width: southEast.x - northWest.x,
      height: southEast.y - northWest.y,
    };
  }, []);

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.8fr)]">
      <div>
        <div className="rounded-card border border-ink/15 bg-yew/5 p-2">
          <svg viewBox={`0 0 560 680`} role="img" aria-label={tr("Ceremonial counties of England, north at the top")} className="h-auto w-full">
            <rect width="560" height="680" fill="var(--color-cream)" />
            {countyShapes.map((shape) => (
              <path
                key={shape.slug}
                d={shape.d}
                tabIndex={0}
                role="button"
                aria-label={shape.name}
                aria-pressed={slug === shape.slug}
                onClick={() => setSlug(shape.slug)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSlug(shape.slug);
                  }
                }}
                className={
                  slug === shape.slug
                    ? "fill-russet stroke-ink cursor-pointer outline-none"
                    : "fill-yew/35 stroke-ink/70 cursor-pointer outline-none hover:fill-gold/70"
                }
                strokeWidth={shape.slug === "city-of-london" ? 1.4 : 0.6}
              />
            ))}
            <text x="28" y="36" fill="var(--color-ink)" fontSize="14" fontFamily="var(--font-sans)">
              N
            </text>
            <path d="M34 42 L34 18 M28 24 L34 16 L40 24" fill="none" stroke="var(--color-ink)" strokeWidth="1.4" />
          </svg>
        </div>
        <p className="mt-2 text-sm">{tr("North is at the top. Tap a county. The small ones are listed beside the map too.")}</p>
        <h3 className="mt-4 font-serif text-2xl text-russet">{tr("London, closer")}</h3>
        <p className="mt-1 text-sm">{tr("Greater London and the City of London are different counties. Both can be tapped.")}</p>
        <div className="mt-2 rounded-card border border-ink/15 bg-yew/5 p-2">
          <svg
            viewBox={`${london.x} ${london.y} ${london.width} ${london.height}`}
            role="img"
            aria-label={tr("Greater London and the City of London")}
            className="h-auto w-full"
          >
            <rect x={london.x} y={london.y} width={london.width} height={london.height} fill="var(--color-cream)" />
            {countyShapes.map((shape) => (
              <path
                key={`inset-${shape.slug}`}
                d={shape.d}
                tabIndex={0}
                role="button"
                aria-label={shape.name}
                aria-pressed={slug === shape.slug}
                onClick={() => setSlug(shape.slug)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSlug(shape.slug);
                  }
                }}
                className={
                  slug === shape.slug
                    ? "fill-russet stroke-ink cursor-pointer"
                    : "fill-yew/40 stroke-ink cursor-pointer hover:fill-gold/70"
                }
                strokeWidth={shape.slug === "city-of-london" ? 1.2 : 0.8}
              />
            ))}
          </svg>
        </div>
        <p className="mt-3 text-sm leading-snug">
          {tr("County shapes are simplified from open boundary data. © Crown copyright and database right, Ordnance Survey and the Office for National Statistics. The City of London shape is © OpenStreetMap contributors.")}
        </p>
      </div>
      <div>
        {county ? (
          <article className="rounded-card border border-ink/15 bg-cream p-4">
            <h3 className="font-serif text-3xl text-russet">{county.name}</h3>
            <p className="mt-3">
              <span className="font-semibold">{tr("Main town or city: ")}</span>
              {county.town}
            </p>
            <p className="mt-2">
              <span className="font-semibold">{tr("The land: ")}</span>
              {tr(county.land)}
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              {county.facts.map((fact) => (
                <li key={fact}>{tr(fact)}</li>
              ))}
            </ul>
            {linked.length > 0 ? (
              <ul className="mt-4 space-y-2">
                {linked.map((place) => (
                  <li key={place.slug}>
                    <Link className="underline decoration-russet underline-offset-2" to="/places/$slug" params={{ slug: place.slug }}>
                      {place.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        ) : null}
        <h3 className="mt-6 font-serif text-2xl text-yew">{tr("Every county")}</h3>
        <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {[...countyShapes]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((shape) => {
              const item = getCounty(shape.slug);
              return (
                <li key={shape.slug}>
                  <button
                    type="button"
                    onClick={() => setSlug(shape.slug)}
                    className={
                      slug === shape.slug
                        ? "min-h-11 w-full rounded-lg bg-yew px-2 text-left text-sm font-semibold text-cream"
                        : "min-h-11 w-full rounded-lg border border-ink/15 bg-cream px-2 text-left text-sm font-semibold"
                    }
                  >
                    {item?.name ?? shape.name}
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
