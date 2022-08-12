import React, { ReactElement  } from "react"
import './section-header.scss';


export interface ISectionHeader {
  title: string;
  subtitle: string;
  faIcon: string;
}

export default function SectionHeader({ data }: { data: ISectionHeader }): ReactElement {
  return (
    <div className={`section-header`}>
      <h4>{data.title} <i className={data.faIcon}></i></h4>
      <p>{data.subtitle}</p>
    </div>
  )
}
