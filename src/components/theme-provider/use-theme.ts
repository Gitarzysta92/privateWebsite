import { useEffect, useState } from "react";

export enum ThemeType {
  dark = 'dark-theme',
  light = 'light-theme'
}

export interface IUseThemeContext {
  theme: ThemeType | string;
  toggleTheme: Function;
  componentMounted: boolean;
}

export const useTheme = (): IUseThemeContext => {
  let defaultTheme = window.localStorage.getItem('theme');
  if (!defaultTheme && 'matchMedia' in window) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      defaultTheme = ThemeType.dark;
    } else {
      defaultTheme = ThemeType.light;
    }
  }

  if (!defaultTheme) {
    defaultTheme = ThemeType.light
  }

  const [theme, setTheme] = useState(defaultTheme);
  const [componentMounted, setComponentMounted] = useState(false);

  const toggleTheme = () => {
    if (theme === ThemeType.light) {
      window.localStorage.setItem('theme', ThemeType.dark);
      document.body.classList.add(ThemeType.dark);
      document.body.classList.remove(ThemeType.light);
      setTheme(ThemeType.dark);
    } else {
      window.localStorage.setItem('theme', ThemeType.light);
      document.body.classList.add(ThemeType.light);
      document.body.classList.remove(ThemeType.dark);
      setTheme(ThemeType.light);
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme as ThemeType);
    } else {
      setTheme(ThemeType.light)
      window.localStorage.setItem('theme', ThemeType.light)
    }
    setComponentMounted(true);
  }, []);
  
  return { theme , toggleTheme, componentMounted }
};
