import { useState } from "react";
import { languages } from "@/i18n/languages";
import { useLocale } from "@/i18n/locale";

export function LanguageButton() {
  const { locale, setLocale, tr } = useLocale();
  const [open, setOpen] = useState(false);
  const current = languages.find((language) => language.id === locale) ?? languages[0];

  return (
    <div className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="listbox"
        className="flex min-h-11 w-full items-center justify-between gap-3 rounded-lg border border-yew/30 bg-cream px-3 text-left font-semibold text-ink sm:w-auto"
        onClick={() => setOpen((value) => !value)}
      >
        <span>
          {tr("Language")}: {current.native}
        </span>
        <span aria-hidden="true" className="text-russet">
          {open ? "–" : "+"}
        </span>
      </button>
      {open ? (
        <div
          role="listbox"
          aria-label={tr("Language")}
          className="mt-2 grid grid-cols-2 gap-1.5 sm:grid-cols-3"
        >
          {languages.map((language) => {
            const selected = language.id === locale;
            return (
              <button
                key={language.id}
                type="button"
                role="option"
                aria-selected={selected}
                className={
                  selected
                    ? "min-h-11 rounded-lg bg-yew px-2 py-1 text-left text-sm font-semibold text-cream"
                    : "min-h-11 rounded-lg border border-ink/15 bg-cream px-2 py-1 text-left text-sm font-semibold text-ink"
                }
                onClick={() => {
                  setLocale(language.id);
                  setOpen(false);
                }}
              >
                <span className="block leading-tight">{language.native}</span>
                <span className={selected ? "block text-xs text-cream/80" : "block text-xs text-ink/70"}>{language.english}</span>
              </button>
            );
          })}
          <p className="col-span-2 text-sm leading-snug text-ink sm:col-span-3">
            {tr("Names of people and places stay in English, so you can still find them.")}
          </p>
        </div>
      ) : null}
    </div>
  );
}
