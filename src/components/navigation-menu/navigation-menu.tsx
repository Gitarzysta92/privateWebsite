import React from "react"
import { Link } from "gatsby"
import "./navigation-menu.scss"


const NavigationMenu = () => (
  <div>
    <Link to="/" activeClassName="active">Home</Link>
    <Link to="/about-me" activeClassName="active">About me</Link>
    <Link to="/contact" activeClassName="active">Contact</Link>
  </div>
)

export default NavigationMenu;