"use client";

/**
 * Skills section — tech stack displayed as a `tree src/` command output,
 * with per-category terminal cards and animated proficiency bars.
 *
 * The design groups skills by category so visitors can scan quickly.
 */

import { motion } from "framer-motion";
import {
  Boxes,
  Brain,
  Cloud,
  Database,
  Server,
  Sparkles,
} from "lucide-react";
import { skills, skillCategoryMeta } from "@/lib/data";
import type { Skill, SkillCategory } from "@/types";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { cn } from "@/lib/utils";

const categoryIcon: Record<SkillCategory, typeof Server> = {
  backend: Server,
  frontend: Boxes,
  database: Database,
  devops: Cloud,
  ai: Brain,
};

const categoryColor: Record<SkillCategory, string> = {
  backend: "text-[var(--color-term-green)]",
  frontend: "text-[var(--color-term-cyan)]",
  database: "text-[var(--color-term-amber)]",
  devops: "text-[var(--color-term-blue)]",
  ai: "text-[var(--color-term-purple)]",
};

const categoryOrder: SkillCategory[] = [
  "backend",
  "frontend",
  "database",
  "devops",
  "ai",
];

export function SkillsSection() {
  const { t, locale } = useLanguage();

  // Group once per render — cheap enough not to need useMemo
  const grouped = categoryOrder.map((cat) => ({
    category: cat,
    items: skills.filter((s) => s.category === cat),
  }));

  return (
    <section id="skills" className="relative scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          path="~/portfolio/skills"
          command="tree src/ --depth=2"
          title={locale === "vi" ? "Kỹ năng & Công nghệ" : "Skills & Stack"}
          description={
            locale === "vi"
              ? "Những công cụ tôi thường dùng trong công việc hằng ngày — chia theo lớp."
              : "The tools I reach for every day — grouped by layer of the stack."
          }
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {grouped.map(({ category, items }, idx) => {
            const Icon = categoryIcon[category];
            const meta = skillCategoryMeta[category];

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <TerminalWindow
                  title={meta.dir}
                  prompt={`ls ${meta.dir}`}
                  hideDots
                  className="group h-full transition-all hover:border-[var(--color-term-green)]/30 hover:shadow-glow-green"
                  bodyClassName="space-y-4"
                >
                  {/* Category header */}
                  <div className="flex items-center gap-2">
                    <Icon
                      size={16}
                      className={cn(categoryColor[category], "shrink-0")}
                    />
                    <span className="text-sm font-semibold text-[var(--color-fg)]">
                      {t(meta.label)}
                    </span>
                    <span className="ml-auto text-[10px] text-[var(--color-fg-dim)]">
                      {items.length} {locale === "vi" ? "mục" : "items"}
                    </span>
                  </div>

                  {/* Skill list */}
                  <ul className="space-y-2.5">
                    {items.map((skill) => (
                      <SkillRow key={skill.name} skill={skill} />
                    ))}
                  </ul>
                </TerminalWindow>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom strip — AI emphasis */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex items-center gap-3 rounded-lg border border-[var(--color-term-green)]/20 bg-[var(--color-term-green)]/[0.03] px-5 py-4 text-sm"
        >
          <Sparkles
            size={16}
            className="shrink-0 text-[var(--color-term-green)]"
          />
          <p className="text-[var(--color-fg-muted)]">
            <span className="text-[var(--color-term-green)]">
              $ env | grep AI:
            </span>{" "}
            {locale === "vi"
              ? "Tôi dùng AI (Claude, Cursor, OpenAI API) như một đồng đội hằng ngày để thiết kế, review và ship code nhanh hơn — không phải để thay thế tư duy."
              : "I treat AI (Claude, Cursor, OpenAI API) as a daily teammate for design, review and shipping — not a replacement for thinking."}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   Single skill row — name + years + animated bar
   ============================================================ */
function SkillRow({ skill }: { skill: Skill }) {
  return (
    <li className="group/skill">
      <div className="mb-1 flex items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-[var(--color-fg-faint)]">├─</span>
          <span className="font-medium text-[var(--color-fg)] transition-colors group-hover/skill:text-[var(--color-term-green)]">
            {skill.name}
          </span>
        </div>
        <span className="text-[10px] text-[var(--color-fg-dim)]">
          {skill.years}y
        </span>
      </div>
      {/* Proficiency bar */}
      <div className="ml-4 h-1 overflow-hidden rounded-full bg-[var(--color-border)]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-[var(--color-term-green-dim)] to-[var(--color-term-green)]"
        />
      </div>
    </li>
  );
}
