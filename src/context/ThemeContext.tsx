"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const INITIAL_STATE = {
  theme: "",
  setTheme: () => {},
  themeHandler: () => {},
};

type ContextType = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  themeHandler: () => void;
};

export const SearchContext = createContext<ContextType>(INITIAL_STATE);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("");

  const themeHandler = () => {
    if (!theme) {
      const currentTheme = document
        .querySelector("html")!
        .getAttribute("data-theme");
      setTheme(currentTheme === "dark" ? "light" : "dark");
      return;
    }
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.cookie = "theme=dark; path=/; SameSite=None; Secure";
      document.querySelector("html")!.setAttribute("data-theme", "dark");
    }
    if (theme === "light") {
      document.cookie = "theme=light; path=/; SameSite=None; Secure";
      document.querySelector("html")!.setAttribute("data-theme", "light");
    }
  }, [theme]);

  const value = { theme, setTheme, themeHandler };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

export const useThemeContext = () => useContext(SearchContext);
