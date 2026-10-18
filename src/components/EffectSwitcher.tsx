import { motion } from 'framer-motion';
import { useBackground } from '../context/BackgroundContext';
import { useLanguage } from '../context/LanguageContext';

export function EffectSwitcher() {
  const { effect, setEffect, brushActive, setBrushActive } = useBackground();
  const { language } = useLanguage();

  const options = [
    { value: 'none', label: 'None', label_ja: 'なし' },
    { value: 'cyber-pattern', label: 'Grid', label_ja: 'グリッド' },
    { value: 'dot-matrix', label: 'Dot', label_ja: 'ドット' },
    { value: 'retro-scanlines', label: 'Lines', label_ja: 'ライン' },
    { value: 'hex-blueprint', label: 'Hex', label_ja: 'ヘックス' },
    { value: 'woven-grid', label: 'Woven', label_ja: '織物' },
    { value: 'diamond-grid', label: 'Diamond', label_ja: 'ダイヤ' },
  ] as const;

  return (
    <div className="flex flex-col lg:flex-row flex-wrap items-center justify-between gap-6 text-[10px] font-bold uppercase tracking-[0.2em] w-full py-2">
      {/* Background Effect Selector */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <span className="text-theme-accent/40 tracking-[0.3em] mb-2 sm:mb-0">
          {language === 'ja' ? 'エフェクト //' : 'FX //'}
        </span>
        <div
          className="relative inline-flex flex-wrap justify-center gap-1 rounded-lg border border-theme-accent/15 bg-theme-bg/60 p-0.5 shadow-sm"
          role="radiogroup"
          aria-label={language === 'ja' ? '背景エフェクト' : 'Background effect'}
        >
          {options.map((option) => {
            const isActive = option.value === effect;
            const displayLabel = language === 'ja' ? option.label_ja : option.label;

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
                <span className="relative z-10">{displayLabel}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Console Divider 1 */}
      <div className="hidden lg:block h-5 w-px bg-theme-accent/15"></div>

      {/* Brush Stroke Toggle Switcher */}
      <div className="hidden lg:flex flex-col sm:flex-row items-center gap-3">
        <span className="text-theme-accent/40 tracking-[0.3em] mb-2 sm:mb-0">
          {language === 'ja' ? 'ブラシ //' : 'BRUSH //'}
        </span>
        <div
          className="relative inline-flex gap-1 rounded-lg border border-theme-accent/15 bg-theme-bg/60 p-0.5 shadow-sm"
          role="radiogroup"
          aria-label={language === 'ja' ? 'インタラクティブ筆ストローク' : 'Interactive brush stroke'}
        >
          {[
            { value: true, label: 'ON', label_ja: 'オン' },
            { value: false, label: 'OFF', label_ja: 'オフ' },
          ].map((option) => {
            const isActive = option.value === brushActive;
            const displayLabel = language === 'ja' ? option.label_ja : option.label;

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
                <span className="relative z-10">{displayLabel}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
