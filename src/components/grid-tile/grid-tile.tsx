import React, { ReactElement, useState } from "react";
import BasicButton, { IBasicButton } from "../buttons/basic-button/basic-button";
import './grid-tile.scss';

export interface IGridTile {
  title: string;
  subtitle: string;
  button: IBasicButton
  backgroundImage?: string;
}

export default function GridTile({ data, wide, dimmed }: { data: IGridTile, wide?: boolean, dimmed?: boolean }): ReactElement {
  const [hover, setState] = useState(false);

  return (
    <div className={`grid-tile ${wide ? 'wide' : ''} ${dimmed ? 'dimmed' : ''}`}
      onMouseEnter={() => setState(true)}
      onMouseLeave={() => setState(false)}>
      <a href={data.button.link} target="_blank"></a>
      <h3>{data.title}</h3>
      <p>{data.subtitle}</p>
      <BasicButton data={data.button} forceHoover={hover}></BasicButton>
      { data.backgroundImage ? <div className="background-image-container" style={{ backgroundImage: `url(${data.backgroundImage})` }} /> : <></> }
    </div>
  )
}

