'use client';

import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { languages, type Language } from '@/i18n/config';

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { t, i18n } = useTranslation();
  const current = i18n.resolvedLanguage ?? i18n.language;

  const shortLabel: Record<Language, string> = {
    bn: t('language.bnShort'),
    en: t('language.enShort'),
  };
  const fullLabel: Record<Language, string> = {
    bn: t('language.bn'),
    en: t('language.en'),
  };

  return (
    <div
      role="group"
      aria-label={t('language.label')}
      className={cn('inline-flex items-center rounded-full border border-line bg-white p-0.5 text-xs font-semibold', className)}
    >
      {languages.map((lng) => {
        const active = current === lng;
        return (
          <button
            key={lng}
            type="button"
            lang={lng}
            onClick={() => i18n.changeLanguage(lng)}
            aria-pressed={active}
            aria-label={t('language.switchTo', { language: fullLabel[lng] })}
            className={cn(
              'min-w-9 px-2.5 py-1 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40',
              lng === 'bn' && 'font-bengali',
              active ? 'bg-primary-soft text-primary-deep' : 'text-body hover:text-ink'
            )}
          >
            {shortLabel[lng]}
          </button>
        );
      })}
    </div>
  );
}
