import { SectionHeader } from "./Section";

export function About() {
  return (
    <section id="about" className="snap-section px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <SectionHeader title="About" />
          <div className="mt-8 max-w-xl space-y-4 leading-relaxed text-muted">
            <p>
              I came to engineering from architecture, with an MSc in
              parametric design and BIM. That background still shapes how I
              build software, as many interdependent parts that have to work
              as one product.
            </p>
            <p>
              For the last four years in London I&apos;ve shipped web apps from
              first commit to production: React and Next.js front ends, FastAPI
              back ends, and the AI tooling around them. I write typed
              contracts and automated tests, and I evaluate anything that
              touches an LLM.
            </p>
            <p>
              Being a father taught me to focus under real constraints, and I
              bring that to my work.
            </p>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={`${import.meta.env.BASE_URL}adam.jpg`}
            alt="Adam Mrotek"
            loading="lazy"
            className="aspect-[4/5] w-56 rounded-[var(--radius-card)] object-cover sm:w-64"
          />
        </div>
      </div>
    </section>
  );
}
