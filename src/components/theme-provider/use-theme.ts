import { useEffect, useState } from "react";

export enum ThemeType {
  dark = 'dark-theme',
  light = 'light-theme'
}

export interface IUseThemeContext {
  theme: ThemeType;
  toggleTheme: Function;
  componentMounted: boolean;
}

export const useTheme = (): IUseThemeContext => {
  const localTheme = window.localStorage.getItem('theme');
  const [theme, setTheme] = useState(localTheme || ThemeType.light);
  const [componentMounted, setComponentMounted] = useState(false);
  const toggleTheme = () => {
    console.log(theme);
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
  
  return { theme, toggleTheme, componentMounted }
};
