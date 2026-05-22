import { motion } from 'framer-motion';
import { themeLabels } from '../theme/catppuccin';
import { useTheme } from '../theme/ThemeProvider';
import { useBackground } from '../context/BackgroundContext';

export function ThemeSwitcher({ id = 'default' }: { id?: string }) {
  const { theme, themes, setTheme } = useTheme();
  const { effect } = useBackground();

  return (
    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
      <span className="uppercase tracking-[0.35em] text-theme-text-muted/85">Theme</span>
      <div
        className={[
          "relative inline-flex flex-wrap gap-1 rounded-xl border p-1 transition-all duration-300 ease-out",
          effect !== 'none'
            ? "border-theme-accent/15 bg-transparent"
            : "border-theme-accent/20 bg-theme-bg shadow-lg"
        ].join(' ')}
        role="radiogroup"
        aria-label="Color theme"
      >
        {themes.map((option) => {
          const isActive = option === theme;

          return (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={isActive}
              onClick={() => setTheme(option)}
              className={[
                'relative rounded-lg px-3 py-1.5 font-medium transition-colors duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-focus focus-visible:ring-offset-2 focus-visible:ring-offset-theme-bg',
                isActive
                  ? 'text-theme-on-accent'
                  : 'text-theme-text-muted hover:text-theme-text',
              ].join(' ')}
            >
              {isActive && (
                <motion.span
                  layoutId={`theme-pill-${id}`}
                  className="absolute inset-0 rounded-lg bg-theme-accent shadow-sm"
                  transition={{ type: 'spring', stiffness: 150, damping: 22 }}
                />
              )}
              <span className="relative z-10">{themeLabels[option]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}