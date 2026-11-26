import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import bn from './locales/bn.json';
import en from './locales/en.json';

export const languages = ['bn', 'en'] as const;
export type Language = (typeof languages)[number];

// Server render and first client render always use this language so hydration matches;
// a saved preference is applied right after mount (see I18nProvider).
export const defaultLanguage: Language = 'bn';
export const languageStorageKey = 'nukta-lang';

export const resources = {
  bn: { translation: bn },
  en: { translation: en },
} as const;

export function isLanguage(value: unknown): value is Language {
  return typeof value === 'string' && (languages as readonly string[]).includes(value);
}

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: defaultLanguage,
    fallbackLng: defaultLanguage,
    supportedLngs: languages,
    interpolation: { escapeValue: false },
    initAsync: false,
    react: { useSuspense: false },
  });
}

export default i18n;
