"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { type Locale, type Translations, getTranslations } from "./i18n";

interface LocaleContextType {
  locale: Locale;
  t: Translations;
  toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("de");

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "de" ? "en" : "de"));
  }, []);

  const t = getTranslations(locale);

  return (
    <LocaleContext.Provider value={{ locale, t, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
