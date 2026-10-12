import { Link } from "@tanstack/react-router";
import { useLayoutEffect, useRef } from "react";

const tabs = [
  { to: "/", label: "Home", exact: true },
  { to: "/people", label: "People", exact: false },
  { to: "/places", label: "Places", exact: false },
  { to: "/beliefs", label: "Beliefs", exact: true },
  { to: "/time", label: "Time", exact: true },
  { to: "/quiz", label: "Quiz", exact: true },
  { to: "/work", label: "Work", exact: true },
  { to: "/about", label: "About", exact: true },
  { to: "/projects", label: "Projects", exact: true },
] as const;

export function SiteHeader() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;
    const apply = () => {
      document.documentElement.style.setProperty("--header-h", `${node.offsetHeight}px`);
    };
    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref} className="sticky top-0 z-40 border-b border-ink/15 bg-cream/95 backdrop-blur-sm">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:bg-yew focus:px-3 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      <div className="mx-auto w-full max-w-5xl px-3 py-2">
        <Link to="/" className="font-serif text-2xl leading-none text-russet sm:text-3xl">
          Every English Ever
        </Link>
        <nav aria-label="Sections" className="mt-2 grid grid-cols-3 gap-1.5">
          {tabs.map((tab) => (
            <Link
              key={tab.label}
              to={tab.to}
              activeOptions={{ exact: tab.exact }}
              inactiveProps={{
                className:
                  "flex min-h-11 items-center justify-center rounded-lg border border-yew/25 bg-cream px-1 text-center text-sm font-semibold text-ink",
              }}
              activeProps={{
                className:
                  "flex min-h-11 items-center justify-center rounded-lg border border-yew bg-yew px-1 text-center text-sm font-semibold text-cream",
              }}
            >
              {tab.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
