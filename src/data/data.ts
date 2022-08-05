import { IGridTile } from "../components/grid-tile/grid-tile"
import { INavigationMenuItem } from "../components/navigation-menu/navigation-menu-item"
import { IPageReferenceSection } from "../components/page-reference-section/page-reference-section"
import { ISectionHeader } from "../components/section-header/section-header"
import { IFooter } from "../templates/footer-template"


export const mainMenu: INavigationMenuItem[] = [
  {
    title: "Home",
    link: "/",
    appearance: "link"
  },
  {
    title: "About me",
    link: "/about-me",
    appearance: "link"
  },
  {
    title: "Projects",
    appearance: "link",
    link: "/projects",
    childerns: [
      { 
        title: "Crypto alert",
        link: "/projects/crypto-alert",
        appearance: "link",
      },
      { 
        title: "Hex chess",
        link: "/projects/hex-chess",
        appearance: "link",
      }
    ]
  },
  {
    title: "Contact",
    link: "/contact",
    appearance: "solid"
  }
]

export const footer: IFooter = {
  first: {
    title: "Site map",
    items: [
      { title: "Home", link: "/" },
      { title: "About me", link: "/" },
      { title: "Contact", link: "/" }
    ]
  },
  second: {
    title: "Projects",
    items: [
      { title: "Hex chess", link: "/" },
      { title: "Crypto alert", link: "/" }
    ]
  },
  third: {
    title: "Social media",
    items: [
      { title: "Facebook", link: "/" },
      { title: "Linkedin", link: "/" },
      { title: "Github", link: "/" }
    ]
  },
  fourth: {
    title: "Contact",
    items: [
      { title: "m.lukasiewicz92@gmail.com", link: "/" },
    ]
  },
  bottomBar: "Copyright 2022"
}

export const aboutPageReferenceSection: IPageReferenceSection = {
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit sed enim nulla lorem et.",
  button: {
    label: "About me",
    link: ""
  }
}

export const gridSectionHeader: ISectionHeader = {
  title: "Projects",
  subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit sed enim nulla lorem et.",
  faIcon: "fa-solid fa-chevron-down"
}


export const nextProjectGridTile: IGridTile = {
  title: "Project idea?",
  subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit sed enim nulla lorem et.",
  button: {
    label: "Contact",
    link: ""
  },
}

export const cryptoAlertGridTile: IGridTile = {
  title: "Crypto Alert.",
  subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit sed enim nulla lorem et.",
  button: {
    label: "Read more",
    link: ""
  },
  backgroundImage: "/images/crypto-alert.jpg"
}

export const hexGridTile: IGridTile = {
  title: "Hex chess.",
  subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit sed enim nulla lorem et.",
  button: {
    label: "Read more",
    link: ""
  },
  backgroundImage: "/images/hex.jpg"
}