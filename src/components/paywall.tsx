import { KeyRound } from "lucide-react";
import { useState, type FormEvent } from "react";
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
    <main id="content" className="mx-auto w-full max-w-3xl px-4 pb-16 pt-6">
      <p className="flex items-center gap-2 font-semibold text-yew">
        <KeyRound aria-hidden="true" />
        {tr("For schools")}
      </p>
      <h1 className="mt-2 font-serif text-4xl text-russet sm:text-5xl">{tr("The other pages are locked")}</h1>
      <p className="mt-4 text-xl">
        {tr(
          "Every English Person Ever is a history of England for children of Age 5-12. The sentences are short, so you can read them aloud in class.",
        )}
      </p>
      <p className="mt-3">
        {tr("The home page is open. Every other page stays closed until you enter an access key.")}
      </p>
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
    </main>
  );
}
