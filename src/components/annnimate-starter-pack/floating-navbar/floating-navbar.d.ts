import type { ForwardRefExoticComponent, RefAttributes, RefObject } from "react";

export type FloatingNavbarLink = { label: string; href?: string };

export type FloatingNavbarProps = {
  className?: string;
  /** Scroll distance (px) at which the bar docks into a pill. */
  threshold?: number;
  duration?: number;
  ease?: string;
  mode?: "toggle" | "scrub";
  /** Gap (px) between the viewport top and the docked pill. */
  offset?: number;
  /** Letters of the wordmark that stay visible when docked. */
  mark?: string;
  wordmark?: string;
  links?: FloatingNavbarLink[];
  ctaLabel?: string;
  ctaHref?: string;
  hideStartRef?: RefObject<HTMLElement | null> | null;
  hideStart?: HTMLElement | null;
};

export type FloatingNavbarHandle = {
  dock(): void;
  undock(): void;
  refresh(): void;
  demo(): unknown;
};

declare const FloatingNavbar: ForwardRefExoticComponent<
  FloatingNavbarProps & RefAttributes<FloatingNavbarHandle>
>;
export default FloatingNavbar;
