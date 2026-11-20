import { useState } from "react";
import { featured } from "../data/projects";
import { ResponsiveShowcase } from "./ResponsiveShowcase";
import { ProjectVideo } from "./ProjectVideo";
import { ProjectDetails, ProjectHeader } from "./ProjectDetails";

export function FeaturedProject() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section id="work" className="snap-section px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div>
          <ProjectHeader project={featured} />
        </div>

        <div className="mt-12">
          {showDemo && featured.video ? (
            <div className="relative mx-auto w-full max-w-[1000px] overflow-hidden rounded-[var(--radius-card)] bg-ink">
              <button
                type="button"
                onClick={() => setShowDemo(false)}
                className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-1.5 text-[13px] font-medium text-white transition-colors hover:bg-accent-hover"
              >
                <ChevronLeftIcon />
                Back to overview
              </button>
              <ProjectVideo
                src={featured.video}
                poster={featured.videoPoster ?? featured.image}
                label={featured.name}
                controls
                className="aspect-[1920/1162] object-contain"
              />
            </div>
          ) : (
            <div className="grid items-start gap-10 lg:grid-cols-[1.45fr_1fr] lg:gap-0">
              <div className="px-2 sm:px-4 lg:pr-12">
                <ResponsiveShowcase
                  desktopSrc={featured.desktopImage ?? featured.image ?? ""}
                  mobileSrc={featured.mobileImage ?? ""}
                  label={featured.name}
                />
              </div>
              <ProjectDetails
                project={featured}
                actions={
                  featured.video && (
                    <button
                      type="button"
                      onClick={() => setShowDemo(true)}
                      className="inline-flex items-center gap-2 rounded-full bg-highlight px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-highlight-hover"
                    >
                      <PlayIcon />
                      Watch demo
                    </button>
                  )
                }
              />
            </div>
          )}
        </div>
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
    <svg aria-hidden viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3">
      <path d="M4 2.5v11l9-5.5-9-5.5Z" />
    </svg>
  );
}
