"use client";

import { SearchSelectProvider } from "@/context/SearchSelectContext";
import { ThemeProvider } from "@/context/ThemeContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <SearchSelectProvider>{children}</SearchSelectProvider>
    </ThemeProvider>
  );
}
