import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  accentOrder,
  getThemeVariables,
  themeOrder,
  type ThemeAccent,
  type ThemeFlavor,
} from './catppuccin';

type ThemeContextValue = {
  theme: ThemeFlavor;
  themes: readonly ThemeFlavor[];
  setTheme: (theme: ThemeFlavor) => void;
  accent: ThemeAccent;
  accents: readonly ThemeAccent[];
  setAccent: (accent: ThemeAccent) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const getInitialTheme = (): ThemeFlavor => {
  const randomIndex = Math.floor(Math.random() * themeOrder.length);
  return themeOrder[randomIndex];
};

const getInitialAccent = (): ThemeAccent => {
  const randomIndex = Math.floor(Math.random() * accentOrder.length);
  return accentOrder[randomIndex];
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeFlavor>(getInitialTheme);
  const [accent, setAccent] = useState<ThemeAccent>(getInitialAccent);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.dataset.accent = accent;
    const isLight = theme === 'latte';
    root.style.colorScheme = isLight ? 'light' : 'dark';

    const themeVariables = getThemeVariables(theme, accent);
    Object.entries(themeVariables).forEach(([name, value]) => {
      root.style.setProperty(name, value);
    });
  }, [theme, accent]);

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, themes: themeOrder, setTheme, accent, accents: accentOrder, setAccent }),
    [theme, accent],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}