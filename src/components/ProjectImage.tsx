import { useState } from "react";

type ProjectImageProps = {
  src?: string;
  alt: string;
  label: string;
  /** object-fit for the image. "cover" crops to fill; "contain" letterboxes. */
  fit?: "cover" | "contain";
  className?: string;
};

/**
 * Renders a project screenshot, falling back to a clean gradient "mock" card
 * when the image is missing or fails to load (e.g. before a real VillageOS
 * screenshot is added to /public).
 */
export function ProjectImage({
  src,
  alt,
  label,
  fit = "cover",
  className = "",
}: ProjectImageProps) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div
        aria-label={alt}
        role="img"
        className={`flex items-center justify-center ${className}`}
        style={{
          background:
            "linear-gradient(135deg, #0071e3 0%, #5e5ce6 50%, #1d1d1f 100%)",
        }}
      >
        <span className="text-3xl font-semibold tracking-tight text-white/95 sm:text-4xl">
          {label}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`h-full w-full ${fit === "contain" ? "object-contain" : "object-cover"} ${className}`}
    />
  );
}
