import { useEffect, useRef, useState } from "react";
import { questions, type QuizQuestion } from "@/data/quiz";
import { fill, useTr } from "@/i18n/locale";
import { armQuizSounds, playCheer, playFart, unlockQuizSounds } from "@/lib/quiz-sounds";

type Team = { id: string; name: string; score: number; choice: number | null };

const lengths = [5, 10, 20] as const;

function shuffle<T>(items: T[]) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const swap = copy[i];
    copy[i] = copy[j] as T;
    copy[j] = swap as T;
  }
  return copy;
}

function freshTeams(count: number): Team[] {
  const names = ["Oak", "Yew", "Russet", "Gold"];
  return names.slice(0, count).map((name, index) => ({
    id: `team-${index}`,
    name,
    score: 0,
    choice: null,
  }));
}

export function QuizPlay() {
  const tr = useTr();
  const [mode, setMode] = useState<"solo" | "class" | null>(null);
  const [length, setLength] = useState<(typeof lengths)[number]>(10);
  const [teamCount, setTeamCount] = useState(2);
  const [started, setStarted] = useState(false);
  const [run, setRun] = useState<QuizQuestion[]>([]);
  const [spare, setSpare] = useState<QuizQuestion | null>(null);
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"ask" | "feedback" | "sudden" | "done">("ask");
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [teams, setTeams] = useState<Team[]>(freshTeams(2));
  const [round, setRound] = useState<"main" | "sudden">("main");
  const [sudden, setSudden] = useState<QuizQuestion | null>(null);
  const timer = useRef<number | null>(null);
  const teamsRef = useRef(teams);
  teamsRef.current = teams;

  useEffect(() => {
    armQuizSounds();
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  function begin() {
    const deck = shuffle(questions);
    const next = deck.slice(0, length);
    setRun(next);
    setSpare(deck[length] ?? null);
    setIndex(0);
    setPhase("ask");
    setPicked(null);
    setScore(0);
    setTeams((current) => {
      const base = current.length === teamCount ? current : freshTeams(teamCount);
      return base.map((team) => ({ ...team, score: 0, choice: null }));
    });
    setSudden(null);
    setRound("main");
    setStarted(true);
  }

  function schedule(next: () => void) {
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(next, 1000);
  }

  const question = round === "sudden" ? sudden : run[index];

  function finishSolo() {
    setPhase("done");
  }

  function finishClass(finalTeams: Team[]) {
    const top = Math.max(...finalTeams.map((team) => team.score));
    const leaders = finalTeams.filter((team) => team.score === top);
    if (leaders.length > 1 && spare) {
      setSudden(spare);
      setRound("sudden");
      setTeams(finalTeams.map((team) => ({ ...team, choice: null })));
      setPhase("ask");
      return;
    }
    setTeams(finalTeams);
    setPhase("done");
  }

  function afterFeedback() {
    if (mode === "solo") {
      if (index + 1 >= run.length) finishSolo();
      else {
        setIndex((value) => value + 1);
        setPicked(null);
        setPhase("ask");
      }
      return;
    }
    if (!question) return;
    const scored = teamsRef.current.map((team) =>
      team.choice === question.answer ? { ...team, score: team.score + 1, choice: null } : { ...team, choice: null },
    );
    if (round === "sudden") {
      setTeams(scored);
      setPhase("done");
      return;
    }
    if (index + 1 >= run.length) {
      finishClass(scored);
      return;
    }
    setTeams(scored);
    setIndex((value) => value + 1);
    setPhase("ask");
  }

  function chooseSolo(choice: number) {
    if (phase !== "ask" || !question) return;
    unlockQuizSounds();
    setPicked(choice);
    if (choice === question.answer) {
      setScore((value) => value + 1);
      playCheer();
    } else {
      playFart();
    }
    setPhase("feedback");
    schedule(afterFeedback);
  }

  function chooseTeam(teamId: string, choice: number) {
    if (phase !== "ask" || !question) return;
    unlockQuizSounds();
    const next = teamsRef.current.map((team) => (team.id === teamId ? { ...team, choice } : team));
    teamsRef.current = next;
    setTeams(next);
    if (next.every((team) => team.choice !== null)) {
      if (next.some((team) => team.choice === question.answer)) playCheer();
      if (next.some((team) => team.choice !== question.answer)) playFart();
      setPhase("feedback");
      schedule(afterFeedback);
    }
  }

  if (!started) {
    return (
      <div className="max-w-xl space-y-6">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className={mode === "solo" ? "min-h-11 rounded-lg bg-yew px-4 text-cream" : "min-h-11 rounded-lg border border-ink/20 px-4"}
            onClick={() => setMode("solo")}
          >
            {tr("Solo")}
          </button>
          <button
            type="button"
            className={mode === "class" ? "min-h-11 rounded-lg bg-yew px-4 text-cream" : "min-h-11 rounded-lg border border-ink/20 px-4"}
            onClick={() => setMode("class")}
          >
            {tr("Class teams")}
          </button>
        </div>
        <fieldset>
          <legend className="font-semibold">{tr("How many questions?")}</legend>
          <div className="mt-2 flex gap-2">
            {lengths.map((value) => (
              <button
                key={value}
                type="button"
                className={length === value ? "min-h-11 rounded-lg bg-russet px-4 text-cream" : "min-h-11 rounded-lg border border-ink/20 px-4"}
                onClick={() => setLength(value)}
              >
                {value}
              </button>
            ))}
          </div>
        </fieldset>
        {mode === "class" ? (
          <fieldset>
            <legend className="font-semibold">{tr("Teams")}</legend>
            <div className="mt-2 flex gap-2">
              {[2, 3, 4].map((value) => (
                <button
                  key={value}
                  type="button"
                  className={teamCount === value ? "min-h-11 rounded-lg bg-russet px-4 text-cream" : "min-h-11 rounded-lg border border-ink/20 px-4"}
                  onClick={() => setTeamCount(value)}
                >
                  {value}
                </button>
              ))}
            </div>
            <div className="mt-3 space-y-2">
              {freshTeams(teamCount).map((team, index) => (
                <label key={team.id} className="block text-sm font-semibold">
                  {fill(tr("Team {n}"), { n: index + 1 })}
                  <input
                    defaultValue={tr(team.name)}
                    className="mt-1 w-full rounded-lg border border-ink/20 bg-cream px-3 py-2"
                    onChange={(event) => {
                      const name = event.target.value;
                      setTeams((current) => {
                        const base = current.length === teamCount ? current : freshTeams(teamCount);
                        return base.map((item, itemIndex) => (itemIndex === index ? { ...item, name } : item));
                      });
                    }}
                  />
                </label>
              ))}
            </div>
          </fieldset>
        ) : null}
        <button
          type="button"
          disabled={!mode}
          className="min-h-11 rounded-lg bg-russet px-5 font-semibold text-cream disabled:opacity-40"
          onClick={begin}
        >
          {tr("Start")}
        </button>
      </div>
    );
  }

  if (phase === "done" || !question) {
    const top = mode === "class" ? Math.max(...teams.map((team) => team.score)) : score;
    const winners = teams.filter((team) => team.score === top);
    return (
      <div className="max-w-xl">
        <h2 className="font-serif text-3xl text-russet">{tr("That round is done")}</h2>
        {mode === "solo" ? (
          <p className="mt-3">{fill(tr("You scored {score} out of {total}."), { score, total: run.length })}</p>
        ) : (
          <ul className="mt-3 space-y-2">
            {teams.map((team) => (
              <li key={team.id}>
                {tr(team.name)}: {team.score}
              </li>
            ))}
          </ul>
        )}
        {mode === "class" && winners.length > 1 ? <p className="mt-3">{tr("You share first place.")}</p> : null}
        {mode === "class" && winners.length === 1 ? (
          <p className="mt-3">{fill(tr("{name} is in the lead."), { name: tr(winners[0]?.name ?? "") })}</p>
        ) : null}
        <button type="button" className="mt-4 min-h-11 rounded-lg bg-yew px-4 text-cream" onClick={() => setStarted(false)}>
          {tr("Play again")}
        </button>
      </div>
    );
  }

  const showing = phase === "feedback";

  return (
    <div>
      <p className="text-sm font-semibold text-yew">
        {round === "sudden" ? tr("Sudden death") : fill(tr("Question {n} of {total}"), { n: index + 1, total: run.length })}
      </p>
      {mode === "class" ? (
        <ul className="mt-2 flex flex-wrap gap-3 text-sm font-semibold">
          {teams.map((team) => (
            <li key={team.id}>
              {tr(team.name)}: {team.score}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-2 text-sm font-semibold">{fill(tr("Score: {score}"), { score })}</p>
      )}
      <h2 className="mt-4 max-w-3xl font-serif text-3xl text-ink">{tr(question.prompt)}</h2>
      {mode === "solo" ? (
        <div className="mt-4 grid gap-2">
          {question.choices.map((choice, choiceIndex) => {
            const correct = showing && choiceIndex === question.answer;
            const miss = showing && picked === choiceIndex && choiceIndex !== question.answer;
            return (
              <button
                key={choice}
                type="button"
                disabled={showing}
                onClick={() => chooseSolo(choiceIndex)}
                className={
                  correct
                    ? "min-h-11 rounded-lg bg-yew px-4 text-left text-cream"
                    : miss
                      ? "min-h-11 rounded-lg bg-russet px-4 text-left text-cream"
                      : "min-h-11 rounded-lg border border-ink/20 bg-cream px-4 text-left"
                }
              >
                {tr(choice)}
                {correct ? tr(" — Yes") : ""}
                {miss ? tr(" — Not this one") : ""}
              </button>
            );
          })}
        </div>
      ) : (
        <div className="mt-4 space-y-4">
          {teams.map((team) => (
            <fieldset key={team.id} className="rounded-card border border-ink/15 p-3">
              <legend className="px-1 font-semibold">{tr(team.name)}</legend>
              <div className="grid gap-2">
                {question.choices.map((choice, choiceIndex) => {
                  const selected = team.choice === choiceIndex;
                  const correct = showing && choiceIndex === question.answer;
                  const miss = showing && selected && choiceIndex !== question.answer;
                  return (
                    <button
                      key={choice}
                      type="button"
                      disabled={showing}
                      onClick={() => chooseTeam(team.id, choiceIndex)}
                      className={
                        correct
                          ? "min-h-11 rounded-lg bg-yew px-3 text-left text-cream"
                          : miss
                            ? "min-h-11 rounded-lg bg-russet px-3 text-left text-cream"
                            : selected
                              ? "min-h-11 rounded-lg border border-yew bg-yew/15 px-3 text-left"
                              : "min-h-11 rounded-lg border border-ink/20 px-3 text-left"
                      }
                    >
                      {tr(choice)}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          ))}
        </div>
      )}
    </div>
  );
}
