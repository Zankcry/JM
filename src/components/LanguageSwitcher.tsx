import { motion } from 'framer-motion';
import { useLanguage, Language } from '../context/LanguageContext';
import { useBackground } from '../context/BackgroundContext';
import { IconLanguage } from '@tabler/icons-react';

export function LanguageSwitcher({ id = 'default' }: { id?: string }) {
  const { language, setLanguage } = useLanguage();
  const { effect } = useBackground();

  const options: { value: Language; label: string; fullLabel: string }[] = [
    { value: 'en', label: 'EN', fullLabel: language === 'ja' ? '英語' : 'English' },
    { value: 'ja', label: 'JP', fullLabel: '日本語' },
  ];

  return (
    <div className="flex items-center gap-2 text-xs sm:text-sm">
      <IconLanguage size={16} className="text-theme-text-muted/80" />
      <div
        className={[
          'relative inline-flex items-center gap-1 rounded-xl border p-1 transition-all duration-300 ease-out',
          effect !== 'none'
            ? 'border-theme-accent/15 bg-transparent'
            : 'border-theme-accent/20 bg-theme-bg shadow-lg',
        ].join(' ')}
        role="radiogroup"
        aria-label={language === 'ja' ? '言語を選択' : 'Select language'}
      >
        {options.map((option) => {
          const isActive = option.value === language;

          return (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={isActive}
              aria-label={language === 'ja' ? `${option.fullLabel}に切り替え` : `Switch language to ${option.fullLabel}`}
              onClick={() => setLanguage(option.value)}
              className={[
                'relative rounded-lg px-2.5 py-1 text-xs font-semibold tracking-wide transition-colors duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-focus focus-visible:ring-offset-2 focus-visible:ring-offset-theme-bg',
                isActive
                  ? 'text-theme-on-accent'
                  : 'text-theme-text-muted hover:text-theme-text',
              ].join(' ')}
            >
              {isActive && (
                <motion.span
                  layoutId={`lang-pill-${id}`}
                  className="absolute inset-0 rounded-lg bg-theme-accent shadow-sm"
                  transition={{ type: 'spring', stiffness: 150, damping: 22 }}
                />
              )}
              <span className="relative z-10">{option.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
