import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useState, useEffect } from 'react';
export function Providers({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme={theme}>
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
