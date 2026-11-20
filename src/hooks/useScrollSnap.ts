import { useEffect } from "react";
import { cardStaticTop, getCards } from "../lib/deck";

/**
 * Gentle, smooth snapping for the section-stack deck.
 *
 * Unlike CSS `scroll-snap-type`, this never fights an in-progress scroll:
 * it waits until the user *stops* scrolling, and only then — if a card is
 * already close to fully covering the one beneath it — eases it the rest of
 * the way, so you never rest on a half-stacked pair. Cards far from a snap
 * point (e.g. mid-read on a tall one) are left alone.
 *
 * Positions come from the deck's static layout, because stuck sticky cards
 * report where they're stuck, not where they live.
 */
export function useScrollSnap() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    // Only nudge when a card's top is already within this many px of the
    // viewport top — the "magnet" range.
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
        window.scrollTo({ top: start + change * easeInOutCubic(t), behavior: "instant" });
        if (t < 1) {
          rafId = requestAnimationFrame(step);
        } else {
          stopAnim();
        }
      };
      rafId = requestAnimationFrame(step);
    };

    const snapToNearest = () => {
      if (animating) return;

      // The hero is the first card; scrolling a little off it shouldn't
      // pull you back up.
      const cards = getCards().slice(1);
      let bestDelta = 0;
      let bestDist = THRESHOLD;
      let found = false;

      for (const card of cards) {
        const delta = cardStaticTop(card) - window.scrollY;
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
  }, []);
}
