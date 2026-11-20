import { SectionHeader } from "./Section";
import { MailIcon } from "./ContactIcons";
import { email, socials } from "../data/contact";

const FORM_ENDPOINT =
  "https://formsubmit.co/52d56433f5bb53e85ac809fc8a6e6041";

// Where formsubmit.co sends the visitor after a successful submission.
const FORM_REDIRECT = "https://adammrotek.github.io/portfolio/?sent=true#contact";

export function Contact() {
  const wasSent =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("sent") === "true";

  return (
    <section id="contact" className="bg-surface px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">
        <div>
          <SectionHeader
            title="Get in touch"
            description="I'm open to full-stack and AI engineering roles. Email me directly, or use the form and I'll reply."
          />

          <div className="mt-10">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 text-[15px] text-ink underline decoration-hairline underline-offset-4 transition-colors hover:decoration-ink"
            >
              <MailIcon className="h-4 w-4 text-muted" />
              {email}
            </a>
          </div>

          <div className="mt-5 flex flex-wrap gap-5">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-[13px] font-medium text-muted transition-colors hover:text-ink"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <form
            action={FORM_ENDPOINT}
            method="POST"
            className="flex flex-col gap-5 rounded-[var(--radius-card)] bg-canvas p-6 sm:p-8"
          >
            <input type="hidden" name="_next" value={FORM_REDIRECT} />

            {wasSent && (
              <p className="rounded-lg bg-tile px-4 py-3 text-[13px] text-ink">
                Thanks, your message was sent. I'll get back to you soon.
              </p>
            )}
            <label className="flex flex-col gap-2 text-xs text-muted">
              Name
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="rounded-lg border border-hairline bg-surface px-3.5 py-2.5 text-[14px] text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-ink"
              />
            </label>

            <label className="flex flex-col gap-2 text-xs text-muted">
              Email
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="rounded-lg border border-hairline bg-surface px-3.5 py-2.5 text-[14px] text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-ink"
              />
            </label>

            <label className="flex flex-col gap-2 text-xs text-muted">
              Message
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project…"
                className="resize-y rounded-lg border border-hairline bg-surface px-3.5 py-2.5 text-[14px] text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-ink"
              />
            </label>

            <button
              type="submit"
              className="mt-1 self-start rounded-full bg-highlight px-5 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-highlight-hover"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
