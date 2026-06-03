export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-sm font-bold tracking-tight text-white">
            AM
          </span>
          <p className="text-sm text-muted">
            Designed &amp; built by Adam Mrotek · {year}
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-5 text-sm text-muted">
          <a href="#work" className="transition-colors hover:text-ink">
            Work
          </a>
          <a href="#experience" className="transition-colors hover:text-ink">
            Experience
          </a>
          <a href="#stack" className="transition-colors hover:text-ink">
            Stack
          </a>
          <a href="#about" className="transition-colors hover:text-ink">
            About
          </a>
          <a href="#contact" className="transition-colors hover:text-ink">
            Contact
          </a>
        </nav>
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-center text-xs text-muted/70 sm:text-left">
        Built with React 19, Vite &amp; Tailwind CSS v4.
      </p>
    </footer>
  );
}
