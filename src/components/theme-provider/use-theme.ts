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
  const [theme, setTheme] = useState(typeof window != 'undefined' ? window.localStorage.getItem('theme')! : ThemeType.light);
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
