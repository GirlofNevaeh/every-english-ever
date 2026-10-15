import { useEffect, useRef, useState } from "react";
import { useTr } from "@/i18n/locale";

const storageKey = "eee-cookie-notice";

export function CookieNotice() {
  const tr = useTr();
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(storageKey) !== "1") setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!open || !node) return;
    const apply = () => {
      document.documentElement.style.setProperty("--cookie-h", `${node.offsetHeight}px`);
    };
    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(node);
    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty("--cookie-h");
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      role="region"
      aria-label={tr("Cookies")}
      className="no-print fixed inset-x-0 bottom-0 z-50 border-t border-ink/15 bg-cream px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-3xl">
          {tr("This device remembers your language, and your access key if you enter one. There are no tracking cookies.")}
        </p>
        <button
          type="button"
          className="min-h-11 shrink-0 rounded-lg bg-yew px-4 font-semibold text-cream"
          onClick={() => {
            try {
              window.localStorage.setItem(storageKey, "1");
            } catch {
              /* The notice can still close if storage is blocked. */
            }
            setOpen(false);
          }}
        >
          {tr("OK")}
        </button>
      </div>
    </div>
  );
}
