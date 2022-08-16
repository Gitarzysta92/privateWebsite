import React, { ReactElement, useRef, useState } from "react";
import SlideTabs from "../slide-tabs/slide-tabs";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./horizontal-timeline.scss";

export interface IHorizontalTimeline {
  startingIndex: number;
  occurences: IHorizontalTimelineEvent[] 
}

export interface IHorizontalTimelineEvent {
  title: string;
  subtitle: string;
  description: string;
  date: Date | string;
}

export default function HorizontalTimeline({ data }: { data: IHorizontalTimeline }): ReactElement {
  const [activeOcurrency, setState] = useState(data.startingIndex);

  const prevTabIndex = useRef(data.startingIndex);
  const direction = prevTabIndex.current > activeOcurrency ? "backward" : "forward";
  prevTabIndex.current = activeOcurrency;

  const setNextTab = () => {
    const nextTab = activeOcurrency + 1;
    if (nextTab < data.occurences.length)
      setState(nextTab);
  }

  const setPrevTab = () => {
    const prevTab = activeOcurrency - 1;
    if (prevTab >= 0)
      setState(prevTab);
  }

  const setTargetTab = (tabIndex: number) => {
    if (tabIndex >= 0 && tabIndex <= data.occurences.length) {
      setState(tabIndex);
    }
  }

  return (
    <div>
      <div className="navigational-bar">
        <button onClick={setPrevTab} disabled={activeOcurrency === 0}>
          <i className="fa-solid fa-circle-chevron-left"></i>
        </button>

        <div className="timeline-container">
          <TransitionGroup className={`${direction} timeline-wrapper`} style={
            {
              width: `Calc(33% * ${data.occurences.length + 1})`,
              transform: `translateX(Calc(-${100 / (data.occurences.length + 1)}% * ${activeOcurrency}))`
            }}>
            <CSSTransition
                timeout={1000}
                classNames="timeline-item">     
                <div className={`timeline-item`}>
                </div>
              </CSSTransition>
            {data.occurences.map((e, i) =>
              <CSSTransition
                key={i}
                timeout={1000}
                classNames="timeline-item">     
                <div onClick={() => setTargetTab(i)} className={`timeline-item ${activeOcurrency === i ? 'active' : ''}`}>
                  <div className="timeline-indicator">
                    <div className="timeline-item-date">{ (e.date as Date).toDateString ? (e.date as Date).toDateString() : e.date }</div>
                  </div>
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </div>
        
        <button onClick={setNextTab} disabled={activeOcurrency === data.occurences.length - 1}>
          <i className="fa-solid fa-circle-chevron-right"></i>
        </button>
      </div>
  
      <SlideTabs tabIndex={activeOcurrency}>
        {data.occurences.map((e, i) =>
          <div key={i} className="experience-wrapper">
            <h3>{e.title}<br/><small>{e.subtitle}</small></h3>
            <p>{e.description}</p>
          </div>
        )}
      </SlideTabs>
    </div>
  )
}