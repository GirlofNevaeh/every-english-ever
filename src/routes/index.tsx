import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { Castle, Church, Landmark, Ship, Trees } from "lucide-react";
import { people } from "@/data/people";
import { pictures } from "@/data/pictures";
import { getPlace, places } from "@/data/places";
import { timeline } from "@/data/timeline";
import { Photo } from "@/components/photo";
import { Portrait } from "@/components/portrait";
import { SearchBox } from "@/components/search-box";
import { useTr } from "@/i18n/locale";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Every English Ever" }] }),
  component: Home,
});

const homePlaces = ["stonehenge", "york", "canterbury", "ironbridge", "lake-district", "lyme-regis"];
const homePeople = [
  "charles-darwin",
  "florence-nightingale",
  "isambard-kingdom-brunel",
  "charles-dickens",
  "michael-faraday",
  "charles-babbage",
];

function PictureBlock({ id, alt }: { id: string; alt: string }) {
  const picture = pictures[id];
  if (!picture) return null;
  return <Photo picture={picture} alt={alt} />;
}

function Home() {
  const tr = useTr();
  const navigate = useNavigate();
  const photoPeople = homePeople
    .map((slug) => people.find((person) => person.slug === slug))
    .filter((person) => person && person.picture && pictures[person.picture]?.kind === "photograph");

  return (
    <main id="content" className="mx-auto w-full max-w-5xl px-4 pb-16 pt-6">
      <p className="font-semibold text-yew">{tr("A history of England for children")}</p>
      <h1 className="mt-2 max-w-3xl font-serif text-4xl text-russet sm:text-6xl">{tr("Read it aloud. Share it in class.")}</h1>
      <p className="mt-4 max-w-2xl text-xl">
        {tr("England has its own story. These pages use short sentences, real places, and people you can name.")}
      </p>
      <div className="mt-6 flex flex-wrap items-end gap-4">
        <SearchBox />
        <button
          type="button"
          className="min-h-11 rounded-lg bg-yew px-4 font-semibold text-cream"
          onClick={() => {
            const person = people[Math.floor(Math.random() * people.length)];
            if (!person) return;
            void navigate({ to: "/people/$slug", params: { slug: person.slug } });
          }}
        >
          {tr("Surprise me")}
        </button>
      </div>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <article>
          <div className="mb-3 flex items-center gap-2 text-yew">
            <Ship aria-hidden="true" />
            <h2 className="font-serif text-3xl text-russet">{tr("Land and sea")}</h2>
          </div>
          <PictureBlock id="dover-cliffs" alt={tr("The white cliffs of Dover")} />
          <p className="mt-3">
            {tr("Chalk cliffs, moors, fens, and a long coast. The white cliffs of Dover look out to sea. The lakes of Cumbria sit in the hills.")}
          </p>
        </article>
        <article>
          <div className="mb-3 flex items-center gap-2 text-yew">
            <Castle aria-hidden="true" />
            <h2 className="font-serif text-3xl text-russet">{tr("Castles")}</h2>
          </div>
          <PictureBlock id="warwick-castle" alt={tr("Warwick Castle")} />
          <p className="mt-3">
            {tr("Castles kept towns and river crossings. Warwick Castle still stands by the Avon. Durham's castle shares a hill with the cathedral.")}
          </p>
        </article>
        <article>
          <div className="mb-3 flex items-center gap-2 text-yew">
            <Church aria-hidden="true" />
            <h2 className="font-serif text-3xl text-russet">{tr("Beliefs")}</h2>
          </div>
          <PictureBlock id="parish-church" alt={tr("All Saints' Church at Earls Barton, a parish church in Northamptonshire")} />
          <p className="mt-3">
            {tr("Parish churches sit in many villages. England is also home to other faiths. Stories such as Arthur and Robin Hood are stories.")}{" "}
            <Link className="underline decoration-russet" to="/beliefs">
              {tr("Read the beliefs page")}
            </Link>
            .
          </p>
        </article>
        <article>
          <div className="mb-3 flex items-center gap-2 text-yew">
            <Trees aria-hidden="true" />
            <h2 className="font-serif text-3xl text-russet">{tr("Daily life")}</h2>
          </div>
          <PictureBlock id="daily-life" alt={tr("Stone cottages in an English village")} />
          <p className="mt-3">
            {tr("People live in villages, towns, and cities. They go to school, to shops, and to parks. Stone cottages, terraces, and new streets are all part of England.")}
          </p>
        </article>
      </section>

      <section className="mt-12">
        <div className="mb-3 flex items-center gap-2 text-yew">
          <Landmark aria-hidden="true" />
          <h2 className="font-serif text-3xl text-russet">{tr("A strip of time")}</h2>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-3" tabIndex={0}>
          {timeline.map((event) => (
            <article key={event.id} className="w-64 shrink-0 rounded-card border border-ink/15 bg-cream p-3">
              <p className="text-sm font-semibold text-yew">{tr(event.when)}</p>
              <h3 className="mt-1 font-serif text-xl">{tr(event.title)}</h3>
              <p className="mt-2 text-base">{tr(event.text)}</p>
            </article>
          ))}
        </div>
        <Link className="mt-2 inline-block underline decoration-russet" to="/time">
          {tr("Open the full timeline")}
        </Link>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-3xl text-russet">{tr("Six places")}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {homePlaces.map((slug) => {
            const place = getPlace(slug);
            const picture = place ? pictures[place.picture] : undefined;
            if (!place || !picture) return null;
            return (
              <article key={slug}>
                <Photo picture={picture} alt={place.name} />
                <h3 className="mt-2 font-serif text-2xl">
                  <Link to="/places/$slug" params={{ slug }} className="underline decoration-russet underline-offset-4">
                    {place.name}
                  </Link>
                </h3>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-3xl text-russet">{tr("Six people")}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photoPeople.map((person) =>
            person ? (
              <article key={person.slug}>
                <Portrait person={person} />
                <h3 className="mt-2 font-serif text-2xl">
                  <Link to="/people/$slug" params={{ slug: person.slug }} className="underline decoration-russet underline-offset-4">
                    {person.name}
                  </Link>
                </h3>
                <p>{tr(person.knownFor)}</p>
              </article>
            ) : null,
          )}
        </div>
      </section>
    </main>
  );
}
