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

const STORAGE_KEY = 'portfolio-theme';
const STORAGE_ACCENT_KEY = 'portfolio-accent';

type ThemeContextValue = {
  theme: ThemeFlavor;
  themes: readonly ThemeFlavor[];
  setTheme: (theme: ThemeFlavor) => void;
  accent: ThemeAccent;
  accents: readonly ThemeAccent[];
  setAccent: (accent: ThemeAccent) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const isThemeFlavor = (value: string | null): value is ThemeFlavor =>
  value !== null && (themeOrder as readonly string[]).includes(value);

const isThemeAccent = (value: string | null): value is ThemeAccent =>
  value !== null && (accentOrder as readonly string[]).includes(value);

const getInitialTheme = (): ThemeFlavor => {
  if (typeof window === 'undefined') {
    return 'frappe';
  }

  const storedTheme = window.localStorage.getItem(STORAGE_KEY);
  return isThemeFlavor(storedTheme) ? storedTheme : 'frappe';
};

const getInitialAccent = (): ThemeAccent => {
  if (typeof window === 'undefined') {
    return 'green';
  }

  const storedAccent = window.localStorage.getItem(STORAGE_ACCENT_KEY);
  return isThemeAccent(storedAccent) ? storedAccent : 'green';
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

    // Dynamically update favicon paths based on theme
    const favDir = 'favicon_white';
    const faviconIco = document.getElementById('favicon-ico') as HTMLLinkElement | null;
    const appleTouchIcon = document.getElementById('apple-touch-icon') as HTMLLinkElement | null;
    const favicon192 = document.getElementById('favicon-192') as HTMLLinkElement | null;
    const favicon32 = document.getElementById('favicon-32') as HTMLLinkElement | null;
    const favicon16 = document.getElementById('favicon-16') as HTMLLinkElement | null;
    const webmanifest = document.getElementById('webmanifest') as HTMLLinkElement | null;

    if (faviconIco) faviconIco.href = `/${favDir}/favicon.ico?v=3`;
    if (appleTouchIcon) appleTouchIcon.href = `/${favDir}/apple-touch-icon.png?v=3`;
    if (favicon192) favicon192.href = `/${favDir}/android-chrome-192x192.png?v=3`;
    if (favicon32) favicon32.href = `/${favDir}/favicon-32x32.png?v=3`;
    if (favicon16) favicon16.href = `/${favDir}/favicon-16x16.png?v=3`;
    if (webmanifest) webmanifest.href = `/${favDir}/site.webmanifest?v=3`;

    window.localStorage.setItem(STORAGE_KEY, theme);
    window.localStorage.setItem(STORAGE_ACCENT_KEY, accent);
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