"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Dictionary, Locale, dictionaries, en } from "@/lib/i18n/dictionary";

interface LanguageContextType {
  lang: Locale;
  dict: Dictionary;
  toggleLang: () => void;
  setLang: (lang: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  dict: en,
  toggleLang: () => {},
  setLang: () => {},
});

const STORAGE_KEY = "lang";

/**
 * Language provider backing the site's EN / 繁體中文 toggle. Server-rendered
 * markup is always English (matching the default state below), so there is
 * no hydration mismatch; a saved or browser-detected Chinese preference is
 * applied client-side right after mount, mirroring the ThemeProvider pattern.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Locale>("en");

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch {}

    let resolved: Locale = "en";
    if (saved === "en" || saved === "zh-TW") {
      resolved = saved;
    } else if (typeof navigator !== "undefined") {
      const browserLangs = navigator.languages || [navigator.language];
      if (browserLangs.some((l) => /^zh/i.test(l))) {
        resolved = "zh-TW";
      }
    }

    if (resolved !== "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync with persisted/browser preference
      setLangState(resolved);
    }
    document.documentElement.lang = resolved === "zh-TW" ? "zh-Hant" : "en";
  }, []);

  const setLang = (next: Locale) => {
    setLangState(next);
    document.documentElement.lang = next === "zh-TW" ? "zh-Hant" : "en";
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  };

  const toggleLang = () => setLang(lang === "en" ? "zh-TW" : "en");

  return (
    <LanguageContext.Provider value={{ lang, dict: dictionaries[lang], toggleLang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export default LanguageProvider;
