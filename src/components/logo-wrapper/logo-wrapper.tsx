import { Link } from "gatsby";
import React from "react";
import { ReactElement } from "react";
import "./logo-wrapper.scss"

export default function LogoWrapper(): ReactElement {

  return (<Link to="/"><div className={`logo-wrapper`}></div></Link>);
}