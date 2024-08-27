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
  let defaultTheme = ThemeType.dark
  
  if (typeof window !== 'undefined') {
    defaultTheme = window?.localStorage.getItem('theme') as ThemeType;
  }

  if (!defaultTheme) {
    defaultTheme = ThemeType.light
  }

  const [theme, setTheme] = useState(defaultTheme);
  const [componentMounted, setComponentMounted] = useState(false);

  const setDarkTheme = () => {
    window.localStorage.setItem('theme', ThemeType.dark);
    document.body.classList.add(ThemeType.dark);
    document.body.classList.remove(ThemeType.light);
    setTheme(ThemeType.dark);
  }

  const setLightTheme = () => {
    window.localStorage.setItem('theme', ThemeType.light);
    document.body.classList.add(ThemeType.light);
    document.body.classList.remove(ThemeType.dark);
    setTheme(ThemeType.light);
  }

  const toggleTheme = () => {
    if (theme === ThemeType.light) {
      setDarkTheme()
    } else {
      setLightTheme()
    }
  };

  useEffect(() => {
    let localTheme = window?.localStorage.getItem('theme');
    if (!localTheme && 'matchMedia' in window) {
      if (window?.matchMedia('(prefers-color-scheme: dark)').matches) {
        localTheme = ThemeType.dark;
      } else {
        localTheme = ThemeType.light;
      }
    }
    if (localTheme === ThemeType.dark) {
      setDarkTheme()
    } else {
      setLightTheme()
    }
    setComponentMounted(true);
  }, []);
  
  return { theme , toggleTheme, componentMounted }
};
