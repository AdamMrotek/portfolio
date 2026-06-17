import { useEffect } from "react";

/**
 * Gentle, smooth scroll snapping for `.snap-section` elements.
 *
 * Unlike CSS `scroll-snap-type`, this never fights an in-progress scroll:
 * it waits until the user *stops* scrolling, and only then — if a section is
 * already close to its resting place — eases it the rest of the way with a
 * slow, hand-rolled animation. Sections far from a snap point (e.g. mid-read
 * on a tall one) are left alone, so it feels like a soft nudge.
 *
 * It aligns each section's *content* top (i.e. past its top padding, where the
 * title lives) to the nav line, so padded sections snap with the heading under
 * the nav rather than with a band of empty space above it.
 *
 * @param offset  Where section content tops should rest, in px from the
 *                viewport top (matches the sticky nav + scroll-padding-top).
 */
export function useScrollSnap(offset = 88) {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    // Only nudge when a section's content top is already within this many px
    // of its resting line — the "magnet" range.
    const THRESHOLD = 140;
    // Below this we're effectively aligned; don't bother scrolling.
    const DEAD_ZONE = 2;
    // Duration of the eased snap glide, in ms. Higher = slower / gentler.
    const DURATION = 900;

    let idleTimer: number | undefined;
    let rafId = 0;
    let animating = false;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const stopAnim = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = 0;
      animating = false;
    };

    const animateTo = (target: number) => {
      const start = window.scrollY;
      const change = target - start;
      const startTime = performance.now();
      animating = true;

      const step = (now: number) => {
        const t = Math.min((now - startTime) / DURATION, 1);
        window.scrollTo(0, start + change * easeInOutCubic(t));
        if (t < 1) {
          rafId = requestAnimationFrame(step);
        } else {
          stopAnim();
        }
      };
      rafId = requestAnimationFrame(step);
    };

    // Distance from the section's content top (past padding) to its rest line.
    const contentOffset = (el: HTMLElement) => {
      const padTop = parseFloat(getComputedStyle(el).paddingTop) || 0;
      return el.getBoundingClientRect().top + padTop - offset;
    };

    const snapToNearest = () => {
      if (animating) return;

      const sections =
        document.querySelectorAll<HTMLElement>(".snap-section");
      let bestDelta = 0;
      let bestDist = THRESHOLD;
      let found = false;

      for (const el of sections) {
        const delta = contentOffset(el);
        const dist = Math.abs(delta);
        if (dist < bestDist) {
          bestDist = dist;
          bestDelta = delta;
          found = true;
        }
      }

      if (!found || bestDist <= DEAD_ZONE) return;
      animateTo(window.scrollY + bestDelta);
    };

    const onScroll = () => {
      // Our own animation drives scroll too — let it run.
      if (animating) return;
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(snapToNearest, 160);
    };

    // Any real user input cancels an in-progress glide so it never feels stuck.
    const onUserInput = () => {
      if (animating) stopAnim();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", onUserInput, { passive: true });
    window.addEventListener("touchstart", onUserInput, { passive: true });
    window.addEventListener("keydown", onUserInput);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onUserInput);
      window.removeEventListener("touchstart", onUserInput);
      window.removeEventListener("keydown", onUserInput);
      window.clearTimeout(idleTimer);
      stopAnim();
    };
  }, [offset]);
}
