import React, { ReactElement, useContext } from "react"
import { ThemeContext } from "../theme-provider/theme-provider";
import './section-header.scss';


export interface ISectionHeader {
  title: string;
  subtitle: string;
  faIcon: string;
}

export default function SectionHeader({ data }: { data: ISectionHeader }): ReactElement {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme} section-header`}>
      <h4>{data.title} <i className={data.faIcon}></i></h4>
      <p>{data.subtitle}</p>
    </div>
  )
}
