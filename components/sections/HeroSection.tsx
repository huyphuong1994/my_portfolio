"use client";

/**
 * Hero — the showstopper.
 *
 * Left column: CLI banner, huge typed title, tagline, CTAs and stats.
 * Right column: a faux code editor showing a self-describing "profile.ts".
 *
 * The typed title uses a tiny in-house typewriter effect (no extra dep)
 * and rotates through three role descriptors.
 */

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { bootSequence, heroStats, personal } from "@/lib/data";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/utils";

const toneMap: Record<(typeof heroStats)[number]["tone"], string> = {
  green: "text-[var(--color-term-green)]",
  amber: "text-[var(--color-term-amber)]",
  blue: "text-[var(--color-term-blue)]",
  purple: "text-[var(--color-term-purple)]",
  cyan: "text-[var(--color-term-cyan)]",
};

/* ------------------------------------------------------------
   Tiny typewriter — cycles a list of strings with a blinking cursor
   ------------------------------------------------------------ */
function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const step = deleting ? speed / 2 : speed;

    const timer = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, sub.length + 1);
        setSub(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        const next = current.slice(0, sub.length - 1);
        setSub(next);
        if (next === "") {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        }
      }
    }, step);

    return () => clearTimeout(timer);
  }, [sub, deleting, index, words, speed, pause]);

  return sub;
}

export function HeroSection() {
  const { locale, t } = useLanguage();

  const roleWords = useMemo(
    () =>
      locale === "vi"
        ? [
            "Full-stack Developer",
            "Python & Go Engineer",
            "AI-augmented Builder",
            "Người giải quyết vấn đề",
          ]
        : [
            "Full-stack Developer",
            "Python & Go Engineer",
            "AI-augmented Builder",
            "Relentless Problem Solver",
          ],
    [locale]
  );

  const typed = useTypewriter(roleWords);

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24"
    >
      {/* Background layers — dot grid + soft green radial glow behind the title */}
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(74, 222, 128, 0.18), transparent 60%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        {/* LEFT column — headline & CTAs */}
        <div className="lg:col-span-7">
          {/* Availability pill */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-term-green)]/30 bg-[var(--color-term-green)]/[0.06] px-3 py-1 text-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-term-green)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-term-green)]" />
            </span>
            <span className="text-[var(--color-term-green)]">
              {locale === "vi"
                ? "Nhận dự án mới · Q2/2026"
                : "Taking new projects · Q2/2026"}
            </span>
          </motion.div>

          {/* Breadcrumb / command prompt */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="mb-4 flex items-center gap-2 text-xs text-[var(--color-fg-muted)] sm:text-sm"
          >
            <span className="text-[var(--color-fg-dim)]">~/portfolio</span>
            <span className="text-[var(--color-term-green)]">$</span>
            <span>whoami --verbose</span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mb-3 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="mr-3 text-[var(--color-term-green)] glow-green">
              &gt;
            </span>
            <span className="text-[var(--color-fg)]">
              {personal.name.split(" ").slice(0, 2).join(" ")}
            </span>
            <br />
            <span className="text-[var(--color-fg)]">
              {personal.name.split(" ").slice(2).join(" ")}
            </span>
            <span className="ml-2 text-[var(--color-term-green)]">.</span>
          </motion.h1>

          {/* Typed role — changes every few seconds */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mb-5 flex h-8 items-center text-lg font-medium sm:text-xl"
          >
            <span className="text-[var(--color-fg-dim)]">//</span>
            <span className="ml-2 text-[var(--color-term-amber)]">{typed}</span>
            <span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse bg-[var(--color-term-green)]" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-8 max-w-xl text-base leading-relaxed text-[var(--color-fg-muted)] sm:text-lg"
          >
            {t(personal.tagline)}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mb-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md border border-[var(--color-term-green)]/40 bg-[var(--color-term-green)]/10 px-4 py-2.5 text-sm font-medium text-[var(--color-term-green)] transition-all hover:border-[var(--color-term-green)] hover:bg-[var(--color-term-green)]/20 hover:shadow-[0_0_30px_-5px_rgba(74,222,128,0.4)]"
            >
              <span className="text-[var(--color-term-green)]">$</span>
              {locale === "vi" ? "xem dự án" : "view projects"}
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-4 py-2.5 text-sm font-medium text-[var(--color-fg)] transition-colors hover:border-[var(--color-border-strong)] hover:bg-[var(--color-bg-hover)]"
            >
              <Mail size={14} className="text-[var(--color-term-amber)]" />
              {locale === "vi" ? "liên hệ" : "contact"}
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-bg-elev)] text-[var(--color-fg-muted)] transition-colors hover:border-[var(--color-border-strong)] hover:text-[var(--color-term-green)]"
            >
              <GithubIcon size={16} />
            </a>
          </motion.div>

          {/* Stats — rendered as const declarations */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="grid max-w-2xl grid-cols-2 gap-x-6 gap-y-3 font-mono text-sm sm:grid-cols-4"
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[var(--color-term-purple)]">const</span>
                  <span className={cn("font-semibold", toneMap[stat.tone])}>
                    {stat.value}
                  </span>
                </div>
                <div className="text-[11px] text-[var(--color-fg-dim)]">
                  // {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT column — faux code editor */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:col-span-5"
        >
          <CodePreview locale={locale} />

          {/* Boot log under the editor */}
          <div className="mt-6 space-y-1 font-mono text-[11px]">
            {bootSequence.map((line, i) => (
              <motion.div
                key={line.label}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + i * 0.15, duration: 0.3 }}
                className="flex items-center gap-2"
              >
                <span
                  className={cn(
                    "inline-block w-14 text-center text-[10px] font-bold",
                    line.status === "ok" && "text-[var(--color-term-green)]",
                    line.status === "info" && "text-[var(--color-term-cyan)]",
                    line.status === "warn" && "text-[var(--color-term-amber)]"
                  )}
                >
                  [{line.status === "ok" ? " OK " : line.status === "info" ? "INFO" : "WARN"}]
                </span>
                <span className="text-[var(--color-fg-muted)]">
                  {line.label}
                </span>
                {line.status === "info" && (
                  <Sparkles
                    size={10}
                    className="text-[var(--color-term-cyan)]"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   CodePreview — the faux editor card
   ============================================================ */
function CodePreview({ locale }: { locale: "vi" | "en" }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] shadow-glow-green">
      {/* Editor top bar */}
      <div className="flex items-center gap-2 border-b border-[var(--color-border)] bg-[var(--color-bg-elev)] px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="ml-3 flex gap-1 text-[11px]">
          <span className="rounded-t-md border-b-2 border-[var(--color-term-green)] bg-[var(--color-bg-card)] px-3 py-1 text-[var(--color-fg)]">
            profile.ts
          </span>
          <span className="px-3 py-1 text-[var(--color-fg-dim)]">
            stack.json
          </span>
        </div>
      </div>

      {/* Code body */}
      <pre className="overflow-x-auto px-5 py-5 text-[13px] leading-6">
        <CodeLine n={1}>
          <Token kw>const</Token> <Token name>developer</Token>{" "}
          <Token op>=</Token> {"{"}
        </CodeLine>
        <CodeLine n={2}>
          {"  "}
          <Token prop>name</Token>
          <Token op>:</Token>{" "}
          <Token str>{'"Đào Huy Phương"'}</Token>
          <Token op>,</Token>
        </CodeLine>
        <CodeLine n={3}>
          {"  "}
          <Token prop>role</Token>
          <Token op>:</Token>{" "}
          <Token str>{'"Full-stack Developer"'}</Token>
          <Token op>,</Token>
        </CodeLine>
        <CodeLine n={4}>
          {"  "}
          <Token prop>stack</Token>
          <Token op>:</Token> [
        </CodeLine>
        <CodeLine n={5}>
          {"    "}
          <Token str>{'"Python"'}</Token>
          <Token op>,</Token> <Token str>{'"Golang"'}</Token>
          <Token op>,</Token> <Token str>{'"Laravel"'}</Token>
          <Token op>,</Token>
        </CodeLine>
        <CodeLine n={6}>
          {"    "}
          <Token str>{'"Next.js"'}</Token>
          <Token op>,</Token> <Token str>{'"Vue"'}</Token>
          <Token op>,</Token> <Token str>{'"Nuxt"'}</Token>
          <Token op>,</Token>
        </CodeLine>
        <CodeLine n={7}>{"  ],"}</CodeLine>
        <CodeLine n={8}>
          {"  "}
          <Token prop>ai</Token>
          <Token op>:</Token> <Token bool>true</Token>
          <Token op>,</Token>{" "}
          <Token comment>
            // {locale === "vi" ? "dùng AI mỗi ngày" : "used every day"}
          </Token>
        </CodeLine>
        <CodeLine n={9}>
          {"  "}
          <Token prop>available</Token>
          <Token op>:</Token> <Token bool>true</Token>
          <Token op>,</Token>
        </CodeLine>
        <CodeLine n={10}>
          {"  "}
          <Token prop>hireable</Token>
          <Token op>:</Token> <Token fn>ship</Token>
          {"("}
          <Token str>{'"great-products"'}</Token>
          {"),"}
        </CodeLine>
        <CodeLine n={11}>{"};"}</CodeLine>
        <CodeLine n={12}></CodeLine>
        <CodeLine n={13}>
          <Token kw>export</Token> <Token kw>default</Token>{" "}
          <Token name>developer</Token>
          <Token op>;</Token>
        </CodeLine>
      </pre>
    </div>
  );
}

function CodeLine({ n, children }: { n: number; children?: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="w-5 select-none text-right text-[var(--color-fg-faint)]">
        {n}
      </span>
      <span className="text-[var(--color-fg)]">{children}</span>
    </div>
  );
}

/**
 * Inline syntax-token component — one element per token type.
 * Keeping it local instead of pulling in shiki/prism to keep the bundle tiny.
 */
function Token({
  children,
  kw,
  name,
  prop,
  str,
  op,
  bool,
  fn,
  comment,
}: {
  children: React.ReactNode;
  kw?: boolean;
  name?: boolean;
  prop?: boolean;
  str?: boolean;
  op?: boolean;
  bool?: boolean;
  fn?: boolean;
  comment?: boolean;
}) {
  if (kw) return <span className="text-[var(--color-term-purple)]">{children}</span>;
  if (name) return <span className="text-[var(--color-term-cyan)]">{children}</span>;
  if (prop) return <span className="text-[var(--color-term-blue)]">{children}</span>;
  if (str) return <span className="text-[var(--color-term-green)]">{children}</span>;
  if (bool) return <span className="text-[var(--color-term-amber)]">{children}</span>;
  if (fn) return <span className="text-[var(--color-term-amber)]">{children}</span>;
  if (comment) return <span className="text-[var(--color-fg-dim)]">{children}</span>;
  if (op) return <span className="text-[var(--color-fg-muted)]">{children}</span>;
  return <>{children}</>;
}

