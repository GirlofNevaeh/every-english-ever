import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import { stages, type StageId } from "@/data/types";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [{ title: "Projects · Every English Ever" }] }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [stage, setStage] = useState<StageId | "all">("all");
  const [kind, setKind] = useState<"all" | "individual" | "team">("all");
  const shown = useMemo(
    () =>
      projects.filter(
        (project) => (stage === "all" || project.stage === stage) && (kind === "all" || project.kind === kind),
      ),
    [stage, kind],
  );

  return (
    <main id="content" className="mx-auto w-full max-w-5xl px-4 pb-16 pt-6">
      <h1 className="font-serif text-4xl text-russet sm:text-5xl">Projects</h1>
      <p className="mt-3 max-w-2xl">One individual project and one team project for each primary year. Use facts from this site.</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Filter active={stage === "all"} onClick={() => setStage("all")} label="All years" />
        {stages.map((item) => (
          <Filter key={item.id} active={stage === item.id} onClick={() => setStage(item.id)} label={item.label} />
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <Filter active={kind === "all"} onClick={() => setKind("all")} label="Individual and team" />
        <Filter active={kind === "individual"} onClick={() => setKind("individual")} label="Individual" />
        <Filter active={kind === "team"} onClick={() => setKind("team")} label="Team" />
      </div>
      <div className="mt-6 grid gap-4">
        {shown.map((project) => (
          <article key={project.id} className="rounded-card border border-ink/15 p-4">
            <p className="text-sm font-semibold text-yew">
              {stages.find((item) => item.id === project.stage)?.label} · {project.kind === "individual" ? "Individual" : "Team"}
            </p>
            <h2 className="mt-1 font-serif text-3xl text-russet">{project.title}</h2>
            <h3 className="mt-3 font-semibold">What you need</h3>
            <ul className="mt-1 list-disc pl-5">
              {project.need.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3 className="mt-3 font-semibold">Steps</h3>
            <ol className="mt-1 list-decimal space-y-1 pl-5">
              {project.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p className="mt-3">
              <span className="font-semibold">You are done when. </span>
              {project.done}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}

function Filter({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active
          ? "min-h-11 rounded-lg bg-yew px-3 text-sm font-semibold text-cream"
          : "min-h-11 rounded-lg border border-ink/20 px-3 text-sm font-semibold"
      }
    >
      {label}
    </button>
  );
}
