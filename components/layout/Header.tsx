"use client";

/**
 * Sticky top navigation styled like a shell prompt:
 *   ~/portfolio $ phuong --about --projects --contact
 *
 * - Desktop: inline flags
 * - Mobile: hamburger → full-screen terminal drawer
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems, personal } from "@/lib/data";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  // Thicken the header once the user scrolls past the hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile drawer is open.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-[var(--color-border)] bg-[var(--color-bg)]/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        {/* Left — CLI breadcrumb */}
        <Link
          href="#top"
          className="group flex items-center gap-2 text-xs font-medium sm:text-sm"
          aria-label="Home"
        >
          <span className="text-[var(--color-fg-dim)]">~/portfolio</span>
          <span className="text-[var(--color-term-green)]">$</span>
          <span className="text-[var(--color-fg)] transition-colors group-hover:text-[var(--color-term-green)]">
            {personal.handle}
          </span>
          <span className="hidden text-[var(--color-fg-dim)] sm:inline">
            --start
          </span>
        </Link>

        <div className="flex-1" />

        {/* Desktop nav — CLI flags */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              title={t(item.label)}
              className="group rounded-md px-2.5 py-1.5 text-xs text-[var(--color-fg-muted)] transition-colors hover:bg-[var(--color-bg-hover)] hover:text-[var(--color-term-green)]"
            >
              <span className="text-[var(--color-fg-dim)] group-hover:text-[var(--color-term-green)]/70">
                {item.flag.slice(0, 2)}
              </span>
              <span>{item.flag.slice(2)}</span>
            </a>
          ))}
        </nav>

        <div className="hidden h-6 w-px bg-[var(--color-border)] md:block" />

        <LanguageToggle className="hidden md:inline-flex" />

        {/* Mobile — hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-bg-elev)] text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-term-green)] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-[var(--color-border)] bg-[var(--color-bg-elev)] md:hidden"
          >
            <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-md px-3 py-2.5 text-sm text-[var(--color-fg-muted)] transition-colors hover:bg-[var(--color-bg-hover)] hover:text-[var(--color-term-green)]"
                >
                  <span>
                    <span className="text-[var(--color-fg-dim)]">
                      {item.flag.slice(0, 2)}
                    </span>
                    <span>{item.flag.slice(2)}</span>
                  </span>
                  <span className="text-xs text-[var(--color-fg-dim)]">
                    {t(item.label)}
                  </span>
                </a>
              ))}
              <div className="mt-2 flex items-center justify-between border-t border-[var(--color-border)] pt-3">
                <span className="text-xs text-[var(--color-fg-dim)]">
                  lang:
                </span>
                <LanguageToggle />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
