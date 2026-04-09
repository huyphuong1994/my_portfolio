"use client";

/**
 * A consistent CLI-style section heading:
 *   ┌── ~/projects
 *   │   $ ls --featured
 *   │   > Featured Work
 *
 * Used above every major section so the page reads like a
 * continuous terminal session.
 */

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  /** Breadcrumb path, e.g. "~/portfolio/projects". */
  path: string;
  /** The "command" to display, e.g. "ls --featured". */
  command: string;
  /** The main heading text. */
  title: string;
  /** Optional muted subtitle shown under the title. */
  description?: string;
  className?: string;
  id?: string;
}

export function SectionHeading({
  path,
  command,
  title,
  description,
  className,
  id,
}: SectionHeadingProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn("mb-10 space-y-2", className)}
    >
      {/* Breadcrumb + command */}
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs sm:text-sm">
        <span className="text-[var(--color-fg-dim)]">{path}</span>
        <span className="text-[var(--color-term-green)]">$</span>
        <span className="text-[var(--color-fg-muted)]">{command}</span>
      </div>

      {/* Title with green prompt arrow */}
      <h2 className="flex items-baseline gap-3 text-3xl font-bold tracking-tight text-[var(--color-fg)] sm:text-4xl md:text-5xl">
        <span className="text-[var(--color-term-green)] glow-green">&gt;</span>
        <span>{title}</span>
      </h2>

      {description && (
        <p className="max-w-2xl pl-7 text-sm leading-relaxed text-[var(--color-fg-muted)] sm:text-base">
          <span className="text-[var(--color-fg-faint)]">//</span> {description}
        </p>
      )}
    </motion.div>
  );
}
