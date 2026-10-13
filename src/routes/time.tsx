import { createFileRoute } from "@tanstack/react-router";
import { pictures } from "@/data/pictures";
import { timeline } from "@/data/timeline";
import { Photo } from "@/components/photo";
import { useTr } from "@/i18n/locale";

export const Route = createFileRoute("/time")({
  head: () => ({ meta: [{ title: "Time · Every English Ever" }] }),
  component: TimePage,
});

function TimePage() {
  const tr = useTr();
  return (
    <main id="content" className="mx-auto w-full max-w-5xl px-4 pb-16 pt-6">
      <h1 className="font-serif text-4xl text-russet sm:text-5xl">{tr("Time")}</h1>
      <p className="mt-3 max-w-2xl">{tr("Read from left to right, from the first farmers to now.")}</p>
      <div className="mt-6 flex gap-4 overflow-x-auto pb-4" tabIndex={0}>
        {timeline.map((event) => {
          const picture = event.picture ? pictures[event.picture] : undefined;
          return (
            <article key={event.id} className="w-72 shrink-0 rounded-card border border-ink/15 bg-cream p-4">
              <p className="text-sm font-semibold text-yew">{tr(event.when)}</p>
              <h2 className="mt-1 font-serif text-2xl text-russet">{tr(event.title)}</h2>
              {picture ? (
                <div className="mt-3">
                  <Photo picture={picture} alt={event.title} />
                </div>
              ) : null}
              <p className="mt-3">{tr(event.text)}</p>
            </article>
          );
        })}
      </div>
    </main>
  );
}
