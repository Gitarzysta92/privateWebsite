import React, { ReactElement, useContext } from "react";
import { ThemeContext } from "../theme-provider/theme-provider";
import './theme-toggle.scss';

export default function ThemeToggle({ toggleTheme }: { toggleTheme: any }): ReactElement  {
  const { theme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} className={`theme-toggle`}>
      <div>
        <i className="fa-solid fa-sun light"></i>
        <i className="fa-solid fa-moon dark"></i>
      </div>
    </button>
  );
}