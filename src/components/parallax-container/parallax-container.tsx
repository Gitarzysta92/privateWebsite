import React, { PropsWithChildren, ReactElement, useEffect, useRef, useState } from "react"
import './parallax-container.scss';


export default function ParallaxContainer(props: PropsWithChildren<any>): ReactElement | null {
  const [translate, setState] = useState(0);
  
  const handleScroll = () => {
    setState((scrollY / 3) * -1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="paralax-container" style={{ transform: `translateY(${translate}px)` }}>
      {props.children}
    </div>
  )
}

