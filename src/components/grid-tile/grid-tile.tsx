import React, { ReactElement, useContext } from "react";
import BasicButton, { IBasicButton } from "../buttons/basic-button/basic-button";
import { ThemeContext } from "../theme-provider/theme-provider";
import './grid-tile.scss';

export interface IGridTile {
  title: string;
  subtitle: string;
  button: IBasicButton
}

export default function GridTile({ data }: { data: IGridTile }): ReactElement {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme} grid-tile`}>
      <h3>{data.title}</h3>
      <p>{data.subtitle}</p>
      <BasicButton data={data.button}></BasicButton>
    </div>
  )
}

