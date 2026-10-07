import { aiProjects } from "../data/projects";
import { Reveal } from "./Reveal";
import { ResponsiveShowcase } from "./ResponsiveShowcase";

export function AIProjects() {
  return (
    <>
      {aiProjects.map((project) => (
        <section
          key={project.id}
          className="snap-section px-6 pt-8 pb-16 sm:pt-10 sm:pb-20"
        >
          <div className="mx-auto max-w-6xl">
            {/* eyebrow + title + description above */}
            <Reveal>
              <div className="max-w-3xl">
                <p className="text-sm font-medium text-accent">
                  {project.eyebrow}
                </p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  {project.name}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">
                  {project.summary}
                </p>
              </div>
            </Reveal>

            <Reveal className="mt-8">
              <div className="grid items-start gap-8 lg:grid-cols-[1.45fr_1fr] lg:gap-0">
                {/* mockups */}
                <div className="px-2 sm:px-4 lg:pr-12">
                  <ResponsiveShowcase
                    desktopSrc={project.desktopImage ?? project.image ?? ""}
                    mobileSrc={project.mobileImage ?? ""}
                    label={project.name}
                    desktopAspect={project.desktopAspect}
                    mobileAspect={project.mobileAspect}
                  />
                </div>

                {/* information on the side, behind a vertical divider */}
                <div className="flex flex-col justify-center lg:border-l lg:border-hairline lg:pl-12">
                  {project.highlights && (
                    <ul className="space-y-2">
                      {project.highlights.map((point) => (
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
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-hairline bg-canvas px-3 py-1 text-xs font-medium text-ink-soft"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-hairline px-5 py-2 text-sm font-medium text-ink transition-colors hover:bg-ink/5"
                      >
                        Live app →
                      </a>
                    )}
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-hairline px-5 py-2 text-sm font-medium text-ink transition-colors hover:bg-ink/5"
                    >
                      View on GitHub →
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ))}
    </>
  );
}
