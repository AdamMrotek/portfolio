type ResponsiveShowcaseProps = {
  desktopSrc: string;
  mobileSrc: string;
  /** Used to build the alt text for both screenshots. */
  label: string;
  className?: string;
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
}: ResponsiveShowcaseProps) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Desktop — 16:10 */}
      <div className="aspect-[16/10] overflow-hidden rounded-lg border border-black/10 bg-[linear-gradient(135deg,#ffffff,#eef1f5)] p-[3px] shadow-[0_18px_40px_-24px_rgba(15,23,42,0.45)]">
        <img
          src={desktopSrc}
          alt={`${label} on desktop`}
          loading="lazy"
          className="h-full w-full rounded-[5px] object-cover object-top"
        />
      </div>

      {/* Mobile — iPhone 14 ratio (9:19.5), overlapping the corner */}
      <div className="absolute -bottom-5 right-3 w-[26%] max-w-[140px] overflow-hidden rounded-[0.85rem] border border-black/10 bg-[linear-gradient(135deg,#ffffff,#eef1f5)] p-[3px] shadow-[0_18px_36px_-18px_rgba(15,23,42,0.55)] sm:-bottom-6 sm:right-6">
        <div className="aspect-[9/19.5] overflow-hidden rounded-[0.65rem]">
          <img
            src={mobileSrc}
            alt={`${label} on mobile`}
            loading="lazy"
            className="h-full w-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}
