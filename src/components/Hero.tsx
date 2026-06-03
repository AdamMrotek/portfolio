export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pt-28 pb-12 sm:pt-36 sm:pb-16"
    >
      {/* soft ambient gradient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(0,113,227,0.10), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-4xl text-center">
        <p className="reveal is-visible text-sm font-medium tracking-wide text-accent">
          Full-stack &amp; AI Engineer
        </p>
        <h1 className="reveal is-visible mt-5 text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-7xl">
          Adam Mrotek
        </h1>
        <p className="reveal is-visible mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          Full-stack engineer with a frontend lean and 4 years shipping
          product-grade web apps in London. Strongest in TypeScript, Vue 3 and
          React, with backend work in Python (FastAPI) and an active focus on
          applied LLM product engineering.
        </p>
        <div className="reveal is-visible mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#work"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-soft transition-colors hover:bg-accent-hover"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-hairline bg-surface px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink/5"
          >
            Get in touch
          </a>
        </div>
        {/* trust signals: real proof, not decoration */}
        <p className="reveal is-visible mt-9 text-sm text-muted">
          User platforms (3,000+ users) · AI developer tooling · Applied LLM
          products · United Kingdom
        </p>
      </div>
    </section>
  );
}
