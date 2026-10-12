import { countyShapes, mapFrame, project } from "@/data/county-shapes";
import { places } from "@/data/places";

export function PlaceMap() {
  return (
    <div className="rounded-card border border-ink/15 bg-yew/5 p-2">
      <svg
        viewBox={`0 0 ${mapFrame.width} ${mapFrame.height}`}
        role="img"
        aria-label="Places in England, north at the top"
        className="h-auto w-full"
      >
        <rect width={mapFrame.width} height={mapFrame.height} fill="var(--color-cream)" />
        {countyShapes.map((shape) => (
          <path key={shape.slug} d={shape.d} className="fill-yew/20 stroke-yew/50" strokeWidth="0.6" />
        ))}
        <text x="24" y="34" fill="var(--color-ink)" fontSize="14">
          N
        </text>
        {places.map((place) => {
          const point = project(place.lon, place.lat);
          return (
            <a key={place.slug} href={`/places/${place.slug}`}>
              <circle cx={point.x} cy={point.y} r="8" className="fill-russet stroke-cream" strokeWidth="1.5" />
              <title>{place.name}</title>
            </a>
          );
        })}
      </svg>
      <p className="mt-2 text-sm">North is at the top. Tap a mark, or tap a name.</p>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
        {places.map((place) => (
          <li key={place.slug}>
            <a
              href={`/places/${place.slug}`}
              className="flex min-h-11 items-center rounded-lg border border-ink/15 px-3 text-sm font-semibold hover:bg-yew/10"
            >
              {place.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
