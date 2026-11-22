import { SectionHeader } from "./Section";
import { useEffect, useState, type ComponentType } from "react";
import {
  CheckIcon,
  CopyIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "./ContactIcons";
import { email, github, linkedin } from "../data/contact";

type ContactLink = {
  label: string;
  href: string;
  Icon: ComponentType<{ className?: string }>;
  external?: boolean;
  download?: boolean;
};

const links: ContactLink[] = [
  { label: "LinkedIn", href: linkedin, Icon: LinkedInIcon, external: true },
  { label: "GitHub", href: github, Icon: GitHubIcon, external: true },
  {
    label: "CV",
    href: `${import.meta.env.BASE_URL}Adam_Mrotek_CV_2026.pdf`,
    Icon: DownloadIcon,
    download: true,
  },
];

function EmailRow() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Clipboard unavailable (e.g. insecure context); the address is still selectable.
    }
  };

  return (
    <div className="inline-flex items-center gap-2 text-[15px] font-medium text-ink">
      <MailIcon className="h-[18px] w-[18px] shrink-0 text-muted" />
      <span className="select-all">{email}</span>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Email copied" : "Copy email address"}
        title={copied ? "Copied" : "Copy"}
        className="ml-1 inline-flex h-7 w-7 items-center justify-center rounded-md text-muted transition-colors hover:bg-ink/5 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
      >
        {copied ? (
          <CheckIcon className="h-4 w-4" />
        ) : (
          <CopyIcon className="h-4 w-4" />
        )}
      </button>
      <span aria-live="polite" className="sr-only">
        {copied ? "Email copied to clipboard" : ""}
      </span>
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="bg-surface px-6 py-20 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 text-center">
        <div className="[&_p]:mx-auto">
          <SectionHeader
            title="Get in touch"
            description="I'm open to full-stack and AI engineering roles. Email me directly."
          />
        </div>

        <ul className="flex flex-col items-center gap-4">
          <li>
            <EmailRow />
          </li>
          {links.map(({ label, href, Icon, external, download }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                {...(download ? { download: "" } : {})}
                className="group inline-flex items-center gap-2 text-[15px] font-medium text-ink underline decoration-transparent underline-offset-4 transition-colors hover:decoration-ink"
              >
                <Icon className="h-[18px] w-[18px] shrink-0 text-muted transition-colors group-hover:text-ink" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
