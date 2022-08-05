import React, { ReactElement, useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../theme-provider/theme-provider";
import "./cross-button.scss";


export default function CrossButton({ onClick }: { onClick: any }): ReactElement  {
  return (
    <div className={`cross-button`} onClick={onClick}>
      <i className="fa-solid fa-xmark"></i>
    </div>
  )
}
