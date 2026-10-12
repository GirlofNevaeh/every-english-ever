import { Link, createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { people } from "@/data/people";
import { periods, roles, type PeriodId, type RoleId } from "@/data/types";
import { SearchBox } from "@/components/search-box";

export const Route = createFileRoute("/people/")({
  head: () => ({ meta: [{ title: "People · Every English Ever" }] }),
  component: PeoplePage,
});

function countFor(role: RoleId | "all", period: PeriodId | "all") {
  return people.filter((person) => (role === "all" || person.role === role) && (period === "all" || person.period === period)).length;
}

function PeoplePage() {
  const [role, setRole] = useState<RoleId | "all">("all");
  const [period, setPeriod] = useState<PeriodId | "all">("all");
  const shown = useMemo(
    () => people.filter((person) => (role === "all" || person.role === role) && (period === "all" || person.period === period)),
    [role, period],
  );
  const inventions = people.flatMap((person) => (person.inventions ?? []).map((item) => ({ ...item, person })));

  return (
    <main id="content" className="mx-auto w-full max-w-5xl px-4 pb-16 pt-6">
      <h1 className="font-serif text-4xl text-russet sm:text-5xl">People</h1>
      <p className="mt-3 max-w-2xl">Women and men from the early kingdoms to the scientists and makers of today.</p>
      <div className="mt-6">
        <SearchBox />
      </div>
      <div className="mt-6">
        <h2 className="font-semibold">Role</h2>
        <div className="mt-2 flex flex-wrap gap-2">
          <FilterButton active={role === "all"} disabled={false} onClick={() => setRole("all")} label={`All (${people.length})`} />
          {roles.map((item) => {
            const total = countFor(item.id, period);
            return (
              <FilterButton
                key={item.id}
                active={role === item.id}
                disabled={total === 0}
                onClick={() => setRole(item.id)}
                label={`${item.label} (${total})`}
              />
            );
          })}
        </div>
      </div>
      <div className="mt-4">
        <h2 className="font-semibold">Time</h2>
        <div className="mt-2 flex flex-wrap gap-2">
          <FilterButton active={period === "all"} disabled={false} onClick={() => setPeriod("all")} label="All times" />
          {periods.map((item) => {
            const total = countFor(role, item.id);
            return (
              <FilterButton
                key={item.id}
                active={period === item.id}
                disabled={total === 0}
                onClick={() => setPeriod(item.id)}
                label={`${item.label} (${total})`}
              />
            );
          })}
        </div>
      </div>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {shown.map((person) => (
          <li key={person.slug}>
            <Link to="/people/$slug" params={{ slug: person.slug }} className="block rounded-card border border-ink/15 p-4 hover:bg-yew/5">
              <h3 className="font-serif text-2xl text-russet">{person.name}</h3>
              <p className="text-sm font-semibold text-yew">{person.years}</p>
              <p className="mt-1">{person.knownFor}</p>
            </Link>
          </li>
        ))}
      </ul>
      <section className="mt-12">
        <h2 className="font-serif text-3xl text-russet">Inventions</h2>
        <p className="mt-2 max-w-2xl">When other people shared the work, the line says so.</p>
        <ul className="mt-4 space-y-4">
          {inventions.map((item) => (
            <li key={`${item.person.slug}-${item.name}`} className="rounded-card border border-ink/15 p-4">
              <h3 className="font-serif text-2xl">{item.name}</h3>
              <p className="mt-1">
                <Link className="underline decoration-russet" to="/people/$slug" params={{ slug: item.person.slug }}>
                  {item.person.name}
                </Link>
              </p>
              {item.shared ? <p className="mt-2">{item.shared}</p> : null}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

function FilterButton({
  active,
  disabled,
  onClick,
  label,
}: {
  active: boolean;
  disabled: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={
        disabled
          ? "min-h-11 rounded-lg border border-ink/15 px-3 text-sm text-ink/35"
          : active
            ? "min-h-11 rounded-lg bg-yew px-3 text-sm font-semibold text-cream"
            : "min-h-11 rounded-lg border border-ink/20 px-3 text-sm font-semibold"
      }
    >
      {label}
    </button>
  );
}
