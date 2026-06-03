import { Reveal } from "./Reveal";
import { SectionHeader } from "./Section";

const FORM_ENDPOINT =
  "https://formsubmit.co/52d56433f5bb53e85ac809fc8a6e6041";

const socials = [
  { label: "GitHub", href: "https://github.com/AdamMrotek" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/adam-mrotek/" },
];

// Lightly assembled at runtime so naive scrapers don't lift it from the markup.
const emailUser = "adam.mrotek";
const emailDomain = "gmail.com";
const email = `${emailUser}@${emailDomain}`;

export function Contact() {
  return (
    <section className="bg-surface px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">
        <Reveal>
          <SectionHeader
            eyebrow="Get in touch"
            eyebrowId="contact"
            title="Let's build something"
            description="Open to Full-stack & AI engineering roles. Prefer email? Reach me directly — or use the form and I'll get back to you."
          />

          <div className="mt-10">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 text-lg font-medium text-ink transition-colors hover:text-accent"
            >
              <MailIcon />
              {email}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-hairline px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-ink/5"
              >
                {social.label} →
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <form
            action={FORM_ENDPOINT}
            method="POST"
            className="flex flex-col gap-4 rounded-[var(--radius-card)] border border-hairline bg-canvas p-7 shadow-soft sm:p-8"
          >
            <label className="flex flex-col gap-2 text-sm font-medium text-ink-soft">
              Name
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="rounded-xl border border-hairline bg-surface px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-accent"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-ink-soft">
              Email
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="rounded-xl border border-hairline bg-surface px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-accent"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-ink-soft">
              Message
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project…"
                className="resize-y rounded-xl border border-hairline bg-surface px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-accent"
              />
            </label>

            <button
              type="submit"
              className="mt-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              Send message →
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      fill="none"
      className="h-5 w-5 text-accent"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2.5" y="4" width="15" height="12" rx="2" />
      <path d="m3 5 7 6 7-6" />
    </svg>
  );
}
