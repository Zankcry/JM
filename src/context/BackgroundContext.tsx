import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

// The one list of effects: the random pick on load and the footer switcher both read it
export const EFFECT_OPTIONS = [
  { value: 'none', label: 'None', label_ja: 'なし' },
  { value: 'cyber-pattern', label: 'Grid', label_ja: 'グリッド' },
  { value: 'dot-matrix', label: 'Dot', label_ja: 'ドット' },
  { value: 'retro-scanlines', label: 'Lines', label_ja: 'ライン' },
  { value: 'hex-blueprint', label: 'Hex', label_ja: 'ヘックス' },
  { value: 'woven-grid', label: 'Woven', label_ja: '織物' },
  { value: 'diamond-grid', label: 'Diamond', label_ja: 'ダイヤ' },
] as const;

type BackgroundEffect = (typeof EFFECT_OPTIONS)[number]['value'];
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
    return EFFECT_OPTIONS[Math.floor(Math.random() * EFFECT_OPTIONS.length)].value;
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
