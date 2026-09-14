"use client";

import { useCallback, type MouseEvent, type ReactNode } from "react";

/**
 * Wraps content in a panel whose glow follows the cursor. The position is
 * written to CSS custom properties so the paint stays off the React path.
 */
export function SpotlightCard({
  children,
  className = "",
  as: Tag = "div",
  ...rest
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "a" | "article";
} & Record<string, unknown>) {
  const onMouseMove = useCallback((e: MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }, []);

  const Cmp = Tag as "div";

  return (
    <Cmp
      onMouseMove={onMouseMove}
      className={`panel spotlight lift relative overflow-hidden ${className}`}
      {...rest}
    >
      <div className="relative z-10 h-full">{children}</div>
    </Cmp>
  );
}
