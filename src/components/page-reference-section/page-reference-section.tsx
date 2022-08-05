import React, { ReactElement, useContext } from "react"
import BasicButton, { IBasicButton } from "../buttons/basic-button/basic-button";
import { ThemeContext } from "../theme-provider/theme-provider";
import './page-reference-sections.scss';

export interface IPageReferenceSection {
  title: string;
  subtitle: string;
  button: IBasicButton;
}

export default function PageReferenceSection({ data }: { data: IPageReferenceSection }): ReactElement {

  return (
    <div className={`page-reference`}>
      <h2>{data.title}</h2>
      <p>{data.subtitle}</p>
      <BasicButton data={data.button}></BasicButton>
    </div>
  )
}

