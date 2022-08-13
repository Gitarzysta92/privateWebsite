import { Link } from "gatsby";
import React, { ReactElement, useContext, useEffect, useRef, useState } from "react"
import "./basic-button.scss";

export interface IBasicButton {
  label: string;
  link: string;
}

export default function BasicButton({ data }: { data: IBasicButton }): ReactElement {
  const [hover, setState] = useState(false);
  
  const link = data.link.includes("http") ?
    (
      <a
        href={data.link}
        onMouseEnter={() => setState(true)}
        onMouseLeave={() => setState(false)}
        className={`basic-button ${hover ? "hovered" : ""}`}>
        <span className="label">{ data.label }</span> <span className="dot"></span>
      </a>
    )
    :
    (
      <Link
        to={data.link}
        onMouseEnter={() => setState(true)}
        onMouseLeave={() => setState(false)}
        className={`basic-button ${hover ? "hovered" : ""}`}>
        <span className="label">{ data.label }</span> <span className="dot"></span>
      </Link>
    )

  return link;
}
