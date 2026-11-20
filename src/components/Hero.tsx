import { email, github, linkedin } from "../data/contact";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./ContactIcons";

const contacts = [
  { label: "GitHub", href: github, Icon: GitHubIcon, external: true },
  { label: "LinkedIn", href: linkedin, Icon: LinkedInIcon, external: true },
  { label: "Email", href: `mailto:${email}`, Icon: MailIcon, external: false },
];

export function Hero() {
  return (
    <section id="top" className="px-6 pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-[2.9rem] leading-[0.98] text-ink sm:text-[4.5rem]">
          Adam Mrotek
          <span className="block text-faint">Full-stack &amp; AI engineer</span>
        </h1>

        <div className="mt-12 grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
          <div className="max-w-md">
            <div className="space-y-3 leading-relaxed text-muted">
              <p>
                I build web and AI products in React, Next.js and Python, from
                the interface down to the LLM calls behind it.
              </p>
              <p>Based in London, UK, and open to new roles.</p>
            </div>

            <ul className="mt-5 -ml-2 flex items-center gap-1">
              {contacts.map(({ label, href, Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    title={label}
                    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-ink/5 hover:text-ink"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href="#work"
              className="rounded-full bg-highlight px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-highlight-hover"
            >
              View work
            </a>
            <a
              href={`${import.meta.env.BASE_URL}Adam_Mrotek_CV_2026.pdf`}
              download
              className="rounded-full px-4 py-2 text-[13px] font-medium text-ink ring-1 ring-hairline transition-colors hover:bg-ink/5"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
