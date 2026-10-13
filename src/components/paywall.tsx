import { KeyRound } from "lucide-react";
import { useState, type FormEvent } from "react";
import { LanguageButton } from "@/components/language-button";
import { useTr } from "@/i18n/locale";
import { isAccessKey, storeAccessKey } from "@/lib/access-key";

const shop = "https://everyschoolever.com";

export function Paywall({ onUnlock }: { onUnlock: () => void }) {
  const tr = useTr();
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isAccessKey(value)) {
      setError(true);
      return;
    }
    storeAccessKey(value);
    onUnlock();
  }

  return (
    <main id="content" className="mx-auto w-full max-w-5xl px-4 pb-16 pt-2">
      <LanguageButton />
      <div className="mx-auto mt-6 max-w-2xl">
        <div className="flex h-2 overflow-hidden rounded-full" aria-hidden="true">
          <span className="flex-1 bg-russet" />
          <span className="flex-1 bg-gold" />
          <span className="flex-1 bg-yew" />
        </div>
        <p className="mt-6 flex items-center gap-2 font-semibold text-yew">
          <KeyRound aria-hidden="true" />
          {tr("For schools")}
        </p>
        <h1 className="mt-2 font-serif text-4xl text-russet sm:text-6xl">{tr("Every English Person Ever")}</h1>
        <p className="mt-4 text-xl">
          {tr(
            "Every English Person Ever is a history of England for children aged 4 to 11. The sentences are short, so you can read them aloud in class.",
          )}
        </p>
        <p className="mt-3">
          {tr(
            "Inside you will find people, real places, the counties of England, beliefs, a timeline, a quiz, work sheets, and projects.",
          )}
        </p>
        <p className="mt-3">{tr("The pages stay closed until you enter an access key.")}</p>
        <p className="mt-6 text-xl">
          {tr("Purchase an access key at")}{" "}
          <a className="font-semibold text-russet underline" href={shop} target="_blank" rel="noopener noreferrer">
            {shop}
          </a>
          . {tr("Then type the key below.")}
        </p>
        <a
          href={shop}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex min-h-11 items-center rounded-lg bg-russet px-4 font-semibold text-cream"
        >
          {tr("Buy an access key")}
        </a>
        <form method="post" onSubmit={submit} className="mt-8 rounded-card border border-ink/15 p-4">
          <label className="block font-semibold" htmlFor="access-key">
            {tr("Access key")}
          </label>
          <input
            id="access-key"
            name="access-key"
            value={value}
            autoCapitalize="characters"
            autoCorrect="off"
            autoComplete="off"
            spellCheck={false}
            placeholder="EEE-····-····-····"
            aria-invalid={error}
            aria-describedby={error ? "access-key-error" : "access-key-note"}
            onChange={(event) => {
              setValue(event.target.value);
              setError(false);
            }}
            className="mt-2 w-full rounded-lg border border-ink/20 bg-cream px-3 py-3 font-mono uppercase tracking-wide text-ink"
          />
          {error ? (
            <p id="access-key-error" role="alert" className="mt-3 font-semibold text-russet">
              {tr("That key does not open this site. Check the letters, or buy a key at everyschoolever.com.")}
            </p>
          ) : (
            <p id="access-key-note" className="mt-3">
              {tr("The key stays on this device until you lock it.")}
            </p>
          )}
          <button type="submit" className="mt-4 min-h-11 rounded-lg bg-yew px-4 font-semibold text-cream">
            {tr("Open the site")}
          </button>
        </form>
      </div>
    </main>
  );
}
