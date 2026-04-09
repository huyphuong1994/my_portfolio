"use client";

/**
 * Client-side language provider for bilingual (vi/en) content.
 *
 * We keep this client-only and avoid cookies/localStorage hydration pitfalls
 * by defaulting to Vietnamese on first paint, then syncing from localStorage
 * inside an effect. A small inline script in the <head> could swap earlier,
 * but the default matches `lang="vi"` on <html> so there's no flash.
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Bilingual, Locale } from "@/types";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (next: Locale) => void;
  toggleLocale: () => void;
  /** Helper to resolve a Bilingual value to the current locale. */
  t: (value: Bilingual) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "portfolio-locale";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("vi");

  // Hydrate from localStorage on mount so the user's last choice sticks.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "vi" || saved === "en") {
        setLocaleState(saved);
      }
    } catch {
      /* ignore — private mode / storage disabled */
    }
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.lang = next;
    } catch {
      /* ignore */
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "vi" ? "en" : "vi");
  }, [locale, setLocale]);

  const t = useCallback(
    (value: Bilingual) => value[locale],
    [locale]
  );

  const value = useMemo(
    () => ({ locale, setLocale, toggleLocale, t }),
    [locale, setLocale, toggleLocale, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

/** Hook — must be called inside a component wrapped by <LanguageProvider>. */
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
