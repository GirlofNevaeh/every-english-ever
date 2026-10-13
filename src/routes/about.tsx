import { createFileRoute } from "@tanstack/react-router";
import { useTr } from "@/i18n/locale";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About · Every English Person Ever" }] }),
  component: AboutPage,
});

function AboutPage() {
  const tr = useTr();
  return (
    <main id="content" className="mx-auto w-full max-w-3xl px-4 pb-16 pt-6">
      <h1 className="font-serif text-4xl text-russet sm:text-5xl">{tr("About")}</h1>
      <p className="mt-6 text-xl">
        {tr(
          "England is one country of the United Kingdom. It has its own history and its own counties. It does not have a separate official anthem. God Save the King is the anthem of the United Kingdom, not of England alone.",
        )}
      </p>
    </main>
  );
}
