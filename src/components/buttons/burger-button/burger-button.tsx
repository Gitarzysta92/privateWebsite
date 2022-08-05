import React, { ReactElement, useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../theme-provider/theme-provider";
import "./burger-button.scss";




export default function BurgerButton({ onClick }: { onClick: any }): ReactElement  {
  const [animate, setState] = useState(false)
  const buttonRef = useRef<HTMLDivElement>(null);

  const startAnimation = () => setState(true);
  const cancelAnimation = () => setState(false);

  useEffect(() => {
    buttonRef.current?.addEventListener("animationend", cancelAnimation);

    return () => {
      buttonRef.current?.removeEventListener("animationend", cancelAnimation);
    }; 
  }, []);

  return (
    <div ref={buttonRef} className={`${animate ? 'animate ' : ''}burger-button`} onClick={e => (startAnimation(), onClick(e))}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
