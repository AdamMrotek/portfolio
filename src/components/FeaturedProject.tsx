import { useState } from "react";
import { featured } from "../data/projects";
import { Reveal } from "./Reveal";
import { ResponsiveShowcase } from "./ResponsiveShowcase";
import { ProjectVideo } from "./ProjectVideo";

export function FeaturedProject() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section className="snap-section px-6 pt-8 pb-16 sm:pt-10 sm:pb-20">
      <div className="mx-auto max-w-6xl">
        {/* eyebrow + title + description above */}
        <Reveal>
          <div className="max-w-3xl">
            <p id="work" className="text-sm font-medium text-accent">
              {featured.eyebrow}
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {featured.name}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">
              {featured.summary}
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-8">
          {showDemo && featured.video ? (
            <div className="relative overflow-hidden rounded-[var(--radius-card)] border border-hairline bg-ink shadow-soft">
              <button
                type="button"
                onClick={() => setShowDemo(false)}
                className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-ink/65 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-ink/85"
              >
                <ChevronLeftIcon />
                Back to overview
              </button>
              <ProjectVideo
                src={featured.video}
                poster={featured.videoPoster ?? featured.image}
                label={featured.name}
                className="aspect-[1920/1162] object-contain"
              />
            </div>
          ) : (
            <div className="grid items-start gap-8 lg:grid-cols-[1.45fr_1fr] lg:gap-0">
              {/* mockups */}
              <div className="px-2 sm:px-4 lg:pr-12">
                <ResponsiveShowcase
                  desktopSrc={featured.desktopImage ?? featured.image ?? ""}
                  mobileSrc={featured.mobileImage ?? ""}
                  label={featured.name}
                />
              </div>

              {/* information on the side, behind a vertical divider */}
              <div className="flex flex-col justify-center lg:border-l lg:border-hairline lg:pl-12">
                {featured.highlights && (
                  <ul className="space-y-2">
                    {featured.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span
                          aria-hidden
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                <ul className="mt-5 flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-hairline bg-canvas px-3 py-1 text-xs font-medium text-ink-soft"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  {featured.video && (
                    <button
                      type="button"
                      onClick={() => setShowDemo(true)}
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
                    >
                      <PlayIcon />
                      See happy path demo
                    </button>
                  )}
                  {featured.liveUrl && (
                    <a
                      href={featured.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-hairline px-5 py-2 text-sm font-medium text-ink transition-colors hover:bg-ink/5"
                    >
                      Live app →
                    </a>
                  )}
                  {featured.pocUrl && (
                    <a
                      href={featured.pocUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-hairline px-5 py-2 text-sm font-medium text-ink transition-colors hover:bg-ink/5"
                    >
                      Try the PoC →
                    </a>
                  )}
                  <a
                    href={featured.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-hairline px-5 py-2 text-sm font-medium text-ink transition-colors hover:bg-ink/5"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function ChevronLeftIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      fill="none"
      className="h-4 w-4"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 12 6 8l4-4" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg aria-hidden viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M4 2.5v11l9-5.5-9-5.5Z" />
    </svg>
  );
}
