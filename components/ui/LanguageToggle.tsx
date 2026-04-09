"use client";

/**
 * A compact VI ⇄ EN switch, styled as a terminal flag.
 * Sits in the header and in the mobile drawer.
 */

import { useLanguage } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        "inline-flex items-center gap-0 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-0.5 font-mono text-[11px]",
        className
      )}
    >
      <button
        type="button"
        onClick={() => setLocale("vi")}
        aria-pressed={locale === "vi"}
        className={cn(
          "rounded px-2 py-1 transition-colors",
          locale === "vi"
            ? "bg-[var(--color-term-green)]/15 text-[var(--color-term-green)]"
            : "text-[var(--color-fg-dim)] hover:text-[var(--color-fg-muted)]"
        )}
      >
        VI
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={cn(
          "rounded px-2 py-1 transition-colors",
          locale === "en"
            ? "bg-[var(--color-term-green)]/15 text-[var(--color-term-green)]"
            : "text-[var(--color-fg-dim)] hover:text-[var(--color-fg-muted)]"
        )}
      >
        EN
      </button>
    </div>
  );
}
