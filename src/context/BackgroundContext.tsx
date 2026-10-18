import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type BackgroundEffect = 'none' | 'cyber-pattern' | 'dot-matrix' | 'retro-scanlines' | 'hex-blueprint' | 'woven-grid' | 'diamond-grid';
type BrushWidth = 'thin' | 'medium' | 'thick';

type BackgroundContextType = {
  effect: BackgroundEffect;
  setEffect: (effect: BackgroundEffect) => void;
  brushActive: boolean;
  setBrushActive: (active: boolean) => void;
  brushWidth: BrushWidth;
  setBrushWidth: (width: BrushWidth) => void;
};

const BackgroundContext = createContext<BackgroundContextType | null>(null);

const BRUSH_STORAGE_KEY = 'portfolio-brush-active';
const BRUSH_WIDTH_KEY = 'portfolio-brush-width';

const EFFECTS: BackgroundEffect[] = ['none', 'cyber-pattern', 'dot-matrix', 'retro-scanlines', 'hex-blueprint', 'woven-grid', 'diamond-grid'];

// localStorage throws when the visitor blocks site data; fall back to defaults instead of crashing.
const readStorage = (key: string) => {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
};

const writeStorage = (key: string, value: string) => {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // ignore
  }
};

export function BackgroundProvider({ children }: { children: ReactNode }) {
  const [effect, setEffect] = useState<BackgroundEffect>(() => {
    const randomIndex = Math.floor(Math.random() * EFFECTS.length);
    return EFFECTS[randomIndex];
  });

  const [brushActive, setBrushActive] = useState<boolean>(() => {
    const stored = readStorage(BRUSH_STORAGE_KEY);
    return stored === null ? true : stored === 'true';
  });

  const [brushWidth, setBrushWidth] = useState<BrushWidth>(() => {
    const stored = readStorage(BRUSH_WIDTH_KEY);
    return (stored === 'thin' || stored === 'medium' || stored === 'thick') ? stored : 'thin';
  });

  useEffect(() => {
    writeStorage(BRUSH_STORAGE_KEY, String(brushActive));
  }, [brushActive]);

  useEffect(() => {
    writeStorage(BRUSH_WIDTH_KEY, brushWidth);
  }, [brushWidth]);

  return (
    <BackgroundContext.Provider value={{ effect, setEffect, brushActive, setBrushActive, brushWidth, setBrushWidth }}>
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
