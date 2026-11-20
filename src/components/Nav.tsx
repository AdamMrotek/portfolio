import { useEffect, useRef } from "react";
// Explicit .jsx: the folder also holds a vanilla floating-navbar.js, which
// an extension-less import would resolve to first.
import FloatingNavbar from "./annnimate-starter-pack/floating-navbar/floating-navbar.jsx";
import { CARD_SELECTOR, cardStaticTop } from "../lib/deck";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

/**
 * Floating navbar: a full-width bar at the top that folds into a centred
 * pill once you scroll. The link for the deck card you're on is marked
 * with aria-current.
 */
export function Nav() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const anchors = Array.from(wrap.querySelectorAll<HTMLAnchorElement>(".fnb_link"));
      // A card counts as "current" once it has covered most of the screen.
      const line = window.scrollY + window.innerHeight * 0.35;
      let active: HTMLAnchorElement | null = null;
      for (const a of anchors) {
        const target = document.getElementById(a.hash.slice(1));
        const card = target?.closest<HTMLElement>(CARD_SELECTOR);
        if (card && cardStaticTop(card) <= line) active = a;
      }
      anchors.forEach((a) => {
        if (a === active) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={wrapRef}>
      <FloatingNavbar
        className="site-nav"
        threshold={80}
        duration={0.42}
        mode="toggle"
        offset={12}
        mark="A"
        wordmark="Adam Mrotek"
        links={links}
        ctaLabel="CV"
        ctaHref={`${import.meta.env.BASE_URL}Adam_Mrotek_CV_2026.pdf`}
      />
    </div>
  );
}
