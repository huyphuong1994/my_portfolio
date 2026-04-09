"use client";

/**
 * Projects section — each project is a terminal-window card,
 * with a status badge, tags, and live/github action links.
 * Featured projects render full-width at the top.
 */

import { motion } from "framer-motion";
import { ExternalLink, Sparkles, Clock, Archive } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { projects } from "@/lib/data";
import type { Project } from "@/types";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const statusConfig: Record<
  Project["status"],
  { label: { vi: string; en: string }; color: string; Icon: typeof Sparkles }
> = {
  shipped: {
    label: { vi: "Đã release", en: "Shipped" },
    color: "text-[var(--color-term-green)] bg-[var(--color-term-green)]/10 border-[var(--color-term-green)]/30",
    Icon: Sparkles,
  },
  "in-progress": {
    label: { vi: "Đang làm", en: "In progress" },
    color: "text-[var(--color-term-amber)] bg-[var(--color-term-amber)]/10 border-[var(--color-term-amber)]/30",
    Icon: Clock,
  },
  archived: {
    label: { vi: "Lưu trữ", en: "Archived" },
    color: "text-[var(--color-fg-dim)] bg-[var(--color-fg-dim)]/10 border-[var(--color-fg-dim)]/30",
    Icon: Archive,
  },
};

export function ProjectsSection() {
  const { t, locale } = useLanguage();

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          path="~/portfolio/projects"
          command="ls -la ./projects --featured"
          title={locale === "vi" ? "Dự án nổi bật" : "Selected work"}
          description={
            locale === "vi"
              ? "Một vài sản phẩm tôi đã xây dựng — thật hoặc sắp thật. (Dữ liệu mẫu, sẽ cập nhật.)"
              : "A few things I've built or am building. (Placeholder data, to be updated.)"
          }
        />

        {/* Featured grid */}
        <div className="mb-6 grid gap-6 lg:grid-cols-2">
          {featured.map((project, idx) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={idx}
              featured
            />
          ))}
        </div>

        {/* Secondary grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, idx) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={idx + featured.length}
            />
          ))}
        </div>

        {/* Footer hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-bg-elev)]/50 px-5 py-4 text-center text-sm text-[var(--color-fg-muted)]"
        >
          <span className="text-[var(--color-term-green)]">$</span>{" "}
          {locale === "vi"
            ? "Muốn xem thêm? Tất cả repos đều có trên GitHub của tôi —"
            : "Want more? Everything else lives on my GitHub —"}{" "}
          <a
            href="https://github.com/huyphuong1994"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-term-green)] underline-offset-4 hover:underline"
          >
            github.com/huyphuong1994
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   ProjectCard — terminal window per project
   ============================================================ */
function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) {
  const { t, locale } = useLanguage();
  const status = statusConfig[project.status];
  const StatusIcon = status.Icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] transition-all",
        "hover:border-[var(--color-term-green)]/40 hover:shadow-[0_20px_60px_-20px_rgba(74,222,128,0.25)]"
      )}
    >
      {/* Header — terminal chrome */}
      <header className="flex items-center gap-3 border-b border-[var(--color-border)] bg-[var(--color-bg-elev)] px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="flex-1 truncate text-center text-[11px] text-[var(--color-fg-muted)]">
          {project.slug}/README.md
        </span>
        <span className="text-[10px] text-[var(--color-fg-dim)]">
          {project.year}
        </span>
      </header>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        {/* Title row */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="mb-1 text-[11px] text-[var(--color-fg-dim)]">
              <span className="text-[var(--color-term-green)]">$</span> ./run{" "}
              {project.slug}
            </div>
            <h3
              className={cn(
                "font-bold text-[var(--color-fg)] transition-colors group-hover:text-[var(--color-term-green)]",
                featured ? "text-2xl" : "text-xl"
              )}
            >
              {project.title}
            </h3>
          </div>

          {/* Status badge */}
          <span
            className={cn(
              "inline-flex shrink-0 items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-medium",
              status.color
            )}
          >
            <StatusIcon size={10} />
            {status.label[locale]}
          </span>
        </div>

        {/* Summary */}
        <p className="text-sm leading-relaxed text-[var(--color-fg-muted)]">
          {t(project.summary)}
        </p>

        {/* Description — only on featured */}
        {featured && (
          <p className="text-xs leading-relaxed text-[var(--color-fg-dim)]">
            {t(project.description)}
          </p>
        )}

        {/* Role indicator */}
        <div className="text-[11px] text-[var(--color-fg-dim)]">
          <span className="text-[var(--color-term-purple)]">const</span>{" "}
          <span className="text-[var(--color-term-cyan)]">role</span>{" "}
          <span className="text-[var(--color-fg-muted)]">=</span>{" "}
          <span className="text-[var(--color-term-green)]">
            &quot;{t(project.role)}&quot;
          </span>
        </div>

        {/* Tags */}
        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-[var(--color-border)] bg-[var(--color-bg-hover)] px-2 py-0.5 text-[10px] font-medium text-[var(--color-fg-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action links */}
        <div className="flex items-center gap-3 border-t border-[var(--color-border)] pt-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-term-green)]"
            >
              <ExternalLink size={12} />
              {locale === "vi" ? "Xem trực tiếp" : "Live demo"}
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-term-green)]"
            >
              <GithubIcon size={12} />
              {locale === "vi" ? "Mã nguồn" : "Source"}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
