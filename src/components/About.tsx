import { Reveal } from "./Reveal";
import { SectionHeader } from "./Section";

export function About() {
  return (
    <section className="snap-section px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <SectionHeader eyebrow="Who I am" eyebrowId="about" title="About" />
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              I came to engineering from architecture — an MSc in parametric
              design and BIM — and that systems-thinking still shapes how I build
              software: large, interdependent parts that have to work as one
              coherent product.
            </p>
            <p>
              Over the last four years in London I&apos;ve shipped product-grade
              web apps end to end — React and Next.js front ends (TanStack Query,
              shadcn/ui), Python back ends (FastAPI), and the AI-aided tooling
              around them. I care about engineering discipline: typed contracts,
              automated QA (Vitest, Playwright, Storybook), and eval-driven
              development for anything touching an LLM.
            </p>
            <p>
              Being a father taught me dedication and focus under real
              constraints — I bring that same commitment to every project I take
              on.
            </p>
          </div>
        </Reveal>

        <Reveal className="flex justify-center lg:justify-end">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2rem]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,113,227,0.18), rgba(94,92,230,0.12))",
              }}
            />
            <img
              src={`${import.meta.env.BASE_URL}adam.jpg`}
              alt="Adam Mrotek"
              loading="lazy"
              className="h-64 w-64 rounded-[1.75rem] object-cover shadow-lift sm:h-72 sm:w-72"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
