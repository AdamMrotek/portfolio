import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cardStaticTop, getCards, getDeck } from "../lib/deck";

gsap.registerPlugin(ScrollTrigger);

/** How far a covered card steps back. */
const SCALE = 0.92;
/** Corner radius (px) a fully covered card ends on. */
const RADIUS = 28;
/** Black overlay opacity on a fully covered card. */
const DIM = 0.28;
/** Light smoothing on top of the 1:1 scroll link, in seconds. */
const SMOOTH = 0.3;

/**
 * Section stack: each card in `[data-deck]` is sticky, so the next card
 * slides up over it like a sheet. While it's being covered, the card
 * underneath steps back — scales down, rounds its corners and dims.
 *
 * Tall cards stick by their bottom edge (top = viewport − height), so every
 * section is read in full before the next one starts covering it.
 * Reduced motion keeps the stacking but drops the step-back.
 */
export function useSectionStack() {
  useEffect(() => {
    const deck = getDeck();
    if (!deck) return;
    const cards = getCards(deck);
    if (cards.length < 2) return;

    // Per-card: px of the card above the viewport while it's stuck.
    const hidden = cards.map(() => 0);

    const measure = () => {
      const vh = window.innerHeight;
      cards.forEach((card, i) => {
        const h = card.offsetHeight;
        hidden[i] = Math.max(0, h - vh);
        card.style.setProperty("--deck-top", `${Math.min(0, vh - h)}px`);
      });
    };
    measure();
    ScrollTrigger.addEventListener("refreshInit", measure);

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const triggers = cards.slice(0, -1).map((card, i) => {
        const next = cards[i + 1];
        const state = { p: 0 };
        let stuck = false;

        const render = () => {
          const p = state.p;
          if (p < 0.001) {
            // Clear everything so an uncovered card has no transform (which
            // would trap fixed children) and no clip.
            card.style.transform = "";
            card.style.transformOrigin = "";
            card.style.clipPath = "";
            card.style.removeProperty("--deck-dim");
            return;
          }
          const vh = window.innerHeight;
          // Scale around the centre of what's on screen, not the whole card.
          card.style.transformOrigin = `50% ${hidden[i] + vh / 2}px`;
          card.style.transform = `scale(${1 - (1 - SCALE) * p})`;
          // Clip off the part above the viewport so the card's top edge (and
          // its rounded corners) shows as it steps back.
          card.style.clipPath = `inset(${stuck ? hidden[i] : 0}px 0px 0px 0px round ${RADIUS * p}px)`;
          card.style.setProperty("--deck-dim", (DIM * p).toFixed(3));
        };

        const toP = gsap.quickTo(state, "p", {
          duration: SMOOTH,
          ease: "power3.out",
          onUpdate: render,
        });

        return ScrollTrigger.create({
          // From the moment this card sticks until the next one fully covers it.
          start: () => Math.max(cardStaticTop(card), cardStaticTop(next) - window.innerHeight),
          end: () => cardStaticTop(next),
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            stuck = self.progress > 0;
            toP(self.progress);
          },
          onRefresh: (self) => {
            stuck = self.progress > 0;
            // Jump straight to the refreshed value instead of easing into it.
            toP(self.progress, self.progress);
            toP.tween.progress(1);
            render();
          },
        });
      });

      return () => {
        triggers.forEach((t) => t.kill());
        cards.forEach((card) => {
          card.style.transform = "";
          card.style.transformOrigin = "";
          card.style.clipPath = "";
          card.style.removeProperty("--deck-dim");
        });
      };
    });

    // Images, fonts and the contact form change card heights after mount.
    let raf = 0;
    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => ScrollTrigger.refresh());
    });
    cards.forEach((card) => ro.observe(card));

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      mm.revert();
      ScrollTrigger.removeEventListener("refreshInit", measure);
      cards.forEach((card) => card.style.removeProperty("--deck-top"));
    };
  }, []);
}
