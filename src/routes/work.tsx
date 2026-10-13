import { createFileRoute } from "@tanstack/react-router";
import { useLocale } from "@/i18n/locale";

export const Route = createFileRoute("/work")({
  head: () => ({ meta: [{ title: "Work · Every English Person Ever" }] }),
  component: WorkPage,
});

const bank = ["fen", "moor", "minster", "burh", "fossil", "mill", "downs", "broads", "Solent", "gorge", "wold", "plain"];

const names = [
  "William Shakespeare",
  "Mary Anning",
  "Bede",
  "Isaac Newton",
  "Isambard Kingdom Brunel",
  "William Wordsworth",
  "Æthelflæd",
  "Tim Berners-Lee",
];

const places = [
  "Lyme Regis",
  "Woolsthorpe",
  "London and Switzerland",
  "Stratford-upon-Avon",
  "Mercia",
  "Jarrow",
  "Portsmouth",
  "Cockermouth",
];

const blanks = [
  "The first farmers reached this land about __________ years ago.",
  "In the early __________, the Roman armies left.",
  "In __________, William of Normandy became king after Hastings.",
  "In the Tudor court, music, plays, and __________ mattered.",
  "In the __________, people fought a civil war about the king and Parliament.",
  "In the industrial towns, new mills and __________ changed how people worked and lived.",
];

function WorkPage() {
  const { locale, tr } = useLocale();
  return (
    <main id="content" className="mx-auto w-full max-w-3xl px-4 pb-16 pt-6">
      <h1 className="font-serif text-4xl text-russet sm:text-5xl">{tr("Work")}</h1>
      <p className="no-print mt-3">{tr("Sheets to print. Facts live on this site.")}</p>

      <section className="sheet mt-8 rounded-card border border-ink/15 p-4">
        <div className="no-print mb-3 flex flex-wrap gap-2">
          <button type="button" className="min-h-11 rounded-lg bg-russet px-4 text-cream" onClick={() => window.print()}>
            {tr("Print sheets")}
          </button>
          <a
            className="inline-flex min-h-11 items-center rounded-lg border border-yew px-4 font-semibold text-yew"
            href={`/quiz/every-english-ever-quiz-${locale}.pdf`}
            download
          >
            {tr("Download the quiz")}
          </a>
        </div>
        <h2 className="font-serif text-3xl text-russet">{tr("County word bank")}</h2>
        <p className="mt-2">{tr("Use these words in sentences about England. Look at the county pages if you need a fact.")}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {bank.map((word) => (
            <li key={word} className="rounded-lg border border-yew/30 px-3 py-2 font-semibold">
              {tr(word)}
            </li>
          ))}
        </ul>
      </section>

      <section className="sheet mt-8 rounded-card border border-ink/15 p-4">
        <h2 className="font-serif text-3xl text-russet">{tr("Who and where")}</h2>
        <p className="mt-2">{tr("Draw a line from each person to a place on this site. The two lists are not in the same order.")}</p>
        <div className="mt-4 grid grid-cols-2 gap-6">
          <ol className="space-y-3">
            {names.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ol>
          <ol className="space-y-3">
            {places.map((place) => (
              <li key={place}>{place}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sheet mt-8 rounded-card border border-ink/15 p-4">
        <h2 className="font-serif text-3xl text-russet">{tr("Timeline blanks")}</h2>
        <p className="mt-2">{tr("Fill the gaps. The Time page can help you. Read from the older times toward now.")}</p>
        <ol className="mt-4 list-decimal space-y-4 pl-5">
          {blanks.map((line) => (
            <li key={line}>{tr(line)}</li>
          ))}
        </ol>
      </section>

      <section className="sheet mt-8 rounded-card border border-ink/15 p-4">
        <h2 className="font-serif text-3xl text-russet">{tr("Listening")}</h2>
        <p className="mt-3">
          {tr(
            "England has no anthem of its own. God Save the King belongs to the whole United Kingdom. Some people like to sing the hymn Jerusalem. Listen to a recording your teacher chooses. Talk about one instrument you hear, and one feeling in the music.",
          )}
        </p>
      </section>
    </main>
  );
}
