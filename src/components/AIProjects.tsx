import { aiProjects } from "../data/projects";
import { ResponsiveShowcase } from "./ResponsiveShowcase";
import { ProjectDetails, ProjectHeader } from "./ProjectDetails";

export function AIProjects() {
  return (
    <>
      {aiProjects.map((project) => (
        <section key={project.id} className="snap-section px-6 py-24 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div>
              <ProjectHeader project={project} />
            </div>

            <div className="mt-12">
              <div className="grid items-start gap-10 lg:grid-cols-[1.45fr_1fr] lg:gap-0">
                <div className="px-2 sm:px-4 lg:pr-12">
                  <ResponsiveShowcase
                    desktopSrc={project.desktopImage ?? project.image ?? ""}
                    mobileSrc={project.mobileImage ?? ""}
                    label={project.name}
                    desktopAspect={project.desktopAspect}
                    mobileAspect={project.mobileAspect}
                  />
                </div>
                <ProjectDetails project={project} />
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
