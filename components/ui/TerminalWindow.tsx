"use client";

/**
 * A reusable terminal window "chrome" — the recurring visual motif
 * used for every card-like surface on the page. Renders:
 *   - traffic-light dots (decorative)
 *   - a title bar (the "tab" label)
 *   - a prompt row showing the current command
 *   - the children as the command body
 *
 * Intentionally presentational — no motion here, so callers can animate
 * the wrapper without double-animating content.
 */

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface TerminalWindowProps {
  /** The tab/title text shown in the top bar (e.g. "about.md"). */
  title: string;
  /** Optional second string shown right-aligned (e.g. user@host path). */
  subtitle?: string;
  /** Optional prompt text. When provided, renders a `$` prompt row. */
  prompt?: string;
  /** Main body content — typically the section itself. */
  children: ReactNode;
  /** Extra classes for the outer container. */
  className?: string;
  /** Extra classes for the body region. */
  bodyClassName?: string;
  /** Hide the traffic-light dots if you want a leaner look. */
  hideDots?: boolean;
}

export function TerminalWindow({
  title,
  subtitle,
  prompt,
  children,
  className,
  bodyClassName,
  hideDots = false,
}: TerminalWindowProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]/80 backdrop-blur-sm",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_20px_60px_-30px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {/* Top title bar */}
      <div className="flex items-center gap-3 border-b border-[var(--color-border)] bg-[var(--color-bg-elev)] px-4 py-2.5">
        {!hideDots && (
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
        )}
        <div className="flex flex-1 items-center justify-center gap-2 text-xs text-[var(--color-fg-muted)]">
          <span className="truncate font-medium">{title}</span>
          {subtitle && (
            <>
              <span className="text-[var(--color-fg-faint)]">·</span>
              <span className="truncate text-[var(--color-fg-dim)]">
                {subtitle}
              </span>
            </>
          )}
        </div>
        {/* Right-side spacer to keep title visually centered */}
        <div className={cn("w-12", hideDots && "w-0")} aria-hidden />
      </div>

      {/* Optional command prompt row */}
      {prompt && (
        <div className="flex items-center gap-2 border-b border-[var(--color-border)]/50 bg-[var(--color-bg)]/50 px-4 py-2 text-xs">
          <span className="text-[var(--color-term-green)]">$</span>
          <span className="text-[var(--color-fg-muted)]">{prompt}</span>
        </div>
      )}

      {/* Body content */}
      <div className={cn("px-5 py-5 sm:px-6 sm:py-6", bodyClassName)}>
        {children}
      </div>
    </div>
  );
}
