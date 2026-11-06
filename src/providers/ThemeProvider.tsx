"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initialTheme =
      stored === "dark" || (!stored && systemDark) ? true : false;

    requestAnimationFrame(() => {
      setIsDark(initialTheme);
    });
    if (initialTheme) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newVal = !prev;
      if (newVal) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newVal;
    });
  };

  if (isDark === null) {
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
