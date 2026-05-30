import { motion } from 'framer-motion';
import { useBackground } from '../context/BackgroundContext';

export function EffectSwitcher() {
  const { effect, setEffect, brushActive, setBrushActive } = useBackground();

  const options = [
    { value: 'none', label: 'None' },
    { value: 'cyber-pattern', label: 'Grid' },
    { value: 'dot-matrix', label: 'Dot' },
    { value: 'retro-scanlines', label: 'Lines' },
    { value: 'hex-blueprint', label: 'Hex' },
    { value: 'woven-grid', label: 'Woven' },
  ] as const;

  return (
    <div className="flex flex-col lg:flex-row flex-wrap items-center justify-between gap-6 text-[10px] font-bold uppercase tracking-[0.2em] w-full py-2">
      {/* Background Effect Selector */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <span className="text-theme-accent/40 tracking-[0.3em] mb-2 sm:mb-0">FX //</span>
        <div
          className="relative inline-flex flex-wrap justify-center gap-1 rounded-lg border border-theme-accent/15 bg-theme-bg/60 p-0.5 shadow-sm"
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

      {/* Console Divider 1 */}
      <div className="hidden lg:block h-5 w-px bg-theme-accent/15"></div>

      {/* Brush Stroke Toggle Switcher */}
      <div className="hidden lg:flex flex-col sm:flex-row items-center gap-3">
        <span className="text-theme-accent/40 tracking-[0.3em] mb-2 sm:mb-0">BRUSH //</span>
        <div
          className="relative inline-flex gap-1 rounded-lg border border-theme-accent/15 bg-theme-bg/60 p-0.5 shadow-sm"
          role="radiogroup"
          aria-label="Interactive brush stroke"
        >
          {[
            { value: true, label: 'ON' },
            { value: false, label: 'OFF' },
          ].map((option) => {
            const isActive = option.value === brushActive;

            return (
              <button
                key={String(option.value)}
                type="button"
                role="radio"
                aria-checked={isActive}
                onClick={() => setBrushActive(option.value)}
                className={[
                  'relative rounded-md px-3 py-1 font-bold text-[9px] tracking-wider uppercase transition-colors duration-200 ease-out focus:outline-none focus-visible:ring-1 focus-visible:ring-theme-focus',
                  isActive
                    ? 'text-theme-on-accent font-semibold'
                    : 'text-theme-text-muted hover:text-theme-text',
                ].join(' ')}
              >
                {isActive && (
                  <motion.span
                    layoutId="brush-pill"
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
    </div>
  );
}
