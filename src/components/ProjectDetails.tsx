import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import type { DetailTab, Project } from "../data/projects";

export function ProjectHeader({ project }: { project: Project }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs text-muted">{project.eyebrow}</p>
      <h2 className="mt-3 text-[2rem] leading-[1.05] text-ink sm:text-[2.6rem]">
        {project.name}
      </h2>
      <p className="mt-4 leading-relaxed text-muted">{project.summary}</p>
    </div>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-[13px] font-medium text-ink underline decoration-hairline underline-offset-4 transition-colors hover:decoration-ink"
    >
      {children}
    </a>
  );
}

/**
 * Tabbed write-up (e.g. product vs technical). Follows the WAI-ARIA tabs
 * pattern: arrow keys / Home / End move between tabs, only the active tab is
 * in the tab order.
 */
function DetailTabs({ tabs }: { tabs: DetailTab[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const base = useId();

  const select = (i: number) => {
    const next = (i + tabs.length) % tabs.length;
    setActive(next);
    refs.current[next]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent) => {
    const keys: Record<string, number> = {
      ArrowRight: active + 1,
      ArrowLeft: active - 1,
      Home: 0,
      End: tabs.length - 1,
    };
    if (e.key in keys) {
      e.preventDefault();
      select(keys[e.key]);
    }
  };

  return (
    <div>
      <div role="tablist" className="flex gap-6 border-b border-hairline" onKeyDown={onKeyDown}>
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${base}-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`${base}-panel-${i}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className={`-mb-px border-b pb-2.5 text-[13px] font-medium transition-colors ${
              i === active
                ? "border-ink text-ink"
                : "border-transparent text-muted hover:text-ink"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab, i) => (
        <dl
          key={tab.label}
          role="tabpanel"
          id={`${base}-panel-${i}`}
          aria-labelledby={`${base}-tab-${i}`}
          hidden={i !== active}
          className="mt-5 space-y-4"
        >
          {tab.items.map((item) => (
            <div key={item.title}>
              <dt className="text-[13px] text-ink">{item.title}</dt>
              <dd className="mt-0.5 text-[13px] leading-relaxed text-muted">{item.text}</dd>
            </div>
          ))}
        </dl>
      ))}
    </div>
  );
}

/** Right-hand column of a project: highlights or tabs, the tech used, and links. */
export function ProjectDetails({
  project,
  actions,
}: {
  project: Project;
  /** Extra controls rendered before the links (e.g. the demo button). */
  actions?: ReactNode;
}) {
  return (
    // Tabs change height when switched, so pin them to the top rather than
    // centring (which would make the tab bar jump).
    <div className={`flex flex-col lg:pl-12 ${project.tabs ? "justify-start" : "justify-center"}`}>
      {project.tabs && <DetailTabs tabs={project.tabs} />}
      {!project.tabs && project.highlights && (
        <ul className="space-y-4">
          {project.highlights.map((point) => (
            <li key={point} className="text-[13px] leading-relaxed text-muted">
              {point}
            </li>
          ))}
        </ul>
      )}

      <p className="mt-6 text-xs leading-relaxed text-muted">{project.tags.join(", ")}</p>

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
        {actions}
        {project.liveUrl &&
          (project.liveLabel ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-highlight px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-highlight-hover"
            >
              {project.liveLabel}
            </a>
          ) : (
            <TextLink href={project.liveUrl}>Live app</TextLink>
          ))}
        {project.pocUrl && <TextLink href={project.pocUrl}>Prototype</TextLink>}
        {project.repoUrl && <TextLink href={project.repoUrl}>GitHub</TextLink>}
      </div>
    </div>
  );
}
