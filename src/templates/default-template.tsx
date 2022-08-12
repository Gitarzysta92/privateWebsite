import React, { ReactElement, useContext } from "react";
import ThemeProvider, { ThemeContext } from "../components/theme-provider/theme-provider";
import './default-template.scss';
import FooterTemplate from "./footer-template";
import HeaderTemplate from "./header-template";

export default function DefaultTemplate({ children }: { children: JSX.Element[] | JSX.Element }): ReactElement | null  {
  return (
    <ThemeProvider>
      <HeaderTemplate></HeaderTemplate>
        <main>
          { children }
        </main>
      <FooterTemplate></FooterTemplate>
    </ThemeProvider>
  )
}


