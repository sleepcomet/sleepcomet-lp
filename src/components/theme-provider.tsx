"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import type { ComponentProps } from "react";
import { useEffect } from "react";

function Sync() {
  const { theme, resolvedTheme } = useTheme();
  useEffect(() => {
    const current = theme === "system" ? resolvedTheme : theme;
    const root = document.documentElement;
    if (current === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme, resolvedTheme]);
  return null;
}

export function ThemeProvider({ children, ...props }: ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      <Sync />
      {children}
    </NextThemesProvider>
  );
}
