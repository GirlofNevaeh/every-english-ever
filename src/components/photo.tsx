import type { Picture } from "@/data/types";

export function Photo({
  picture,
  alt,
  className = "",
  contain = false,
}: {
  picture: Picture;
  alt?: string;
  className?: string;
  contain?: boolean;
}) {
  return (
    <figure className="overflow-hidden rounded-card border border-ink/15 bg-cream">
      <img
        src={picture.src}
        alt={alt ?? picture.alt}
        className={`aspect-[3/2] w-full bg-cream ${contain || picture.kind === "painting" ? "object-contain" : "object-cover"} ${className}`}
      />
      <figcaption className="border-t border-ink/10 px-3 py-2 text-sm leading-snug text-ink">
        {picture.maker}. {picture.licence}.{" "}
        <a className="underline decoration-russet underline-offset-2" href={picture.source}>
          Source
        </a>
      </figcaption>
    </figure>
  );
}
