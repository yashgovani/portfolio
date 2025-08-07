'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check localStorage first, then system preference
    const storedTheme = localStorage.getItem('theme') as Theme;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let initialTheme: Theme = 'light';
    
    if (storedTheme && (storedTheme === 'light' || storedTheme === 'dark')) {
      initialTheme = storedTheme;
    } else if (systemPrefersDark) {
      initialTheme = 'dark';
    }
    
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    if (mounted) {
      // Update document class and localStorage when theme changes
      const root = window.document.documentElement;
      const body = window.document.body;
      
      // Remove existing theme classes from both html and body
      root.classList.remove('light', 'dark');
      body.classList.remove('light', 'dark');
      
      // Add theme class to both html and body for better compatibility
      root.classList.add(theme);
      body.classList.add(theme);
      
      // Also set data attribute for additional styling hooks
      root.setAttribute('data-theme', theme);
      
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {mounted ? children : <div style={{ visibility: 'hidden' }}>{children}</div>}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};
