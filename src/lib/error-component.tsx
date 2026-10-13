import type { ErrorComponentProps } from "@tanstack/react-router";
import { TriangleAlert } from "lucide-react";
import { useTr } from "@/i18n/locale";

const FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";

function errorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === "string" && error) return error;
  return FALLBACK_MESSAGE;
}

export function AppErrorComponent({ error }: ErrorComponentProps) {
  const tr = useTr();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 bg-cream px-6 text-center text-ink">
      <span className="text-russet" aria-hidden="true">
        <TriangleAlert className="size-10" strokeWidth={2} />
      </span>
      <h1 className="font-serif text-2xl text-russet">{tr("Something went wrong")}</h1>
      <p className="max-w-md text-base break-words">{errorMessage(error)}</p>
    </main>
  );
}
