"use client";

/**
 * Footer — styled as a terminal status bar / tmux footer.
 * Shows current status, github handle, and a cheeky "last build" timestamp.
 */

import { Mail, Phone } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { personal } from "@/lib/data";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Footer() {
  const { t, locale } = useLanguage();

  const buildYear = new Date().getFullYear();

  return (
    <footer className="relative mt-32 border-t border-[var(--color-border)] bg-[var(--color-bg-elev)]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Left — CLI signature */}
          <div className="space-y-2">
            <div className="text-xs text-[var(--color-fg-dim)]">
              ~/portfolio <span className="text-[var(--color-term-green)]">$</span>{" "}
              whoami
            </div>
            <div className="text-lg font-bold text-[var(--color-fg)]">
              {personal.name}
            </div>
            <div className="text-sm text-[var(--color-fg-muted)]">
              {t(personal.title)} · {t(personal.location)}
            </div>
          </div>

          {/* Middle — socials */}
          <div className="space-y-2">
            <div className="text-xs text-[var(--color-fg-dim)]">
              ~/portfolio <span className="text-[var(--color-term-green)]">$</span>{" "}
              cat contacts.txt
            </div>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-term-green)]"
            >
              <GithubIcon size={14} /> github.com/{personal.githubHandle}
            </a>
            <br />
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 text-sm text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-term-green)]"
            >
              <Mail size={14} /> {personal.email}
            </a>
            <br />
            <a
              href={`tel:${personal.phoneE164}`}
              className="inline-flex items-center gap-2 text-sm text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-term-green)]"
            >
              <Phone size={14} /> {personal.phone}
            </a>
          </div>

          {/* Right — status line */}
          <div className="space-y-2 md:text-right">
            <div className="text-xs text-[var(--color-fg-dim)]">
              ~/portfolio <span className="text-[var(--color-term-green)]">$</span>{" "}
              uptime
            </div>
            <div className="text-sm text-[var(--color-fg-muted)]">
              {locale === "vi"
                ? "Sẵn sàng cho cơ hội mới"
                : "Open to new opportunities"}
            </div>
            <div className="flex items-center gap-2 md:justify-end">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-term-green)] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-term-green)]" />
              </span>
              <span className="text-xs text-[var(--color-term-green)]">
                {locale === "vi" ? "Đang online" : "Online"}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom status bar */}
        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-[var(--color-border)] pt-4 text-[11px] text-[var(--color-fg-dim)] sm:flex-row sm:items-center">
          <div>
            © {buildYear} {personal.name}. {locale === "vi" ? "Xây bằng" : "Built with"}{" "}
            <span className="text-[var(--color-term-green)]">Next.js</span>,{" "}
            <span className="text-[var(--color-term-cyan)]">Tailwind</span> &{" "}
            <span className="text-[var(--color-term-purple)]">Framer Motion</span>.
          </div>
          <div className="font-mono">
            <span className="text-[var(--color-fg-faint)]">build:</span>{" "}
            <span className="text-[var(--color-fg-muted)]">stable</span>
            <span className="mx-2 text-[var(--color-fg-faint)]">·</span>
            <span className="text-[var(--color-fg-faint)]">branch:</span>{" "}
            <span className="text-[var(--color-term-green)]">main</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
