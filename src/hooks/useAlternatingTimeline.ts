import type { RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { staticDocTop } from "../lib/deck";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Where the line's head sits, as a fraction of the viewport height. */
const DRAW_AT = 0.65;
/** Seconds each entry's reveal takes. */
const DURATION = 0.9;
/** Seconds between the text lines rising. */
const STAGGER = 0.07;
/** Scrolling back up plays entries out this much faster. */
const OUT_SPEED = 1.8;
/** Light smoothing on the scroll-linked line. */
const LINE_SMOOTH = 0.3;

const MEDIA_FROM = "inset(14% 14% 14% 14% round 20px)";
const MEDIA_TO = "inset(0% 0% 0% 0% round 20px)";

/**
 * Alternating timeline. Only the centre line is tied to the scroll: it draws
 * down the page with its head at DRAW_AT. Each entry plays on its own clock
 * once the head reaches its dot — the text rises, the photo opens — and the
 * newest reached dot grows into a ring. On phones the line moves to the left
 * and a photo waits until its whole frame is on screen before opening.
 *
 * Markup contract (inside `scope`):
 *   [data-atl-rail] > [data-atl-fill], [data-atl-head]
 *   [data-atl-item] > [data-atl-dot], [data-atl-rise]…, [data-atl-media] > [data-atl-media-inner]
 *
 * All positions are static (layout-based) because the timeline lives inside
 * a sticky deck card.
 */
export function useAlternatingTimeline(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;
      const rail = root.querySelector<HTMLElement>("[data-atl-rail]");
      const fill = root.querySelector<HTMLElement>("[data-atl-fill]");
      const head = root.querySelector<HTMLElement>("[data-atl-head]");
      const items = Array.from(root.querySelectorAll<HTMLElement>("[data-atl-item]"));
      if (!rail || !fill || !head || !items.length) return;

      const parts = items.map((item) => ({
        dot: item.querySelector<HTMLElement>("[data-atl-dot]")!,
        rise: Array.from(item.querySelectorAll<HTMLElement>("[data-atl-rise]")),
        media: item.querySelector<HTMLElement>("[data-atl-media]"),
        inner: item.querySelector<HTMLElement>("[data-atl-media-inner]"),
      }));

      const reached = items.map(() => false);
      const paintDots = () => {
        const current = reached.lastIndexOf(true);
        parts.forEach(({ dot }, i) => {
          dot.classList.toggle("is-passed", reached[i]);
          dot.classList.toggle("is-current", i === current);
        });
      };

      const drawLine = () => window.innerHeight * DRAW_AT;
      const dotCentre = (dot: HTMLElement) => staticDocTop(dot) + dot.offsetHeight / 2;

      const mm = gsap.matchMedia();
      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduce: "(prefers-reduced-motion: reduce)",
          desktop: "(min-width: 768px)",
        },
        (ctx) => {
          const { reduce, desktop } = ctx.conditions as Record<string, boolean>;

          // Reduced motion: a finished, readable timeline.
          if (reduce) {
            gsap.set(fill, { scaleY: 1 });
            gsap.set(head, { autoAlpha: 0 });
            reached.fill(true);
            paintDots();
            return;
          }

          // The line: the only thing tied 1:1 to the scroll.
          gsap.fromTo(
            fill,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                start: () => staticDocTop(rail) - drawLine(),
                end: () => staticDocTop(rail) + rail.offsetHeight - drawLine(),
                scrub: LINE_SMOOTH,
                invalidateOnRefresh: true,
              },
            },
          );
          gsap.fromTo(
            head,
            { y: 0 },
            {
              y: () => rail.offsetHeight,
              ease: "none",
              scrollTrigger: {
                start: () => staticDocTop(rail) - drawLine(),
                end: () => staticDocTop(rail) + rail.offsetHeight - drawLine(),
                scrub: LINE_SMOOTH,
                invalidateOnRefresh: true,
              },
            },
          );

          parts.forEach(({ dot, rise, media, inner }, i) => {
            const text = gsap.timeline({ paused: true });
            text.fromTo(
              rise,
              { y: 22, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, duration: DURATION, stagger: STAGGER, ease: "power3.out" },
            );

            const photo = gsap.timeline({ paused: true });
            if (media) {
              photo.fromTo(
                media,
                { clipPath: MEDIA_FROM, autoAlpha: 0 },
                { clipPath: MEDIA_TO, autoAlpha: 1, duration: DURATION * 1.2, ease: "expo.out" },
              );
              if (inner) {
                photo.fromTo(
                  inner,
                  { scale: 1.18 },
                  { scale: 1, duration: DURATION * 1.4, ease: "expo.out" },
                  0,
                );
              }
            }

            const playIn = (tl: gsap.core.Timeline) => tl.timeScale(1).play();
            const playOut = (tl: gsap.core.Timeline) => tl.timeScale(OUT_SPEED).reverse();

            // Entry: when the line's head reaches the dot.
            ScrollTrigger.create({
              start: () => dotCentre(dot) - drawLine(),
              end: "max",
              invalidateOnRefresh: true,
              onEnter: () => {
                reached[i] = true;
                paintDots();
                playIn(text);
                if (desktop) playIn(photo);
              },
              onLeaveBack: () => {
                reached[i] = false;
                paintDots();
                playOut(text);
                if (desktop) playOut(photo);
              },
            });

            // Phones: the photo sits under its text and only opens once its
            // whole frame is on screen, so the reveal is never played unseen.
            if (!desktop && media) {
              ScrollTrigger.create({
                start: () => staticDocTop(media) + media.offsetHeight - window.innerHeight,
                end: "max",
                invalidateOnRefresh: true,
                onEnter: () => playIn(photo),
                onLeaveBack: () => playOut(photo),
              });
            }
          });

          return () => {
            reached.fill(false);
            paintDots();
          };
        },
      );

      return () => mm.revert();
    },
    { scope },
  );
}
