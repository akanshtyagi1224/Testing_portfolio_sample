import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export function useTheme(defaultMode: Theme = 'light', darkModeEnabled = true) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (!darkModeEnabled) return 'light';
    if (typeof window === 'undefined') return defaultMode;
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : defaultMode;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return { theme, toggleTheme, setTheme };
}
