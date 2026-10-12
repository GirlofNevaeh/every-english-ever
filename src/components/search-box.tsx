import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { isFullName } from "@/lib/find";

export function SearchBox({ initial = "" }: { initial?: string }) {
  const navigate = useNavigate();
  const [text, setText] = useState(initial);
  const [draft, setDraft] = useState<string | null>(null);

  function commit(value: string, force: boolean) {
    const trimmed = value.trim();
    if (!trimmed) {
      setDraft(null);
      return;
    }
    if (force || isFullName(trimmed)) setDraft(trimmed);
    else setDraft(null);
  }

  return (
    <form
      className="max-w-xl"
      onSubmit={(event) => {
        event.preventDefault();
        commit(text, true);
      }}
    >
      <label className="block font-semibold" htmlFor="site-search">
        Search
      </label>
      <input
        id="site-search"
        value={text}
        autoComplete="off"
        placeholder="A person, a place, or a county"
        onChange={(event) => {
          const next = event.target.value;
          setText(next);
          if (isFullName(next.trim())) setDraft(next.trim());
          else setDraft(null);
        }}
        className="mt-2 w-full rounded-lg border border-ink/20 bg-cream px-3 py-3 text-ink"
      />
      {draft ? (
        <div className="mt-3 flex flex-wrap items-center gap-3 rounded-lg border border-yew/30 bg-yew/10 p-3">
          <code className="font-mono text-base text-ink">search {draft}</code>
          <button
            type="button"
            className="min-h-11 rounded-lg bg-russet px-4 font-semibold text-cream"
            onClick={() => {
              void navigate({ to: "/search", search: { q: draft } });
            }}
          >
            Send
          </button>
        </div>
      ) : null}
    </form>
  );
}
