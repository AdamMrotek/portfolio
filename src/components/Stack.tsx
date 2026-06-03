import { stack } from "../data/stack";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Stack() {
  return (
    <Section
      eyebrowId="stack"
      eyebrow="Toolkit"
      title="The stack"
      description="Tools I reach for across the product surface — from typed front ends to Python services and the AI layer in between."
      background="surface"
    >
      <div className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((group) => (
          <Reveal key={group.label} className="bg-canvas p-7 sm:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
              {group.label}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-hairline bg-surface px-3 py-1.5 text-sm text-ink-soft"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
