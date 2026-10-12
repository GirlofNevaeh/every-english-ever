import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { getPerson, people } from "@/data/people";
import { periods, roles } from "@/data/types";
import { Portrait } from "@/components/portrait";

export const Route = createFileRoute("/people/$slug")({
  loader: ({ params }) => {
    const person = getPerson(params.slug);
    if (!person) throw notFound();
    return person;
  },
  head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.name ?? "Person"} · Every English Ever` }] }),
  component: PersonPage,
});

function PersonPage() {
  const person = Route.useLoaderData();
  const role = roles.find((item) => item.id === person.role)?.label;
  const period = periods.find((item) => item.id === person.period);
  const more = people.filter((item) => item.slug !== person.slug && item.period === person.period).slice(0, 3);

  return (
    <main id="content" className="mx-auto w-full max-w-3xl px-4 pb-16 pt-6">
      <p className="text-sm font-semibold text-yew">
        {role} · {period?.label}
      </p>
      <h1 className="mt-2 font-serif text-4xl text-russet sm:text-5xl">{person.name}</h1>
      <p className="mt-2 text-lg font-semibold">{person.years}</p>
      <p className="mt-3 text-xl">{person.knownFor}</p>
      <div className="mt-6">
        <Portrait person={person} />
      </div>
      <div className="mt-6 space-y-3">
        {person.lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      {person.places.length > 0 ? (
        <p className="mt-4">
          <span className="font-semibold">Places. </span>
          {person.places.join(", ")}
        </p>
      ) : null}
      {person.inventions?.map((item) => (
        <article key={item.name} className="mt-4 rounded-card border border-ink/15 p-4">
          <h2 className="font-serif text-2xl text-russet">{item.name}</h2>
          {item.shared ? <p className="mt-2">{item.shared}</p> : <p className="mt-2">This work is linked with {person.name}.</p>}
        </article>
      ))}
      <p className="mt-8">
        <Link className="underline decoration-russet" to="/people">
          All people
        </Link>
      </p>
      {more.length > 0 ? (
        <ul className="mt-4 space-y-2">
          {more.map((item) => (
            <li key={item.slug}>
              <Link className="underline decoration-yew" to="/people/$slug" params={{ slug: item.slug }}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </main>
  );
}
