const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between border-b border-hairline/60 bg-canvas/70 px-6 backdrop-blur-xl">
        <a
          href="#top"
          aria-label="Adam Mrotek — home"
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-sm font-bold tracking-tight text-white"
        >
          AM
        </a>
        <nav className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden rounded-full px-3 py-1.5 text-sm text-ink-soft transition-colors hover:bg-ink/5 hover:text-ink sm:inline-block"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`${import.meta.env.BASE_URL}Adam_Mrotek_CV_2026.pdf`}
            download
            className="ml-1 rounded-full border border-hairline bg-surface px-3.5 py-1.5 text-sm font-medium text-ink transition-colors hover:bg-ink/5"
          >
            CV
          </a>
        </nav>
      </div>
    </header>
  );
}
