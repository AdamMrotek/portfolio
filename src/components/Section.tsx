import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Background = "canvas" | "surface";

// canvas is the page default (body bg), so it needs no class of its own.
const backgroundClass: Record<Background, string> = {
  canvas: "",
  surface: "bg-surface",
};

type SectionHeaderProps = {
  /** Small blue line shown above the title. */
  eyebrow: string;
  /** Optional id for the eyebrow text (e.g. for anchor links). */
  eyebrowId?: string;
  title: string;
  /** Optional supporting paragraph under the title. */
  description?: ReactNode;
};

/**
 * The standard heading every section shares: a blue eyebrow over a large title,
 * with an optional supporting line. Kept separate from `Section` so the
 * grid-based sections (About, Contact) can drop it inside a column.
 */
export function SectionHeader({ eyebrow, eyebrowId, title, description }: SectionHeaderProps) {
  return (
    <>
      <p
        id={eyebrowId}
        className="text-sm font-medium text-accent"
      >
        {eyebrow}
      </p>
      <h2 className="mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-muted">{description}</p>
      )}
    </>
  );
}

type SectionProps = SectionHeaderProps & {
  id?: string;
  background?: Background;
  /** Container width — most sections are 6xl; the reading-heavy timeline is 4xl. */
  width?: "4xl" | "6xl";
  /** Extra header content rendered under the title block (e.g. a meta list). */
  headerExtra?: ReactNode;
  /** Make this section a gentle scroll-snap point (snaps to its title). */
  snap?: boolean;
  children: ReactNode;
};

/**
 * Full section shell: consistent vertical rhythm, background, container width
 * and a scroll-revealed `SectionHeader`. The section body is passed as children.
 */
export function Section({
  id,
  eyebrow,
  eyebrowId,
  title,
  description,
  background = "canvas",
  width = "6xl",
  headerExtra,
  snap = false,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`px-6 py-24 sm:py-32 ${backgroundClass[background]}${snap ? " snap-section" : ""}`}
    >
      <div className={`mx-auto ${width === "4xl" ? "max-w-4xl" : "max-w-6xl"}`}>
        <Reveal as="header" className="max-w-2xl">
          <SectionHeader
            eyebrow={eyebrow}
            eyebrowId={eyebrowId}
            title={title}
            description={description}
          />
          {headerExtra}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
