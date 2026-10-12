import type { Person, RoleId } from "@/data/types";
import { pictures } from "@/data/pictures";
import { Photo } from "./photo";

function hash(value: string) {
  let total = 0;
  for (const char of value) total = (total * 33 + char.charCodeAt(0)) >>> 0;
  return total;
}

const roleLabel: Record<RoleId, string> = {
  ruler: "a crown",
  writer: "a book",
  scientist: "a star",
  maker: "a wheel",
  artist: "a brush",
  healer: "a leaf",
  explorer: "a ship",
  helper: "a heart",
};

function RoleMark({ role }: { role: RoleId }) {
  if (role === "ruler") return <path d="M18 28 L22 18 L26 26 L32 16 L36 26 L42 18 L46 28 Z" />;
  if (role === "writer") return <rect x="22" y="16" width="20" height="16" rx="1" />;
  if (role === "scientist") return <polygon points="32,14 36,24 46,24 38,30 41,40 32,34 23,40 26,30 18,24 28,24" />;
  if (role === "maker") return <circle cx="32" cy="26" r="8" />;
  if (role === "artist") return <path d="M20 34 C28 18 40 16 46 24" />;
  if (role === "healer") return <path d="M32 14 C24 22 22 30 32 40 C42 30 40 22 32 14 Z" />;
  if (role === "explorer") return <path d="M18 34 L32 14 L46 34 Z" />;
  return <path d="M32 38 C20 30 18 20 32 16 C46 20 44 30 32 38 Z" />;
}

export function Portrait({ person }: { person: Person }) {
  const picture = person.picture ? pictures[person.picture] : undefined;
  if (picture) {
    return (
      <div>
        <Photo
          picture={picture}
          contain
          alt={`${person.name}. ${picture.kind === "painting" ? "A painting or an old drawing." : "A photograph."}`}
        />
        {picture.kind === "painting" ? (
          <p className="mt-2 text-sm">This is a painting or an old drawing, not a photograph.</p>
        ) : null}
      </div>
    );
  }

  const tone = hash(person.slug) % 2 === 0 ? "text-yew" : "text-russet";
  return (
    <figure className="max-w-xs">
      <svg viewBox="0 0 64 64" className={`h-40 w-40 rounded-full border border-ink/15 bg-yew/10 ${tone}`} aria-hidden="true">
        <circle cx="32" cy="24" r="10" fill="currentColor" opacity="0.85" />
        <path d="M14 58 C16 40 22 36 32 36 C42 36 48 40 50 58" fill="currentColor" opacity="0.75" />
        <g fill="none" stroke="var(--color-gold)" strokeWidth="2">
          <RoleMark role={person.role} />
        </g>
      </svg>
      <figcaption className="mt-2 text-sm">
        A drawing, not a photograph. The mark stands for {roleLabel[person.role]}.
      </figcaption>
    </figure>
  );
}
