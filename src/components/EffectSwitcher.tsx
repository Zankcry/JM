import { motion } from 'framer-motion';
import { useBackground } from '../context/BackgroundContext';

export function EffectSwitcher() {
  const { effect, setEffect, smokeEnabled, setSmokeEnabled } = useBackground();

  const options = [
    { value: 'none', label: 'None' },
    { value: 'cyber-pattern', label: 'Cyber Grid' },
    { value: 'dot-matrix', label: 'Dot Matrix' },
    { value: 'retro-scanlines', label: 'Scanlines' },
    { value: 'hex-blueprint', label: 'Hex Blueprint' },
  ] as const;

  return (
    <div className="flex flex-wrap items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em]">
      {/* Background Effect Selector */}
      <div className="flex items-center gap-3">
        <span className="text-theme-accent/40 tracking-[0.3em]">FX //</span>
        <div
          className="relative inline-flex gap-1 rounded-lg border border-theme-accent/15 bg-theme-bg/60 p-0.5 shadow-sm"
          role="radiogroup"
          aria-label="Background effect"
        >
          {options.map((option) => {
            const isActive = option.value === effect;

            return (
              <button
                key={option.value}
                type="button"
                role="radio"
                aria-checked={isActive}
                onClick={() => setEffect(option.value)}
                className={[
                  'relative rounded-md px-3 py-1 font-bold text-[9px] tracking-wider uppercase transition-colors duration-200 ease-out focus:outline-none focus-visible:ring-1 focus-visible:ring-theme-focus',
                  isActive
                    ? 'text-theme-on-accent font-semibold'
                    : 'text-theme-text-muted hover:text-theme-text',
                ].join(' ')}
              >
                {isActive && (
                  <motion.span
                    layoutId="effect-pill"
                    className="absolute inset-0 rounded-md bg-theme-accent shadow-sm"
                    transition={{ type: 'spring', stiffness: 200, damping: 24 }}
                  />
                )}
                <span className="relative z-10">{option.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Divider */}
      <div className="hidden sm:block h-4 w-px bg-theme-accent/15" />

      {/* Smoke Effect Toggle */}
      <div className="flex items-center gap-3">
        <span className="text-theme-accent/40 tracking-[0.3em]">SMOKE //</span>
        <div
          className="relative inline-flex gap-1 rounded-lg border border-theme-accent/15 bg-theme-bg/60 p-0.5 shadow-sm"
          role="radiogroup"
          aria-label="Toggle smoke effect"
        >
          <button
            type="button"
            role="radio"
            aria-checked={smokeEnabled}
            onClick={() => setSmokeEnabled(true)}
            className={[
              'relative rounded-md px-3 py-1 font-bold text-[9px] tracking-wider uppercase transition-colors duration-200 ease-out focus:outline-none focus-visible:ring-1 focus-visible:ring-theme-focus',
              smokeEnabled
                ? 'text-theme-on-accent font-semibold'
                : 'text-theme-text-muted hover:text-theme-text',
            ].join(' ')}
          >
            {smokeEnabled && (
              <motion.span
                layoutId="smoke-pill"
                className="absolute inset-0 rounded-md bg-theme-accent shadow-sm"
                transition={{ type: 'spring', stiffness: 200, damping: 24 }}
              />
            )}
            <span className="relative z-10">ON</span>
          </button>

          <button
            type="button"
            role="radio"
            aria-checked={!smokeEnabled}
            onClick={() => setSmokeEnabled(false)}
            className={[
              'relative rounded-md px-3 py-1 font-bold text-[9px] tracking-wider uppercase transition-colors duration-200 ease-out focus:outline-none focus-visible:ring-1 focus-visible:ring-theme-focus',
              !smokeEnabled
                ? 'text-theme-on-accent font-semibold'
                : 'text-theme-text-muted hover:text-theme-text',
            ].join(' ')}
          >
            {!smokeEnabled && (
              <motion.span
                layoutId="smoke-pill"
                className="absolute inset-0 rounded-md bg-theme-accent shadow-sm"
                transition={{ type: 'spring', stiffness: 200, damping: 24 }}
              />
            )}
            <span className="relative z-10">OFF</span>
          </button>
        </div>
      </div>
    </div>
  );
}
