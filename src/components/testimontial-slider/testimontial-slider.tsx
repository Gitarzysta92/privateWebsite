import React from "react";
import { ReactElement, useState } from "react";
import SlideTabs from "../slide-tabs/slide-tabs";
import './testimontial-slider.scss';

export interface ITestimontialSlider {
  startingIndex: number;
  testimontials: ITestimontial[] 
}

export interface ITestimontial {
  text: string;
  signature: string;
  signatureDescription: string;
  image: string;
}

export default function TestimontialSlider({ data }: { data: ITestimontialSlider }): ReactElement {
  const [activeTestimontial, setState] = useState(data.startingIndex);

  const setNextTab = () => {
    const nextTab = activeTestimontial + 1;
    if (nextTab < data.testimontials.length)
      setState(nextTab);
  }

  const setPrevTab = () => {
    const prevTab = activeTestimontial - 1;
    if (prevTab >= 0)
      setState(prevTab);
  }

  return (
    <div className="testimontial-wrapper">
      <button onClick={setPrevTab}>
        <i className="fa-solid fa-angle-left"></i>
      </button>
      <SlideTabs tabIndex={activeTestimontial}>
        {data.testimontials.map((e, i) =>
          <div key={i} className="testimontial-item">
            <div className="image-wrapper">
              <img src={e.image} />
            </div>
            <div className="text-wrapper">
              <p>{"\"" + e.text + "\""}</p>
              <span className="signature">{e.signature}</span>
              <span className="signature-description">{e.signatureDescription}</span>
            </div>
          </div>
        )}
      </SlideTabs>
      <button onClick={setNextTab}>
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
  )
}