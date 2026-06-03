import type { ElementType, ReactNode } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
};

/** Wraps children in a scroll-revealed element (fade + slide-up on first view). */
export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  style,
}: RevealProps) {
  const ref = useScrollReveal<HTMLElement>();
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}
