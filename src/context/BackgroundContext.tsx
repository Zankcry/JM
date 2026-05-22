import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type BackgroundEffect = 'none' | 'cyber-pattern' | 'dot-matrix' | 'retro-scanlines' | 'hex-blueprint';

type BackgroundContextType = {
  effect: BackgroundEffect;
  setEffect: (effect: BackgroundEffect) => void;
  smokeEnabled: boolean;
  setSmokeEnabled: (enabled: boolean) => void;
};

const BackgroundContext = createContext<BackgroundContextType | null>(null);

const STORAGE_KEY = 'portfolio-bg-effect';
const SMOKE_STORAGE_KEY = 'portfolio-smoke-enabled';

export function BackgroundProvider({ children }: { children: ReactNode }) {
  const [effect, setEffect] = useState<BackgroundEffect>(() => {
    if (typeof window === 'undefined') return 'none';
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return (stored === 'cyber-pattern' || stored === 'dot-matrix' || stored === 'retro-scanlines' || stored === 'hex-blueprint' || stored === 'none') ? (stored as BackgroundEffect) : 'none';
  });

  const [smokeEnabled, setSmokeEnabled] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    const stored = window.localStorage.getItem(SMOKE_STORAGE_KEY);
    return stored !== 'false';
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, effect);
  }, [effect]);

  useEffect(() => {
    window.localStorage.setItem(SMOKE_STORAGE_KEY, String(smokeEnabled));
  }, [smokeEnabled]);

  return (
    <BackgroundContext.Provider value={{ effect, setEffect, smokeEnabled, setSmokeEnabled }}>
      {children}
    </BackgroundContext.Provider>
  );
}

export function useBackground() {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error('useBackground must be used within a BackgroundProvider');
  }
  return context;
}
