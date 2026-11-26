'use client';

import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n, { isLanguage, languageStorageKey } from '@/i18n/config';

export function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const syncDocument = (lng: string) => {
      document.documentElement.lang = lng;
      try {
        localStorage.setItem(languageStorageKey, lng);
      } catch {
        // Storage can be unavailable (private mode); the switch still works for this visit.
      }
    };

    i18n.on('languageChanged', syncDocument);

    let saved: string | null = null;
    try {
      saved = localStorage.getItem(languageStorageKey);
    } catch {
      saved = null;
    }
    if (isLanguage(saved) && saved !== i18n.language) {
      i18n.changeLanguage(saved);
    }

    return () => {
      i18n.off('languageChanged', syncDocument);
    };
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
