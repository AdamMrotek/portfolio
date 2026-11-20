/**
 * Helpers for the "section stack" deck: every direct `<section>` child of
 * `[data-deck]` is a sticky card, so the next one slides over it.
 *
 * Sticky cards lie about their position while they're stuck (their rect
 * reports the stuck spot, not where they sit in the flow), so anything that
 * needs a real scroll target — anchor jumps, snapping, ScrollTrigger ranges,
 * the active nav link — must use these static, layout-based positions.
 */

export const CARD_SELECTOR = "[data-deck] > section";

export function getDeck(): HTMLElement | null {
  return document.querySelector<HTMLElement>("[data-deck]");
}

export function getCards(deck: HTMLElement | null = getDeck()): HTMLElement[] {
  if (!deck) return [];
  return Array.from(deck.children).filter(
    (el): el is HTMLElement => el instanceof HTMLElement && el.tagName === "SECTION",
  );
}

/** Document-space top of a card in normal flow, ignoring sticky offsets and transforms. */
export function cardStaticTop(card: HTMLElement): number {
  const deck = card.parentElement;
  if (!deck) return 0;
  // The deck itself is never sticky or transformed, so its rect is honest.
  let top = deck.getBoundingClientRect().top + window.scrollY;
  for (const c of getCards(deck)) {
    if (c === card) break;
    top += c.offsetHeight;
  }
  return top;
}

/** Distance from a card's top to a descendant, via layout offsets (transform-free). */
function offsetWithin(el: HTMLElement, card: HTMLElement): number {
  let y = 0;
  let node: HTMLElement | null = el;
  while (node && node !== card) {
    y += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return node === card ? y : 0;
}

/**
 * Document-space top of any element, as if no deck card were stuck or
 * transformed — for scroll triggers on content that lives inside a card.
 */
export function staticDocTop(el: HTMLElement): number {
  const card = el.closest<HTMLElement>(CARD_SELECTOR);
  if (!card) return el.getBoundingClientRect().top + window.scrollY;
  return cardStaticTop(card) + offsetWithin(el, card);
}

/** Room left for the floating nav when a jump lands mid-card. */
const NAV_CLEARANCE = 88;

/** Scroll position that brings `el` into view the way the deck expects. */
export function deckScrollTarget(el: HTMLElement): number {
  const card = el.closest<HTMLElement>(CARD_SELECTOR);
  if (!card) return el.getBoundingClientRect().top + window.scrollY - NAV_CLEARANCE;

  const within = offsetWithin(el, card);
  const top = cardStaticTop(card);
  // Targets near a card's top land on the card itself, fully covering the
  // previous one; deep targets land just under the nav.
  return within < window.innerHeight * 0.5 ? top : top + within - NAV_CLEARANCE;
}
