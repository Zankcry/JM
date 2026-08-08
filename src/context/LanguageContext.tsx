import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { translations } from '../data/translations';
import { LanguageTransitionOverlay } from '../components/LanguageTransitionOverlay';

export type Language = 'en' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'portfolio_language';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [transitioningLang, setTransitioningLang] = useState<Language | null>(null);
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'ja') return saved;
      // Default fallback or check browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('ja')) return 'ja';
    } catch (e) {
      // ignore
    }
    return 'en';
  });

  const handleDone = useCallback(() => {
    setTransitioningLang(null);
  }, []);

  const setLanguage = (lang: Language) => {
    if (lang !== language && !transitioningLang) {
      setTransitioningLang(lang);
      // Change language state halfway through transition when overlay fully covers screen
      setTimeout(() => {
        setLanguageState(lang);
        try {
          localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) {
          // ignore
        }
      }, 350);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ja' : 'en');
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Lookup key in translations dictionary
  const t = (key: string, fallback?: string): string => {
    const translation = translations[key];
    if (translation && translation[language]) {
      return translation[language];
    }
    return fallback ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      <LanguageTransitionOverlay
        targetLang={transitioningLang}
        onDone={handleDone}
      />
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
