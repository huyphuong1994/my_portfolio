"use client";

/**
 * Experience section — rendered as `git log --graph` output.
 * Each experience is a commit with a hash, author line, date and
 * bullet-point body. The left rail uses the same style as git log --graph.
 */

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { experiences, personal } from "@/lib/data";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TerminalWindow } from "@/components/ui/TerminalWindow";

export function ExperienceSection() {
  const { t, locale } = useLanguage();

  return (
    <section id="experience" className="relative scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          path="~/portfolio/experience"
          command="git log --oneline --graph"
          title={locale === "vi" ? "Kinh nghiệm" : "Work history"}
          description={
            locale === "vi"
              ? "Hành trình nghề nghiệp của tôi — đọc như git log."
              : "My career, laid out like a git log."
          }
        />

        <TerminalWindow
          title="career.log"
          subtitle={`${experiences.length} commits`}
          prompt="git log --graph --decorate --all"
          bodyClassName="py-2 sm:py-4"
        >
          <div className="relative">
            {experiences.map((exp, idx) => {
              const isLast = idx === experiences.length - 1;
              return (
                <motion.div
                  key={exp.hash}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative flex gap-4 pb-8 sm:gap-5"
                >
                  {/* Graph rail — dot + vertical line */}
                  <div className="relative flex flex-col items-center">
                    <div className="relative z-10 flex h-4 w-4 items-center justify-center">
                      <div className="absolute inset-0 animate-ping rounded-full bg-[var(--color-term-green)]/40" />
                      <div className="relative h-3 w-3 rounded-full border-2 border-[var(--color-term-green)] bg-[var(--color-bg-card)]" />
                    </div>
                    {!isLast && (
                      <div className="mt-1 h-full w-px flex-1 bg-gradient-to-b from-[var(--color-term-green)]/40 to-[var(--color-border)]" />
                    )}
                  </div>

                  {/* Commit body */}
                  <div className="flex-1 pb-2">
                    {/* Commit header — "commit <hash>" */}
                    <div className="mb-1 font-mono text-[11px] text-[var(--color-fg-dim)]">
                      <span className="text-[var(--color-term-amber)]">
                        commit {exp.hash}
                      </span>
                      {idx === 0 && (
                        <span className="ml-2 rounded bg-[var(--color-term-green)]/10 px-1.5 py-0.5 text-[10px] text-[var(--color-term-green)]">
                          HEAD → main
                        </span>
                      )}
                    </div>

                    {/* Author line */}
                    <div className="mb-1 font-mono text-[11px] text-[var(--color-fg-dim)]">
                      Author: {personal.name} &lt;{personal.email}&gt;
                    </div>

                    {/* Date */}
                    <div className="mb-3 flex items-center gap-2 font-mono text-[11px] text-[var(--color-fg-dim)]">
                      <Calendar size={10} />
                      <span>Date: {exp.period}</span>
                    </div>

                    {/* Commit message — role @ company */}
                    <div className="mb-3 flex items-center gap-2">
                      <Briefcase
                        size={14}
                        className="shrink-0 text-[var(--color-term-green)]"
                      />
                      <h3 className="text-base font-semibold text-[var(--color-fg)] sm:text-lg">
                        {t(exp.role)}{" "}
                        <span className="text-[var(--color-fg-dim)]">@</span>{" "}
                        <span className="text-[var(--color-term-amber)]">
                          {exp.company}
                        </span>
                      </h3>
                    </div>

                    {/* Highlights as commit body */}
                    <ul className="mb-3 space-y-1.5 text-sm text-[var(--color-fg-muted)]">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex gap-2 leading-relaxed"
                        >
                          <span className="shrink-0 text-[var(--color-term-green)]">
                            +
                          </span>
                          <span>{t(h)}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Stack chips */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-2 py-0.5 text-[10px] text-[var(--color-fg-muted)]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Terminal end line */}
            <div className="ml-6 font-mono text-xs text-[var(--color-fg-dim)]">
              <span className="text-[var(--color-term-green)]">$</span>{" "}
              <span className="cursor-blink">_</span>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
