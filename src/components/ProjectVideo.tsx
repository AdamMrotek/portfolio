import { useState } from "react";

type ProjectVideoProps = {
  src: string;
  /** Optional still shown before playback / on hosts that block autoplay. */
  poster?: string;
  label: string;
  className?: string;
  /** Show native playback controls (timeline, play/pause, etc.). */
  controls?: boolean;
};

/**
 * Renders a looping, muted overview clip for a project. Autoplay requires the
 * video to be muted, so the source is encoded without audio. Falls back to a
 * clean gradient "mock" card if the video can't be loaded.
 */
export function ProjectVideo({
  src,
  poster,
  label,
  className = "",
  controls = false,
}: ProjectVideoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        aria-label={`${label} overview`}
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
    <video
      src={src}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
      controls={controls}
      preload="metadata"
      aria-label={`${label} overview`}
      onError={() => setFailed(true)}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
