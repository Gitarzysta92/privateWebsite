import React, { ReactElement, useContext, useState } from "react"
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import LogoWrapper from "../components/logo-wrapper/logo-wrapper"
import NavigationMenu, { NavigationMenuType } from "../components/navigation-menu/navigation-menu"
import StickyHeader from "../components/sticky-header/sticky-header"
import BurgerButton from "../components/buttons/burger-button/burger-button"
import ThemeToggle from "../components/theme-toggle/theme-toggle"
import SlidePane from "../components/slide-pane/slide-pane"
import { mainMenu } from "../data/data"
import "./header-template.scss"
import { ThemeContext } from "../components/theme-provider/theme-provider"
import CrossButton from "../components/buttons/cross-button/cross-button";


export default function HeaderTemplate(): ReactElement | null  {
  const { toggleTheme } = useContext(ThemeContext);
  const [ slidePaneState, setState ] = useState(false);
  const breakpoints = useBreakpoint();

  const slidePane = breakpoints.xmd ?
    (<SlidePane isOpen={slidePaneState}>
      <div className="container">
        <div className="row">
          <div className="col-12 mobile-menu-wrapper">
            <CrossButton onClick={() => setState(false)}></CrossButton>
            <LogoWrapper></LogoWrapper>
            <NavigationMenu data={mainMenu} type={NavigationMenuType.vertical}></NavigationMenu>
            <hr></hr>
            <ThemeToggle toggleTheme={toggleTheme}></ThemeToggle>    
          </div>
        </div>
      </div>
    </SlidePane>) : null;
  
  return (
    <header>
      <div className="toggle-wrapper">
        <ThemeToggle toggleTheme={toggleTheme}></ThemeToggle>
      </div>

      <StickyHeader>
        <div className="sticky">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="header-bar d-flex justify-content-between">
                  <LogoWrapper></LogoWrapper>
                  <BurgerButton onClick={() => setState(true)}></BurgerButton>
                  <NavigationMenu data={mainMenu}></NavigationMenu>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StickyHeader>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header-bar d-flex justify-content-between">
              <LogoWrapper></LogoWrapper>
              <BurgerButton onClick={() => setState(true)}></BurgerButton>
              <NavigationMenu data={mainMenu}></NavigationMenu>
            </div>
          </div>
        </div>
      </div>
      {slidePane}
    </header>
  )
}

