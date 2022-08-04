import { Link } from "gatsby";
import React, { ReactElement } from "react";
import { footer } from "../data/data";
import './footer-template.scss';

export interface IFooterList {
  title: string,
  items: { title: string, link: string }[]
}

export interface IFooter {
  first: IFooterList;
  second: IFooterList;
  third: IFooterList;
  fourth: IFooterList;
  bottomBar: string;
}


export default function FooterTemplate(): ReactElement  {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-6 col-lg-3">
            {generateList(footer.first)}
          </div>
          <div className="col-6 col-lg-3">
            {generateList(footer.second)}
          </div>
          <div className="col-6 col-lg-3">
            {generateList(footer.third)}
          </div>
          <div className="col-6 col-lg-3">
            {generateList(footer.fourth)}
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        {footer.bottomBar}
      </div>
    </footer>
  )
}


function generateList(data: IFooterList): ReactElement {
  return (
    <div className="list-column">
      <span>{data.title}</span>
      <ul> 
        {data.items.map((item, index) => { return <li key={index}><Link to={item.link}>{item.title}</Link></li>})}
      </ul>
    </div>
  )
}



