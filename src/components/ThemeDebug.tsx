'use client';

import { useTheme } from '@/components/ThemeProvider';
import { useEffect, useState } from 'react';

export default function ThemeDebug() {
  const { theme, toggleTheme } = useTheme();
  const [documentTheme, setDocumentTheme] = useState<string>('');

  useEffect(() => {
    // Check what theme is actually applied to the document
    const checkTheme = () => {
      const htmlClasses = document.documentElement.className;
      const bodyClasses = document.body.className;
      const dataTheme = document.documentElement.getAttribute('data-theme');
      setDocumentTheme(`HTML: ${htmlClasses}, BODY: ${bodyClasses}, DATA: ${dataTheme}`);
    };

    checkTheme();
    // Check again after theme changes
    const interval = setInterval(checkTheme, 100);
    return () => clearInterval(interval);
  }, [theme]);

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-background border border-border rounded-lg shadow-lg z-50 text-sm">
      <div className="space-y-2">
        <div>Current Theme: <strong>{theme}</strong></div>
        <div>Document Classes: {documentTheme}</div>
        <button 
          onClick={toggleTheme}
          className="px-3 py-1 bg-primary text-primary-foreground rounded hover:opacity-80 transition-opacity"
        >
          Toggle Theme
        </button>
        <div className="mt-2 p-2 bg-secondary text-secondary-foreground rounded">
          Test colors: This should change with theme
        </div>
      </div>
    </div>
  );
}
