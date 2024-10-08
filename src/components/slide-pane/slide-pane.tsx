import React, { ReactElement, useContext } from "react";
import { CSSTransition } from 'react-transition-group';
import { ThemeContext } from "../theme-provider/theme-provider";
import "./slide-pane.scss";

export default function SlidePane({ children, isOpen }: { children: JSX.Element[] | JSX.Element, isOpen: boolean }): ReactElement {
  return (
    <CSSTransition
      unmountOnExit
      in={isOpen}
      timeout={1000}
      classNames="slide-pane">

        <div className={`slide-pane`}>
          {children}
        </div>

    </CSSTransition>
  )
}

