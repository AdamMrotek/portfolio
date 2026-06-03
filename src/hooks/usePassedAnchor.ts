import { useEffect, useRef, useState } from "react";

/**
 * Returns true once an element's centre has scrolled past the viewport anchor
 * (50% of the viewport height) — the same anchor the timeline rail fills to,
 * so a node "lights up" exactly as the gradient fill reaches it.
 */
export function usePassedAnchor<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const anchor = window.innerHeight * 0.5;
      setPassed(rect.top + rect.height / 2 <= anchor);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return { ref, passed };
}
