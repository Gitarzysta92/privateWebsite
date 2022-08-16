import { Link } from "gatsby";
import React, { ReactElement, useContext, useEffect, useRef, useState } from "react"
import "./basic-button.scss";

export interface IBasicButton {
  label: string;
  link: string;
  forceHoover?: boolean;
}

export default function BasicButton({ data, forceHoover }: { data: IBasicButton, forceHoover?: boolean }): ReactElement {
  const [hover, setState] = useState(false);

  const isHovered = forceHoover !== undefined ? forceHoover : hover; 
  
  const link = data.link.includes("http") ?
    (
      <a
        href={data.link}
        target="_blank"
        onMouseEnter={() => setState(true)}
        onMouseLeave={() => setState(false)}
        className={`basic-button ${isHovered ? "hovered" : ""}`}>
        <span className="label">{ data.label }</span> <span className="dot"></span>
      </a>
    )
    :
    (
      <Link
        to={data.link}
        onMouseEnter={() => setState(true)}
        onMouseLeave={() => setState(false)}
        className={`basic-button ${isHovered ? "hovered" : ""}`}>
        <span className="label">{ data.label }</span> <span className="dot"></span>
      </Link>
    )

  return link;
}
