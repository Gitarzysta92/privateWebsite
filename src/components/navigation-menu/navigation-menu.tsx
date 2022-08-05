import React, { ReactElement, useContext, useRef, useState } from "react"
import { Link } from "gatsby"
import "./navigation-menu.scss"
import { INavigationMenuItem } from "./navigation-menu-item";
import { useOutsideClick } from "../../utils/use-outside-click";
import { ThemeContext } from "../theme-provider/theme-provider";
import { CSSTransition } from 'react-transition-group';

export enum NavigationMenuType {
  horizontal,
  vertical
}


export default function NavigationMenu({ data, type }: { data: INavigationMenuItem[], type?: NavigationMenuType })  {
  let i = 0;

  return (
    <div className={`navigation-wrapper`}>
      <ul className={type === NavigationMenuType.vertical ? "vertical" : "horizontal"}>
        { generateMenuStructure(data, i) }
      </ul>
    </div>
  )
}

function generateMenuStructure(model: INavigationMenuItem[], keySource: number): ReactElement[] {
  return model.map(m => {
    const [showSubmenu, setSubmenuVisibility] = useState(false);

    const toggleSubmenu = (e: any): any => setSubmenuVisibility(!showSubmenu);
    const closeSubmenu = (): any => setSubmenuVisibility(false);

    var children = generateMenuStructure(m.childerns || [], keySource);
    const submenuRef = useRef(null);
    const menuItemRef = useRef(null);
    useOutsideClick([submenuRef, menuItemRef], closeSubmenu);

    return (
      <li key={keySource++} className={m.appearance} ref={menuItemRef}>

        {children.length > 0 ? <a onClick={toggleSubmenu}>{m.title}</a>
          : <Link to={m.link || ""} activeClassName="active">{m.title}</Link>}

        <CSSTransition
          unmountOnExit
          in={showSubmenu && children.length > 0}
          timeout={1000}
          classNames="navigation-submenu">
          <ul onMouseLeave={closeSubmenu} ref={submenuRef} className="submenu">{children}</ul>
        </CSSTransition>
      </li>
    )
  });
}


