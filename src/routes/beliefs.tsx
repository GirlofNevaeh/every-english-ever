import { Link, createFileRoute } from "@tanstack/react-router";
import { pictures } from "@/data/pictures";
import { Photo } from "@/components/photo";

export const Route = createFileRoute("/beliefs")({
  head: () => ({ meta: [{ title: "Beliefs · Every English Ever" }] }),
  component: BeliefsPage,
});

function BeliefsPage() {
  const church = pictures["parish-church"];
  const stones = pictures.stonehenge;

  return (
    <main id="content" className="mx-auto w-full max-w-3xl px-4 pb-16 pt-6">
      <h1 className="font-serif text-4xl text-russet sm:text-5xl">Beliefs</h1>
      <p className="mt-4 text-xl">
        People in England have hoped, prayed, and told stories for a very long time. We speak of that with care.
      </p>

      <section className="mt-8 space-y-3">
        <h2 className="font-serif text-3xl text-yew">Barrows and old stones</h2>
        {stones ? <Photo picture={stones} alt="Stonehenge" /> : null}
        <p>Long ago, people buried their dead in barrows, which are mounds of earth.</p>
        <p>They also raised great stones. Stonehenge and Avebury still stand in Wiltshire.</p>
        <p>We are not sure what Stonehenge was for.</p>
        <p>
          <Link className="underline decoration-russet" to="/places/$slug" params={{ slug: "stonehenge" }}>
            Read about Stonehenge
          </Link>
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="font-serif text-3xl text-yew">Saints</h2>
        <p>Some Christians in England are remembered as saints.</p>
        <p>Alban is remembered at St Albans. Cuthbert is remembered in the north. Hilda led the abbey at Whitby.</p>
        <p>Julian of Norwich wrote about God's love from a small room by a church.</p>
        <p>You do not have to share their faith to read their story kindly.</p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="font-serif text-3xl text-yew">Parish churches</h2>
        {church ? <Photo picture={church} alt="All Saints' Church at Earls Barton, a parish church in Northamptonshire" /> : null}
        <p>A parish church often stands in the middle of a village. It may have a tower, a font, and a churchyard.</p>
        <p>People have been baptised, married, and buried there for centuries.</p>
        <p>Chapels, synagogues, mosques, mandirs, and gurdwaras are part of England too.</p>
        <p>A neighbour's holy place is a place to respect.</p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="font-serif text-3xl text-yew">Stories</h2>
        <p>Dragons, Robin Hood, and King Arthur are stories.</p>
        <p>People have told them for a long time. They are not reports we can check.</p>
        <p>Sherwood Forest is a real wood. The adventures of Robin Hood are a tale set there.</p>
        <p>A dragon on a flag or in a church window is a picture from a story, including the tale of George.</p>
      </section>
    </main>
  );
}
