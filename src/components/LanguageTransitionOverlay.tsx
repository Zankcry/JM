import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Language } from '../context/LanguageContext';

export function LanguageTransitionOverlay({
  targetLang,
  onDone
}: {
  targetLang: Language | null;
  onDone: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const onDoneRef = useRef(onDone);

  useEffect(() => {
    onDoneRef.current = onDone;
  }, [onDone]);

  useEffect(() => {
    if (!targetLang) return;
    setProgress(0);

    const timer1 = setTimeout(() => setProgress(45), 100);
    const timer2 = setTimeout(() => setProgress(100), 450);
    const timer3 = setTimeout(() => {
      onDoneRef.current();
    }, 750);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [targetLang]);

  const [activeLang, setActiveLang] = useState<Language | null>(targetLang);

  useEffect(() => {
    if (targetLang) {
      setActiveLang(targetLang);
    }
  }, [targetLang]);

  // Label in the language being switched away from, so it matches what the user is currently reading
  const isJa = (targetLang || activeLang) === 'en';
  const label = isJa ? '翻訳中...' : 'TRANSLATING...';

  return (
    <AnimatePresence mode="wait">
      {targetLang && (
        <motion.div
          key="lang-transition-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center pointer-events-auto selection:bg-transparent backdrop-blur-md"
          style={{ background: 'rgb(var(--theme-bg))' }}
          aria-label={isJa ? '言語切り替え中' : 'Language transition'}
          role="status"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Glow ring */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: 260,
                height: 260,
                background: 'radial-gradient(circle, rgb(var(--theme-accent) / 0.22) 0%, transparent 70%)',
              }}
              animate={{ scale: [1, 1.25, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Logo image */}
            <picture>
              <source
                media="(prefers-color-scheme: dark)"
                srcSet="/favicon_white/android-chrome-512x512.png"
              />
              <img
                src="/favicon_black/android-chrome-512x512.png"
                alt={isJa ? 'ロゴ' : 'Logo'}
                className="relative h-36 w-36 rounded-3xl object-contain drop-shadow-2xl"
                draggable={false}
              />
            </picture>
          </motion.div>

          {/* Progress bar */}
          <div
            className="mt-8 w-32 overflow-hidden rounded-full"
            style={{ height: 2, background: 'rgb(var(--theme-border) / 0.35)' }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'rgb(var(--theme-accent))' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              initial={{ width: '0%' }}
            />
          </div>

          {/* Subtle label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="mt-4 text-[10px] uppercase tracking-[0.35em] text-theme-text-muted font-mono"
          >
            {label}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
