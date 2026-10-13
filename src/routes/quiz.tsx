import { createFileRoute } from "@tanstack/react-router";
import { questions } from "@/data/quiz";
import { QuizPlay } from "@/components/quiz-play";
import { fill, useTr } from "@/i18n/locale";

export const Route = createFileRoute("/quiz")({
  head: () => ({ meta: [{ title: "Quiz · Every English Ever" }] }),
  component: QuizPage,
});

function QuizPage() {
  const tr = useTr();
  return (
    <main id="content" className="mx-auto w-full max-w-5xl px-4 pb-16 pt-6">
      <h1 className="font-serif text-4xl text-russet sm:text-5xl">{tr("Quiz")}</h1>
      <p className="mt-3 max-w-2xl">
        {fill(
          tr(
            "{n} questions about who, where, when, and what people made. Play alone, or in class teams. A tied team round ends with one sudden-death question.",
          ),
          { n: questions.length },
        )}
      </p>
      <div className="mt-6">
        <QuizPlay />
      </div>
    </main>
  );
}
