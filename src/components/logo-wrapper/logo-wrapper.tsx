import React, { useContext } from "react";
import { ReactElement } from "react";
import { ThemeContext } from "../theme-provider/theme-provider";
import "./logo-wrapper.scss"

export default function LogoWrapper(): ReactElement {

  const { theme } = useContext(ThemeContext);

  return (<div className={`logo-wrapper ${theme}`}></div>);
}