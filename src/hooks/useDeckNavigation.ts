import { useEffect } from "react";
import { deckScrollTarget } from "../lib/deck";

/**
 * In-page anchor links, made deck-aware. The browser's own `#hash` jump
 * measures a stuck card where it's stuck, not where it lives, so jumping
 * back up the page would land in the wrong place. This takes over every
 * same-page `#` link and scrolls to the target's real position.
 */
export function useDeckNavigation() {
  useEffect(() => {
    const reduceMotion = () =>
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scrollToHash = (hash: string, behavior: ScrollBehavior) => {
      if (hash === "" || hash === "#" || hash === "#top") {
        window.scrollTo({ top: 0, behavior });
        return true;
      }
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (!el) return false;
      window.scrollTo({ top: deckScrollTarget(el), behavior });
      return true;
    };

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest?.("a");
      const href = link?.getAttribute("href");
      if (!link || !href || !href.startsWith("#")) return;

      if (scrollToHash(href, reduceMotion() ? "auto" : "smooth")) {
        e.preventDefault();
        history.replaceState(null, "", href === "#" ? location.pathname + location.search : href);
      }
    };

    // Arriving with a hash (e.g. the contact form redirect back to #contact):
    // wait for images so card heights are final, then jump straight there.
    const onLoad = () => {
      if (location.hash) scrollToHash(location.hash, "auto");
    };
    if (document.readyState === "complete") requestAnimationFrame(onLoad);
    else window.addEventListener("load", onLoad, { once: true });

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("load", onLoad);
    };
  }, []);
}
