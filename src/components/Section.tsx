import type { ReactNode } from "react";

type Background = "canvas" | "surface";

// canvas is the page default (body bg), so it needs no class of its own.
const backgroundClass: Record<Background, string> = {
  canvas: "",
  surface: "bg-surface",
};

type SectionHeaderProps = {
  title: string;
  /** Optional supporting paragraph under the title. */
  description?: ReactNode;
};

/**
 * The heading every section shares: a serif title with an optional
 * supporting line. Kept separate from `Section` so the grid-based sections
 * (About, Contact) can drop it inside a column.
 */
export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <>
      <h2 className="text-[2rem] leading-[1.05] text-ink sm:text-[2.6rem]">{title}</h2>
      {description && (
        <p className="mt-5 max-w-xl leading-relaxed text-muted">{description}</p>
      )}
    </>
  );
}

type SectionProps = SectionHeaderProps & {
  /** Anchor id, used by the nav. */
  id?: string;
  background?: Background;
  /** Make this section a gentle scroll-snap point. */
  snap?: boolean;
  children: ReactNode;
};

/**
 * Full section shell: consistent vertical rhythm, background, container width
 * and a `SectionHeader`. The section body is passed as children.
 */
export function Section({
  id,
  title,
  description,
  background = "canvas",
  snap = false,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`px-6 py-24 sm:py-32 ${backgroundClass[background]}${snap ? " snap-section" : ""}`}
    >
      <div className="mx-auto max-w-6xl">
        <header className="max-w-2xl">
          <SectionHeader title={title} description={description} />
        </header>
        {children}
      </div>
    </section>
  );
}
