"use client";

/**
 * Contact section — a terminal-styled form.
 * Each input is prefixed with a CLI prompt, showing the variable name
 * being assigned. Submits via fetch() to /api/contact, which currently
 * just logs on the server (user can wire up an email service later).
 */

import { useState, type ComponentType, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Check, Mail, Phone, Send, AlertCircle } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { personal } from "@/lib/data";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const { locale } = useLanguage();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setErrorMsg(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, message }),
      });

      const data = (await res.json()) as { error?: string };

      if (!res.ok) {
        throw new Error(data.error ?? "Something went wrong");
      }

      setStatus("success");
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Unknown error");
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          path="~/portfolio/contact"
          command="./send-message --interactive"
          title={locale === "vi" ? "Cùng xây dựng gì đó" : "Let's build something"}
          description={
            locale === "vi"
              ? "Có một ý tưởng, dự án, hoặc chỉ muốn nói 'chào'? Gửi tin nhắn hoặc gọi thẳng email nhé."
              : "Got an idea, a project, or just want to say hi? Drop me a line below or email me directly."
          }
        />

        <div className="grid gap-6 lg:grid-cols-5">
          {/* LEFT — contact info card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <TerminalWindow
              title="contact.json"
              prompt="cat contact.json"
              className="h-full"
            >
              <div className="space-y-4 font-mono text-sm">
                <div className="text-[var(--color-fg-muted)]">{"{"}</div>

                <InfoRow label="email" href={`mailto:${personal.email}`} Icon={Mail}>
                  {personal.email}
                </InfoRow>

                <InfoRow label="phone" href={`tel:${personal.phoneE164}`} Icon={Phone}>
                  {personal.phone}
                </InfoRow>

                <InfoRow
                  label="github"
                  href={personal.github}
                  Icon={GithubIcon}
                  external
                >
                  /{personal.githubHandle}
                </InfoRow>

                <div className="ml-4 text-[var(--color-fg-muted)]">
                  <span className="text-[var(--color-term-blue)]">
                    &quot;status&quot;
                  </span>
                  <span>: </span>
                  <span className="text-[var(--color-term-green)]">
                    &quot;available&quot;
                  </span>
                  <span>,</span>
                </div>
                <div className="ml-4 text-[var(--color-fg-muted)]">
                  <span className="text-[var(--color-term-blue)]">
                    &quot;timezone&quot;
                  </span>
                  <span>: </span>
                  <span className="text-[var(--color-term-green)]">
                    &quot;UTC+7 (GMT)&quot;
                  </span>
                  <span>,</span>
                </div>
                <div className="ml-4 text-[var(--color-fg-muted)]">
                  <span className="text-[var(--color-term-blue)]">
                    &quot;response_time&quot;
                  </span>
                  <span>: </span>
                  <span className="text-[var(--color-term-green)]">
                    &quot;{locale === "vi" ? "< 24 giờ" : "< 24h"}&quot;
                  </span>
                </div>

                <div className="text-[var(--color-fg-muted)]">{"}"}</div>

                <div className="mt-6 rounded-md border border-[var(--color-term-green)]/20 bg-[var(--color-term-green)]/[0.04] p-3 text-xs text-[var(--color-fg-muted)]">
                  <div className="mb-1 flex items-center gap-2 text-[var(--color-term-green)]">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-term-green)] opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-term-green)]" />
                    </span>
                    {locale === "vi" ? "Online hôm nay" : "Online today"}
                  </div>
                  {locale === "vi"
                    ? "Thường trả lời trong vài giờ làm việc."
                    : "Usually reply within a few business hours."}
                </div>
              </div>
            </TerminalWindow>
          </motion.div>

          {/* RIGHT — contact form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <TerminalWindow
              title="new-message.sh"
              prompt="./send-message --interactive"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <TerminalInput
                  label="name"
                  value={name}
                  onChange={setName}
                  placeholder={locale === "vi" ? "Tên của bạn" : "Your name"}
                  required
                />
                <TerminalInput
                  label="phone"
                  type="tel"
                  value={phone}
                  onChange={setPhone}
                  placeholder={
                    locale === "vi" ? "Số điện thoại của bạn" : "Your phone number"
                  }
                  required
                />
                <TerminalInput
                  label="email"
                  type="email"
                  value={email}
                  onChange={setEmail}
                  placeholder={
                    locale === "vi"
                      ? "you@example.com (tuỳ chọn)"
                      : "you@example.com (optional)"
                  }
                />
                <TerminalTextarea
                  label="message"
                  value={message}
                  onChange={setMessage}
                  placeholder={
                    locale === "vi"
                      ? "Hãy kể về dự án hoặc ý tưởng của bạn..."
                      : "Tell me about your project or idea..."
                  }
                  required
                />

                {/* Status messages */}
                {status === "success" && (
                  <div className="flex items-center gap-2 rounded-md border border-[var(--color-term-green)]/30 bg-[var(--color-term-green)]/10 px-3 py-2 text-sm text-[var(--color-term-green)]">
                    <Check size={14} />
                    {locale === "vi"
                      ? "Đã gửi! Tôi sẽ phản hồi sớm."
                      : "Message sent! I'll get back to you soon."}
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-center gap-2 rounded-md border border-[var(--color-term-red)]/30 bg-[var(--color-term-red)]/10 px-3 py-2 text-sm text-[var(--color-term-red)]">
                    <AlertCircle size={14} />
                    {errorMsg ??
                      (locale === "vi"
                        ? "Có lỗi xảy ra. Hãy thử lại."
                        : "Something went wrong. Please try again.")}
                  </div>
                )}

                {/* Submit button */}
                <div className="flex items-center justify-between gap-3 border-t border-[var(--color-border)] pt-4">
                  <div className="text-[11px] text-[var(--color-fg-dim)]">
                    <span className="text-[var(--color-term-green)]">$</span>{" "}
                    {locale === "vi"
                      ? "Nhấn Enter hoặc click gửi"
                      : "Press Enter or click send"}
                  </div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className={cn(
                      "group inline-flex items-center gap-2 rounded-md border border-[var(--color-term-green)]/40 bg-[var(--color-term-green)]/10 px-4 py-2 text-sm font-medium text-[var(--color-term-green)] transition-all",
                      "hover:border-[var(--color-term-green)] hover:bg-[var(--color-term-green)]/20 hover:shadow-[0_0_30px_-5px_rgba(74,222,128,0.5)]",
                      "disabled:cursor-not-allowed disabled:opacity-60"
                    )}
                  >
                    {status === "loading" ? (
                      <>
                        <div className="h-3 w-3 animate-spin rounded-full border-2 border-[var(--color-term-green)] border-t-transparent" />
                        {locale === "vi" ? "Đang gửi..." : "Sending..."}
                      </>
                    ) : (
                      <>
                        <Send
                          size={13}
                          className="transition-transform group-hover:translate-x-0.5"
                        />
                        {locale === "vi" ? "Gửi tin nhắn" : "Send message"}
                      </>
                    )}
                  </button>
                </div>
              </form>
            </TerminalWindow>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Small helpers
   ============================================================ */
/** Icons can be lucide components or our own brand SVGs — duck-typed. */
type InfoIcon = ComponentType<{ size?: number | string; className?: string }>;

function InfoRow({
  label,
  href,
  Icon,
  children,
  external = false,
}: {
  label: string;
  href: string;
  Icon: InfoIcon;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <div className="ml-4 flex items-start gap-2">
      <div className="flex-1">
        <span className="text-[var(--color-term-blue)]">
          &quot;{label}&quot;
        </span>
        <span className="text-[var(--color-fg-muted)]">: </span>
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="inline-flex items-center gap-1 text-[var(--color-term-green)] transition-colors hover:underline"
        >
          <Icon size={11} />
          &quot;{children}&quot;
        </a>
        <span className="text-[var(--color-fg-muted)]">,</span>
      </div>
    </div>
  );
}

function TerminalInput({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
}) {
  return (
    <label className="block">
      <div className="mb-1.5 flex items-center gap-2 font-mono text-xs">
        <span className="text-[var(--color-term-green)]">$</span>
        <span className="text-[var(--color-term-purple)]">read</span>
        <span className="text-[var(--color-term-cyan)]">{label}</span>
        {required && <span className="text-[var(--color-term-red)]">*</span>}
      </div>
      <div className="flex items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-3 py-2.5 font-mono transition-colors focus-within:border-[var(--color-term-green)]/50 focus-within:shadow-[0_0_0_3px_rgba(74,222,128,0.08)]">
        <span className="text-[var(--color-term-green)]">&gt;</span>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          className="flex-1 bg-transparent text-sm text-[var(--color-fg)] placeholder:text-[var(--color-fg-faint)] focus:outline-none"
        />
      </div>
    </label>
  );
}

function TerminalTextarea({
  label,
  value,
  onChange,
  placeholder,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <div className="mb-1.5 flex items-center gap-2 font-mono text-xs">
        <span className="text-[var(--color-term-green)]">$</span>
        <span className="text-[var(--color-term-purple)]">cat</span>
        <span className="text-[var(--color-fg-muted)]">&gt;</span>
        <span className="text-[var(--color-term-cyan)]">{label}</span>
        <span className="text-[var(--color-fg-muted)]">.txt</span>
        {required && <span className="text-[var(--color-term-red)]">*</span>}
      </div>
      <div className="flex items-start gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-3 py-2.5 font-mono transition-colors focus-within:border-[var(--color-term-green)]/50 focus-within:shadow-[0_0_0_3px_rgba(74,222,128,0.08)]">
        <span className="mt-1 text-[var(--color-term-green)]">&gt;</span>
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          rows={5}
          className="flex-1 resize-y bg-transparent text-sm text-[var(--color-fg)] placeholder:text-[var(--color-fg-faint)] focus:outline-none"
        />
      </div>
    </label>
  );
}
