import { Link } from "gatsby";
import React, { ReactElement, useContext, useEffect, useRef, useState } from "react"
import { ThemeContext } from "../../theme-provider/theme-provider";
import "./basic-button.scss";

export interface IBasicButton {
  label: string;
  link: string;
}

export default function BasicButton({ data }: { data: IBasicButton }): ReactElement {
  const [hover, setState] = useState(false)
  const { theme } = useContext(ThemeContext);

  return (
    <Link
      to={data.link}
      onMouseEnter={() => setState(true)}
      onMouseLeave={() => setState(false)}
      className={`${theme} basic-button ${hover ? "hovered" : ""}`}>
      <span className="label">{ data.label }</span> <span className="dot"></span>
    </Link>
  )
}
