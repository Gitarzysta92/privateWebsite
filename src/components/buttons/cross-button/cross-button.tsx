import React, { ReactElement, useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../theme-provider/theme-provider";
import "./cross-button.scss";


export default function CrossButton({ onClick }: { onClick: any }): ReactElement  {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`cross-button ${theme}`} onClick={onClick}>
      <i className="fa-solid fa-xmark"></i>
    </div>
  )
}
