"use client";

/**
 * About section — bio displayed as a `cat about.md` command output
 * inside a terminal window. Includes a small "file metadata" strip.
 */

import { m } from "framer-motion";
import { Calendar, MapPin, Terminal, Coffee } from "lucide-react";
import { personal } from "@/lib/data";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TerminalWindow } from "@/components/ui/TerminalWindow";

export function AboutSection() {
  const { t, locale } = useLanguage();

  const quickFacts = [
    {
      icon: MapPin,
      label: t(personal.location),
    },
    {
      icon: Calendar,
      label: locale === "vi" ? "7+ năm kinh nghiệm" : "7+ years exp.",
    },
    {
      icon: Terminal,
      label: locale === "vi" ? "Full-stack · AI native" : "Full-stack · AI native",
    },
    {
      icon: Coffee,
      label: locale === "vi" ? "Mọt code & cà phê" : "Code & coffee addict",
    },
  ];

  return (
    <section id="about" className="relative scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          path="~/portfolio/about"
          command="cat about.md"
          title={locale === "vi" ? "Về tôi" : "About me"}
          description={
            locale === "vi"
              ? "Một đoạn giới thiệu ngắn gọn về con người và triết lý làm việc."
              : "A quick read about who I am and how I work."
          }
        />

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Bio card */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <TerminalWindow
              title="about.md"
              subtitle="~/portfolio"
              prompt="cat about.md"
            >
              <div className="space-y-5 text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
                {/* Markdown header line */}
                <div>
                  <span className="text-[var(--color-term-purple)]"># </span>
                  <span className="text-[var(--color-fg)]">
                    {personal.name}
                  </span>
                </div>

                {/* Italic subtitle mimicking markdown */}
                <div className="italic text-[var(--color-term-amber)]">
                  &gt; {t(personal.title)}
                </div>

                {/* The bio paragraph */}
                <p>{t(personal.bio)}</p>

                {/* Bullet list */}
                <div className="space-y-1.5">
                  <div>
                    <span className="text-[var(--color-term-green)]">- </span>
                    {locale === "vi"
                      ? "Tin vào code sạch, tài liệu tốt và pull request nhỏ."
                      : "Believer in clean code, clear docs and small PRs."}
                  </div>
                  <div>
                    <span className="text-[var(--color-term-green)]">- </span>
                    {locale === "vi"
                      ? "Xem AI là đồng đội, không phải đối thủ — dùng mỗi ngày để ship nhanh hơn."
                      : "Treats AI as a teammate, not a rival — used daily to ship faster."}
                  </div>
                  <div>
                    <span className="text-[var(--color-term-green)]">- </span>
                    {locale === "vi"
                      ? "Luôn đặt câu hỏi 'tại sao' trước khi viết dòng code đầu tiên."
                      : "Always asks 'why' before writing the first line of code."}
                  </div>
                </div>

                {/* Inline code mention */}
                <div className="pt-2 text-sm text-[var(--color-fg-dim)]">
                  <span className="text-[var(--color-fg-faint)]">//</span>{" "}
                  {locale === "vi"
                    ? "Đang tìm các cơ hội remote hoặc dự án thú vị — hãy "
                    : "Currently open to remote roles and exciting side-quests — say "}
                  <a
                    href="#contact"
                    className="rounded bg-[var(--color-term-green)]/10 px-1.5 py-0.5 text-[var(--color-term-green)] transition-colors hover:bg-[var(--color-term-green)]/20"
                  >
                    hi();
                  </a>
                </div>
              </div>
            </TerminalWindow>
          </m.div>

          {/* Quick facts side panel */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4"
          >
            <TerminalWindow
              title="stats.json"
              prompt="jq '.' stats.json"
              className="h-full"
            >
              <div className="space-y-3 font-mono text-sm">
                {quickFacts.map(({ icon: Icon, label }, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-3 py-2.5 transition-colors hover:border-[var(--color-term-green)]/30 hover:bg-[var(--color-term-green)]/[0.03]"
                  >
                    <Icon size={14} className="text-[var(--color-term-green)]" />
                    <span className="text-[var(--color-fg-muted)]">{label}</span>
                  </div>
                ))}

                {/* Little signature block */}
                <div className="mt-4 rounded-md border border-[var(--color-term-green)]/20 bg-[var(--color-term-green)]/[0.04] p-3 text-xs text-[var(--color-fg-muted)]">
                  <div className="mb-1 text-[var(--color-term-green)]">
                    $ echo $PHILOSOPHY
                  </div>
                  <div className="italic">
                    {locale === "vi"
                      ? '"Luôn cầu tiến — ship nhanh, học liên tục, không ngại phá vỡ giới hạn của chính mình."'
                      : '"Stay curious — ship fast, learn forever, and keep pushing the bar."'}
                  </div>
                </div>
              </div>
            </TerminalWindow>
          </m.div>
        </div>
      </div>
    </section>
  );
}
