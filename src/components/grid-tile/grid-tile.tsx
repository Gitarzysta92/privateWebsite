import React, { ReactElement, useContext } from "react";
import BasicButton, { IBasicButton } from "../buttons/basic-button/basic-button";
import { ThemeContext } from "../theme-provider/theme-provider";
import './grid-tile.scss';

export interface IGridTile {
  title: string;
  subtitle: string;
  button: IBasicButton
  backgroundImage?: string;
}

export default function GridTile({ data, wide, dimmed }: { data: IGridTile, wide?: boolean, dimmed?: boolean }): ReactElement {

  return (
    <div className={`grid-tile ${wide ? 'wide' : ''} ${dimmed ? 'dimmed' : ''}`}>
      <h3>{data.title}</h3>
      <p>{data.subtitle}</p>
      <BasicButton data={data.button}></BasicButton>
      { data.backgroundImage ? <div className="background-image-container" style={{ backgroundImage: `url(${data.backgroundImage})` }} /> : <></> }
    </div>
  )
}

