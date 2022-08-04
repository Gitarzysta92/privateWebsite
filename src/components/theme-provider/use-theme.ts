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
  const [theme, setTheme] = useState(typeof window !== 'undefined' ? window.localStorage.getItem('theme')!: ThemeType.light);
  const [componentMounted, setComponentMounted] = useState(false);
  const toggleTheme = () => {
    if (theme === ThemeType.light) {
      window.localStorage.setItem('theme', ThemeType.dark);
      setTheme(ThemeType.dark);
    } else {
      window.localStorage.setItem('theme', ThemeType.light);
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
