'use client';

import React, { createContext, useContext, useEffect, useMemo, useSyncExternalStore } from 'react';
import { Language, Translations, translations } from '../locales/translations';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const STORAGE_KEY = 'zarvadiy_lang';
const listeners = new Set<() => void>();
let memoryLanguage: Language | null = null; // keeps the choice for this session if storage is unavailable

function isLanguage(v: unknown): v is Language {
  return v === 'en' || v === 'ru' || v === 'uz';
}

/** Saved choice wins; otherwise fall back to the browser language; otherwise English. */
function readLanguage(): Language {
  if (memoryLanguage) return memoryLanguage;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (isLanguage(saved)) return saved;
  } catch {
    // storage unavailable (private mode etc.) — fall through to browser language
  }
  const nav = (navigator.language || 'en').toLowerCase();
  if (nav.startsWith('ru')) return 'ru';
  if (nav.startsWith('uz')) return 'uz';
  return 'en';
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener('storage', onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener('storage', onChange);
  };
}

const getServerSnapshot = (): Language => 'en';

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const language = useSyncExternalStore(subscribe, readLanguage, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo<LanguageContextProps>(
    () => ({
      language,
      t: translations[language],
      setLanguage: (lang: Language) => {
        memoryLanguage = lang;
        try {
          window.localStorage.setItem(STORAGE_KEY, lang);
        } catch {
          // ignore storage errors; still notify so the UI updates this session
        }
        listeners.forEach((l) => l());
      },
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
