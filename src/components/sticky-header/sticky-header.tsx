import React, { PropsWithChildren, ReactElement, useEffect, useRef, useState } from "react"
import { CSSTransition } from 'react-transition-group';
import './sticky-header.scss';

export enum StickyHeaderState {
  default,
  sticky,
  hidden
}



export default function StickyHeader(props: PropsWithChildren<any>): ReactElement | null {
  let defaultState = StickyHeaderState.default
  let initialScroll = 0;

  if (typeof scrollY !== 'undefined') {
    initialScroll = scrollY;
  }

  if (initialScroll > 0) {
    defaultState = StickyHeaderState.sticky
  }

  const [state, setState] = useState(defaultState as StickyHeaderState);
  
  const stickyTreshold = 200; 
  const prevPosition = useRef(initialScroll);
  const prevState = useRef(state);

  const handleScroll = () => {
    
    let newState: StickyHeaderState;
    const directionUp = prevPosition.current! > scrollY!;
      
    if (directionUp && scrollY > stickyTreshold) {
      newState = StickyHeaderState.sticky;
    } else if (scrollY > stickyTreshold) {
      newState = StickyHeaderState.hidden;
    } else {
      newState = StickyHeaderState.default;
    }

    if (prevState.current != newState) {
      setState(newState);
      prevState.current = newState
    }

    prevPosition.current = scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <CSSTransition
      unmountOnExit
      in={state === StickyHeaderState.sticky || state === StickyHeaderState.default}
      timeout={1000}
      className={ `sticky ${state === StickyHeaderState.default ? "default" : ""}` }
      classNames="sticky-header">
      {props.children}
    </CSSTransition>
  )
}

