import React, { ReactElement, useRef } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./slide-tabs.scss";

export default function SlideTabs({ children, tabIndex }: { children: JSX.Element[], tabIndex: number }): ReactElement {
  const prevTabIndex = useRef(tabIndex);
  const animationClass = prevTabIndex.current > tabIndex ? "slide-left" : "slide-right";

  const tabs = children.map((c, i) => {
    return <CSSTransition
      key={i}
      timeout={1000}
      classNames="slide-tab">     
        {c}
    </CSSTransition>
  })

  const result = (
    <TransitionGroup className={`${animationClass} slide-tabs-container`}>
      {tabs[tabIndex]}
    </TransitionGroup>
  )

  prevTabIndex.current = tabIndex;

  return result;
}

