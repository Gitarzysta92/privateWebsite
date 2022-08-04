import React, { PropsWithChildren, ReactElement, useEffect, useRef, useState } from "react"
import { CSSTransition } from 'react-transition-group';
import './sticky-header.scss';

export enum StickyHeaderState {
  sticky,
  hidden
}



export default function StickyHeader(props: PropsWithChildren<any>): ReactElement | null {
  const svp = typeof scrollY !== 'undefined' ? scrollY : 0;
  const [state, setState] = useState(svp != 0 ? StickyHeaderState.sticky : StickyHeaderState.hidden);
  
  const stickyTreshold = 200; 
  const prevPosition = useRef(svp);
  const prevState = useRef(state);

  const handleScroll = () => {
    
    let newState;
    const directionUp = prevPosition.current! > scrollY!;
      
    if (directionUp && scrollY! > stickyTreshold) {
      newState = StickyHeaderState.sticky;
    } else {
      newState = StickyHeaderState.hidden;
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
      in={state === StickyHeaderState.sticky}
      timeout={1000}
      classNames="sticky-header">
      {props.children}
    </CSSTransition>
  )
}

