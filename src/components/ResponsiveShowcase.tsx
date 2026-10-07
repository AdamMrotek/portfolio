import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ResponsiveShowcaseProps = {
  desktopSrc: string;
  mobileSrc: string;
  /** Used to build the alt text for both screenshots. */
  label: string;
  className?: string;
  /** Width / height of each screenshot; set to the image's own ratio to avoid side crops. */
  desktopAspect?: number;
  mobileAspect?: number;
};

/**
 * Shows a product on desktop and mobile: the desktop screenshot sits in a
 * slightly-rounded 16:10 frame, with the mobile screenshot in an iPhone-14
 * (9:19.5) frame overlapping its bottom-right corner. Both frames get a light
 * border and a subtle gradient backing.
 */
export function ResponsiveShowcase({
  desktopSrc,
  mobileSrc,
  label,
  className = "",
  desktopAspect = 16 / 10,
  mobileAspect = 9 / 19.5,
}: ResponsiveShowcaseProps) {
  const [open, setOpen] = useState<"desktop" | "mobile" | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <div className={`relative w-full ${className}`}>
      {/* Desktop — 16:10 */}
      <button
        type="button"
        onClick={() => setOpen("desktop")}
        aria-label={`Enlarge ${label} desktop screenshot`}
        style={{ aspectRatio: desktopAspect }}
        className="block w-full cursor-zoom-in overflow-hidden rounded-lg border border-black/10 bg-[linear-gradient(135deg,#ffffff,#eef1f5)] p-[3px] shadow-[0_18px_40px_-24px_rgba(15,23,42,0.45)]"
      >
        <img
          src={desktopSrc}
          alt={`${label} on desktop`}
          loading="lazy"
          className="h-full w-full rounded-[5px] object-cover object-top"
        />
      </button>

      {/* Mobile — iPhone 14 ratio (9:19.5), overlapping the corner */}
      <button
        type="button"
        onClick={() => setOpen("mobile")}
        aria-label={`Enlarge ${label} mobile screenshot`}
        className="absolute -bottom-5 right-3 w-[26%] max-w-[140px] cursor-zoom-in overflow-hidden rounded-[0.85rem] border border-black/10 bg-[linear-gradient(135deg,#ffffff,#eef1f5)] p-[3px] shadow-[0_18px_36px_-18px_rgba(15,23,42,0.55)] sm:-bottom-6 sm:right-6"
      >
        <div
          style={{ aspectRatio: mobileAspect }}
          className="overflow-hidden rounded-[0.65rem]"
        >
          <img
            src={mobileSrc}
            alt={`${label} on mobile`}
            loading="lazy"
            className="h-full w-full object-cover object-top"
          />
        </div>
      </button>

      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${label} ${open} screenshot`}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-ink/80 p-4 backdrop-blur-sm sm:p-8"
          >
            <button
              type="button"
              onClick={() => setOpen(null)}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/25"
            >
              Close ✕
            </button>
            <img
              src={open === "desktop" ? desktopSrc : mobileSrc}
              alt={`${label} on ${open}`}
              className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
            />
          </div>,
          document.body,
        )}
    </div>
  );
}
