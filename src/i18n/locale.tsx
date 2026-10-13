import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { isLocaleId, languages, type LocaleId } from "./languages";
import { fill, translate } from "./translate";

const storageKey = "eee-locale";

type LocaleContextValue = {
  locale: LocaleId;
  setLocale: (locale: LocaleId) => void;
  tr: (text: string) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<LocaleId>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (isLocaleId(saved)) setLocaleState(saved);
  }, []);

  const setLocale = useCallback((next: LocaleId) => {
    setLocaleState(next);
    window.localStorage.setItem(storageKey, next);
  }, []);

  useEffect(() => {
    const language = languages.find((item) => item.id === locale);
    document.documentElement.lang = language?.html ?? "en";
  }, [locale]);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      tr: (text: string) => translate(locale, text),
    }),
    [locale, setLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const value = useContext(LocaleContext);
  if (!value) {
    return {
      locale: "en" as LocaleId,
      setLocale: () => undefined,
      tr: (text: string) => text,
    };
  }
  return value;
}

export function useTr() {
  const { tr } = useLocale();
  return tr;
}

export { fill };
