import { useMemo, useRef, useState } from "react";
import {
  experience,
  education,
  certifications,
  positioning,
  type ExperienceEntry,
} from "../data/experience";
import { projects } from "../data/projects";
import { Section } from "./Section";
import { ResponsiveShowcase } from "./ResponsiveShowcase";
import { TextLink } from "./ProjectDetails";
import { useAlternatingTimeline } from "../hooks/useAlternatingTimeline";

// The one side project worth naming; everything else lives on the profile.
const broccoli = projects.find((project) => project.id === "broccoli");
const showroom = projects.find((project) => project.id === "showroom");

const asset = (file: string) => `${import.meta.env.BASE_URL}${file}`;

const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

/** "Jul 2023" → months since year 0, or null if it doesn't parse. */
function monthIndex(text: string): number | null {
  const match = text.trim().match(/^([A-Za-z]{3})[a-z]*\s+(\d{4})$/);
  if (!match) return null;
  const month = MONTHS.indexOf(match[1].toLowerCase());
  return month < 0 ? null : Number(match[2]) * 12 + month;
}

/** "Jul 2023 – Mar 2026" → "2y 9m", counting both end months (as LinkedIn does). */
function tenure(period: string): string | null {
  const [from = "", to = ""] = period.split(/\s+[–-]\s+/);
  const now = new Date();
  const start = monthIndex(from);
  const end = /present/i.test(to) ? now.getFullYear() * 12 + now.getMonth() : monthIndex(to);
  if (start === null || end === null || end < start) return null;
  const months = end - start + 1;
  const parts = [Math.floor(months / 12) && `${Math.floor(months / 12)}y`, months % 12 && `${months % 12}m`];
  return parts.filter(Boolean).join(" ");
}

type Bullet = NonNullable<ExperienceEntry["sections"]>[number]["bullets"][number];

/** Matches a stack term as a whole word ("Vue 3" also matches "Vue", but not "Vuex"). */
function termPattern(term: string): RegExp {
  const word = term.replace(/\s+\d+$/, "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(?<![A-Za-z0-9])(${word})(?![A-Za-z0-9])`, "g");
}

const bulletText = (b: Bullet) => `${b.lead ?? ""} ${b.text}`;

/** Wraps every match of the active term in a highlight. */
function Marked({ text, term }: { text: string; term: string | null }) {
  if (!term) return <>{text}</>;
  const parts = text.split(termPattern(term));
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <mark key={i} className="rounded-sm bg-highlight/15 px-0.5 text-ink">
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </>
  );
}

/**
 * One stack term. Terms that appear in the selected work light it up:
 * mouse on hover, keyboard on focus, touch on tap (tap again to clear).
 */
function StackTerm({
  term,
  active,
  onActive,
}: {
  term: string;
  active: boolean;
  onActive: (term: string | null) => void;
}) {
  const pointer = useRef("");
  return (
    <button
      type="button"
      aria-pressed={active}
      onPointerDown={(e) => (pointer.current = e.pointerType)}
      onPointerEnter={(e) => e.pointerType === "mouse" && onActive(term)}
      onPointerLeave={(e) => e.pointerType === "mouse" && onActive(null)}
      onFocus={(e) => e.currentTarget.matches(":focus-visible") && onActive(term)}
      onBlur={() => onActive(null)}
      onClick={() => {
        if (pointer.current !== "mouse") onActive(active ? null : term);
        pointer.current = "";
      }}
      className={`cursor-default rounded-sm underline decoration-dotted underline-offset-4 transition-colors ${
        active ? "text-ink decoration-highlight" : "text-ink-soft decoration-hairline hover:text-ink"
      }`}
    >
      {term}
    </button>
  );
}

/** Company side: logo and name, role, dates, a short description and the stack. */
function EntryInfo({
  entry,
  matchable,
  active,
  onActive,
}: {
  entry: ExperienceEntry;
  matchable: Set<string>;
  active: string | null;
  onActive: (term: string | null) => void;
}) {
  const length = tenure(entry.period);
  const terms = entry.stack?.split(", ") ?? [];
  return (
    <div>
      <div data-atl-rise className="flex items-center gap-2.5">
        {entry.logo && (
          <img
            src={asset(entry.logo)}
            alt=""
            aria-hidden
            loading="lazy"
            className="h-6 w-6 rounded-md object-cover"
          />
        )}
        <h3 className="text-[17px] font-medium tracking-tight text-ink">{entry.company}</h3>
      </div>
      <p data-atl-rise className="mt-2 text-[13px] text-muted">
        {entry.role}, {entry.location}
        <br />
        {entry.period}
        {length && ` (${length})`}
      </p>
      {entry.summary && (
        <p data-atl-rise className="mt-4 text-[13px] leading-relaxed text-muted">
          {entry.summary}
        </p>
      )}
      {terms.length > 0 && (
        <p data-atl-rise className="mt-4 text-[13px] leading-relaxed text-muted">
          {terms.map((term, i) => (
            <span key={term}>
              {matchable.has(term) ? (
                <StackTerm term={term} active={active === term} onActive={onActive} />
              ) : (
                term
              )}
              {i < terms.length - 1 && ", "}
            </span>
          ))}
        </p>
      )}
    </div>
  );
}

function Bullets({ bullets, term }: { bullets: Bullet[]; term: string | null }) {
  return (
    <ul className="mt-2.5 space-y-2.5">
      {bullets.map((bullet) => {
        const hit = !term || termPattern(term).test(bulletText(bullet));
        return (
          <li
            key={bullet.text}
            className={`text-[13px] leading-relaxed text-muted transition-opacity duration-200 ${
              hit ? "" : "opacity-35"
            }`}
          >
            {bullet.lead && (
              <span className="text-ink">
                <Marked text={bullet.lead} term={term} />{" "}
              </span>
            )}
            <Marked text={bullet.text} term={term} />
          </li>
        );
      })}
    </ul>
  );
}

/** Work side: the first section is shown, any further ones fold into an expandable. */
function SelectedWork({ entry, term }: { entry: ExperienceEntry; term: string | null }) {
  const [first, ...rest] = entry.sections ?? [];
  if (!first) return null;
  const restLabel = rest.map((section) => section.label).filter(Boolean).join(", ") || "More";
  // Flag the closed expandable when the highlighted term is hiding inside it.
  const restHit =
    !!term && rest.some((section) => section.bullets.some((b) => termPattern(term).test(bulletText(b))));

  return (
    <div>
      <div data-atl-rise>
        <p className="text-xs text-muted">{first.label ?? "Selected work"}</p>
        <Bullets bullets={first.bullets} term={term} />
      </div>
      {rest.length > 0 && (
        <details data-atl-rise className="expand group mt-5">
          <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 text-[13px] font-medium text-ink [&::-webkit-details-marker]:hidden">
            <span className={`rounded-sm px-0.5 -mx-0.5 transition-colors ${restHit ? "bg-highlight/15" : ""}`}>
              {restLabel}
            </span>
            <span aria-hidden className="text-muted transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="mt-2 space-y-5">
            {rest.map((section, i) => (
              <Bullets key={section.label ?? i} bullets={section.bullets} term={term} />
            ))}
          </div>
        </details>
      )}
    </div>
  );
}

function TimelineEntry({ entry, flip }: { entry: ExperienceEntry; flip: boolean }) {
  const [term, setTerm] = useState<string | null>(null);

  // Only stack terms that actually appear in the selected work are interactive.
  const matchable = useMemo(() => {
    const text = (entry.sections ?? []).flatMap((s) => s.bullets.map(bulletText)).join(" ");
    return new Set((entry.stack?.split(", ") ?? []).filter((t) => termPattern(t).test(text)));
  }, [entry]);

  return (
    <li
      data-atl-item
      className="grid grid-cols-[15px_1fr] gap-x-6 md:grid-cols-[1fr_96px_1fr] md:gap-x-0"
    >
      <span
        data-atl-dot
        aria-hidden
        className="atl-dot col-start-1 row-start-1 mt-[5px] md:col-start-2 md:justify-self-center"
      />

      <div
        className={`col-start-2 row-start-1 w-full max-w-[400px] ${
          flip ? "md:col-start-3" : "md:col-start-1 md:justify-self-end"
        }`}
      >
        <EntryInfo entry={entry} matchable={matchable} active={term} onActive={setTerm} />
      </div>

      {entry.sections && (
        <div
          className={`col-start-2 row-start-2 mt-8 w-full max-w-[400px] md:row-start-1 md:mt-0 ${
            flip ? "md:col-start-1 md:justify-self-end" : "md:col-start-3"
          }`}
        >
          <SelectedWork entry={entry} term={term} />
        </div>
      )}
    </li>
  );
}

function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  useAlternatingTimeline(ref);

  return (
    <div ref={ref} className="relative mt-20">
      {/* the line: a hairline track, the ink fill that draws with the scroll, and its head */}
      <div
        data-atl-rail
        aria-hidden
        className="pointer-events-none absolute top-0 bottom-0 left-[7px] w-px md:left-1/2 md:-translate-x-1/2"
      >
        <div className="absolute inset-0 bg-hairline" />
        <div data-atl-fill className="absolute inset-0 origin-top bg-ink" />
        <span
          data-atl-head
          className="absolute left-1/2 top-0 h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink"
        />
      </div>

      <ol className="space-y-24 md:space-y-36">
        {experience.map((entry, i) => (
          <TimelineEntry key={entry.id} entry={entry} flip={i % 2 === 1} />
        ))}
      </ol>
    </div>
  );
}

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      description={positioning}
      background="surface"
    >
      <Timeline />

      <div className="mt-32 grid gap-14 border-t border-hairline pt-12 lg:grid-cols-2">
        <div>
          <h3 className="text-xs text-muted">Education</h3>
          <ul className="mt-4 divide-y divide-hairline">
            {education.map((edu) => (
              <li
                key={`${edu.qualification}-${edu.period}`}
                className="flex items-baseline justify-between gap-6 py-3.5"
              >
                <div>
                  <p className="text-[14px] text-ink">{edu.qualification}</p>
                  <p className="text-[13px] text-muted">
                    {edu.institution}
                    {edu.note && `, ${edu.note}`}
                  </p>
                </div>
                <p className="shrink-0 text-xs text-muted">{edu.period}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs text-muted">Certification</h3>
          <ul className="mt-4 divide-y divide-hairline">
            {certifications.map((cert) => (
              <li key={cert.name} className="py-3.5">
                <div className="flex items-baseline justify-between gap-6">
                  <p className="text-[14px] text-ink">
                    {cert.url ? (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noreferrer"
                        className="underline decoration-hairline underline-offset-4 transition-colors hover:decoration-ink"
                      >
                        {cert.name}
                      </a>
                    ) : (
                      cert.name
                    )}
                  </p>
                  {cert.date && <p className="shrink-0 text-xs text-muted">{cert.date}</p>}
                </div>
                <p className="text-[13px] text-muted">{cert.issuer}</p>
                {cert.summary && (
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">{cert.summary}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-xs text-muted">Side projects</h3>
        {showroom && (
          <div className="mt-6 grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
            <div className="px-2 pb-6 sm:px-4">
              <ResponsiveShowcase
                desktopSrc={showroom.desktopImage ?? ""}
                mobileSrc={showroom.mobileImage ?? ""}
                label={showroom.name}
                desktopAspect={showroom.desktopAspect}
                mobileAspect={showroom.mobileAspect}
              />
            </div>
            <div>
              <p className="text-xs text-muted">{showroom.eyebrow}</p>
              <h4 className="mt-2 text-[17px] font-medium tracking-tight text-ink">
                {showroom.name}
              </h4>
              <p className="mt-3 text-[13px] leading-relaxed text-muted">{showroom.summary}</p>
              <p className="mt-4 text-xs leading-relaxed text-muted">
                {showroom.tags.join(", ")}
              </p>
            </div>
          </div>
        )}
        <p className="mt-10 max-w-2xl text-[13px] leading-relaxed text-muted">
          {broccoli && (
            <>
              <span className="text-ink">{broccoli.name}:</span> {broccoli.summary}{" "}
            </>
          )}
          My GitHub also has drone tracking, a server-side library app and
          earlier experiments.
        </p>
        <div className="mt-4">
          <TextLink href="https://github.com/AdamMrotek">GitHub profile</TextLink>
        </div>
      </div>
    </Section>
  );
}
