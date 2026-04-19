/**
 * Shared TypeScript interfaces for the portfolio.
 * Keeps data shapes explicit so TS catches mismatches at build time.
 */

/** Supported UI languages for bilingual content. */
export type Locale = "vi" | "en";

/** Bilingual string — each piece of content provides both locales. */
export interface Bilingual {
  vi: string;
  en: string;
}

/** Single navigation entry (rendered as a CLI flag). */
export interface NavItem {
  /** Anchor target on the page, e.g. "#projects". */
  href: string;
  /** Display label (CLI flag form, e.g. "--projects"). */
  flag: string;
  /** Bilingual human-readable label. */
  label: Bilingual;
}

/** Skill category (grouping within the tech stack). */
export type SkillCategory =
  | "backend"
  | "frontend"
  | "database"
  | "devops"
  | "ai";

/** A single tool/framework/language in the stack. */
export interface Skill {
  name: string;
  category: SkillCategory;
  /** 0-100 proficiency; used for the progress bar visual. */
  level: number;
  /** Years of hands-on experience. */
  years: number;
}

/** A project displayed in the projects grid. */
export interface Project {
  slug: string;
  title: string;
  summary: Bilingual;
  description: Bilingual;
  tags: string[];
  /** Which role the dev played, e.g. "Lead", "Solo", "Team". */
  role: Bilingual;
  year: string;
  status: "shipped" | "in-progress" | "archived";
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

/** A work/education entry in the experience timeline. */
export interface Experience {
  /** Short commit-style hash for the git-log aesthetic. */
  hash: string;
  company: string;
  role: Bilingual;
  period: string;
  /** Bulleted highlights — kept concise for terminal readability. */
  highlights: Bilingual[];
  stack: string[];
}

/** Individual stat displayed as a `const` declaration in the hero. */
export interface HeroStat {
  label: string;
  value: string;
  /** Syntax color for the value token. */
  tone: "green" | "amber" | "blue" | "purple" | "cyan";
}

/** Payload posted to /api/contact. */
export interface ContactPayload {
  name: string;
  phone: string;
  email?: string;
  message: string;
}
