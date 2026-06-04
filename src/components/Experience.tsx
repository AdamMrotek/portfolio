import {
  experience,
  education,
  certifications,
  facts,
  positioning,
  type ExperienceEntry,
} from "../data/experience";
import { projects } from "../data/projects";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

// The one side project worth naming; everything else lives on the profile.
const broccoli = projects.find((project) => project.id === "broccoli");
import { useScrollProgress } from "../hooks/useScrollProgress";
import { usePassedAnchor } from "../hooks/usePassedAnchor";

function TimelineEntry({ entry }: { entry: ExperienceEntry }) {
  const isPre = entry.kind === "pre";
  const { ref: nodeRef, passed } = usePassedAnchor<HTMLSpanElement>();

  return (
    <Reveal as="li" className="relative pl-20 sm:pl-24">
      {/* node: 48px circle holding the company icon, lit by the rail as it passes */}
      <span
        ref={nodeRef}
        className={`absolute left-2 top-0.5 z-10 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border bg-surface transition-all duration-500 ${
          passed && !isPre
            ? "border-accent shadow-[0_0_0_4px_color-mix(in_srgb,var(--color-accent)_14%,transparent)]"
            : "border-hairline"
        }`}
      >
        {entry.logo ? (
          <img
            src={`${import.meta.env.BASE_URL}${entry.logo}`}
            alt=""
            aria-hidden
            className="h-full w-full object-cover"
          />
        ) : (
          <span
            aria-hidden
            className={`text-lg font-semibold ${
              passed && !isPre ? "text-accent" : "text-muted"
            }`}
          >
            {entry.company.charAt(0)}
          </span>
        )}
      </span>

      <div
        className={`rounded-[var(--radius-card)] border border-hairline bg-surface p-7 shadow-soft sm:p-8 ${
          isPre ? "opacity-90" : ""
        }`}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-xl font-semibold tracking-tight text-ink">
            {entry.role}
            <span className="text-accent"> · {entry.company}</span>
          </h3>
          <p className="text-sm font-medium text-muted">{entry.period}</p>
        </div>
        <p className="mt-1 text-sm text-muted">{entry.location}</p>

        {entry.summary && (
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
            {entry.summary}
          </p>
        )}

        {entry.sections?.map((section, i) => (
          <div key={section.label ?? i} className="mt-6">
            {section.label && (
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                {section.label}
              </p>
            )}
            <ul className={`space-y-3 ${section.label ? "mt-3" : ""}`}>
              {section.bullets.map((bullet) => (
                <li
                  key={bullet.text}
                  className="flex gap-3 text-[15px] leading-relaxed text-ink-soft"
                >
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70"
                  />
                  <span>
                    {bullet.lead && (
                      <strong className="font-semibold text-ink">
                        {bullet.lead}{" "}
                      </strong>
                    )}
                    {bullet.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {entry.stack && (
          <p className="mt-6 border-t border-hairline pt-4 text-xs leading-relaxed text-muted">
            {entry.stack}
          </p>
        )}
      </div>
    </Reveal>
  );
}

function Timeline() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();

  return (
    <div ref={ref} className="relative mt-14">
      {/* gradient rail that fills as you scroll */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-8 top-2 bottom-2 w-1 -translate-x-1/2"
      >
        {/* unfilled track */}
        <div className="absolute inset-0 rounded-full bg-hairline/60" />
        {/* filled portion — the gradient is mapped to the FULL rail height and
            clipped to the scroll progress, so the colours stay put as it grows */}
        <div
          className="absolute inset-x-0 top-0 overflow-hidden rounded-full"
          style={{
            height: `${progress * 100}%`,
            // soften the leading tip so it fades into the track instead of a hard cut
            maskImage:
              "linear-gradient(to bottom, #000 calc(100% - 64px), transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, #000 calc(100% - 64px), transparent)",
          }}
        >
          <div
            className="absolute inset-x-0 top-0 rounded-full bg-gradient-to-b from-[#8b5cf6] via-[#0071e3] to-[#22d3ee]"
            style={{ height: progress > 0 ? `${100 / progress}%` : "0%" }}
          />
        </div>
      </div>

      <ol className="space-y-10">
        {experience.map((entry) => (
          <TimelineEntry key={entry.id} entry={entry} />
        ))}
      </ol>
    </div>
  );
}

export function Experience() {
  return (
    <Section
      eyebrowId="experience"
      eyebrow="Architecture to software"
      title="Experience"
      description={positioning}
      background="surface"
      width="4xl"
      headerExtra={
        <dl className="mt-7">
          <dt className="text-xs font-semibold uppercase tracking-wide text-accent">
            Location
          </dt>
          <dd className="mt-1 text-[15px] text-ink-soft">{facts.location}</dd>
        </dl>
      }
    >
        {/* timeline */}
        <Timeline />

        {/* certifications */}
        <Reveal className="mt-16">
          <h3 className="text-2xl font-semibold tracking-tight text-ink">
            Certifications
          </h3>
          <ul className="mt-6 space-y-4">
            {certifications.map((cert) => (
              <li
                key={cert.name}
                className="rounded-[var(--radius-card)] border border-hairline bg-canvas p-6"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  {cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-ink transition-colors hover:text-accent"
                    >
                      {cert.name} ↗
                    </a>
                  ) : (
                    <p className="font-medium text-ink">{cert.name}</p>
                  )}
                  <div className="text-right">
                    <p className="text-sm font-medium text-muted">
                      {cert.issuer}
                    </p>
                    {cert.date && (
                      <p className="text-xs text-muted">{cert.date}</p>
                    )}
                  </div>
                </div>
                {cert.summary && (
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                    {cert.summary}
                  </p>
                )}
                {cert.skills && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-hairline bg-surface px-3 py-1 text-xs font-medium text-ink-soft"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* education */}
        <Reveal className="mt-16">
          <h3 className="text-2xl font-semibold tracking-tight text-ink">
            Education
          </h3>
          <ul className="mt-6 divide-y divide-hairline overflow-hidden rounded-[var(--radius-card)] border border-hairline bg-canvas">
            {education.map((edu) => (
              <li
                key={`${edu.qualification}-${edu.period}`}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 p-6"
              >
                <div>
                  <p className="font-medium text-ink">{edu.qualification}</p>
                  <p className="text-sm text-muted">{edu.institution}</p>
                  {edu.note && (
                    <p className="mt-0.5 text-sm text-muted">{edu.note}</p>
                  )}
                </div>
                <p className="text-sm font-medium text-muted">{edu.period}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* side projects */}
        <Reveal className="mt-16">
          <h3 className="text-2xl font-semibold tracking-tight text-ink">
            Side projects
          </h3>
          <a
            href="https://github.com/AdamMrotek"
            target="_blank"
            rel="noreferrer"
            className="mt-6 flex flex-col items-start rounded-[var(--radius-card)] border border-hairline bg-canvas p-6 transition-colors hover:border-accent/40"
          >
            <p className="text-[15px] leading-relaxed text-ink-soft">
              {broccoli && (
                <>
                  <span className="font-semibold text-ink">
                    {broccoli.name}
                  </span>
                  {" — "}
                  {broccoli.summary}{" "}
                </>
              )}
              Alongside it: drone tracking, a server-side library app, and
              earlier experiments — all on my profile.
            </p>
            <span className="mt-5 text-sm font-medium text-accent">
              Browse repositories →
            </span>
          </a>
        </Reveal>
    </Section>
  );
}
