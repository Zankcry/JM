import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const steps = [
      { target: 40, delay: 0, duration: 300 },
      { target: 70, delay: 300, duration: 250 },
      { target: 90, delay: 550, duration: 200 },
      { target: 100, delay: 750, duration: 150 },
    ];

    const timers: ReturnType<typeof setTimeout>[] = [];

    steps.forEach(({ target, delay }) => {
      timers.push(
        setTimeout(() => setProgress(target), delay)
      );
    });

    // Dismiss after progress hits 100
    timers.push(
      setTimeout(() => {
        setVisible(false);
        setTimeout(onDone, 500); // wait for exit animation
      }, 950)
    );

    return () => timers.forEach(clearTimeout);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: 'rgb(var(--theme-bg))' }}
          aria-label="Loading"
          role="status"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Glow ring */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: 280,
                height: 280,
                background: 'radial-gradient(circle, rgb(var(--theme-accent) / 0.22) 0%, transparent 70%)',
              }}
              animate={{ scale: [1, 1.25, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Logo image — uses theme-aware logo */}
            <picture>
              {/* Dark theme: white logo */}
              <source
                media="(prefers-color-scheme: dark)"
                srcSet="/favicon_white/android-chrome-512x512.png"
              />
              {/* Light theme: black logo */}
              <img
                src="/favicon_black/android-chrome-512x512.png"
                alt="Logo"
                className="relative h-44 w-44 rounded-3xl object-contain drop-shadow-2xl"
                draggable={false}
              />
            </picture>
          </motion.div>

          {/* Progress bar */}
          <div className="mt-10 w-36 overflow-hidden rounded-full"
            style={{ height: 2, background: 'rgb(var(--theme-border) / 0.35)' }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'rgb(var(--theme-accent))' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              initial={{ width: '0%' }}
            />
          </div>

          {/* Subtle label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mt-4 text-[10px] uppercase tracking-[0.4em] text-theme-text-muted"
          >
            Loading...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
