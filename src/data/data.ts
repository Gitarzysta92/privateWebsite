import { IGridTile } from "../components/grid-tile/grid-tile"
import { IHorizontalTimeline } from "../components/horizontal-timeline/horizontal-timeline"
import { INavigationMenuItem } from "../components/navigation-menu/navigation-menu-item"
import { IPageReferenceSection } from "../components/page-reference-section/page-reference-section"
import { ISectionHeader } from "../components/section-header/section-header"
import { ITestimontialSlider } from "../components/testimontial-slider/testimontial-slider"
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

// Home

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

// About me

export const aboutMeSection = {
  title: "Fullstack developer",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sed vivamus neque posuere sit aliquam mattis id. Nisl, ut pellentesque pulvinar integer purus enim integer. Urna, pellentesque rhoncus sit et odio nunc dolor. Felis, sit libero, ipsum blandit augue porttitor in. Congue pulvinar enim tempus dictumst quam in velit. Lacus, imperdiet nibh in tellus. Mattis erat dictum quisque non id donec egestas et libero. ",
  image: "/images/avatar.jpg"
}

export const techStackSection = {
  title: "Skills and knowledge:",
  skills: [
    "Javascript", "Html", "Css", "C#", "SQL", "Angular", "React", "Azure", ".Net", "NestJS"
  ]
}

export const contactSection = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu laoreet urna, ullamcorper convallis lorem. Integer faucibus tortor quis iaculis sagittis. Proin condimentum pretium ipsum nec venenatis. Sed mattis ornare cursus. Donec fermentum, nunc placerat condimentum cursus, tortor lorem tempor dolor, sit amet placerat nisi elit a mauris. Vivamus vitae sollicitudin eros. Nulla justo ex, lobortis posuere facilisis vitae, finibus et quam.",
  button: {
    label: "Contact me",
    link: ""
  },
}


export const experienceSection: IHorizontalTimeline & ISectionHeader = {
  startingIndex: 0,
  title: "Experience",
  subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit sed enim nulla lorem et.",
  faIcon: "fa-solid fa-chevron-down",
  occurences: [
    {
      title: "Front-end Developer",
      subtitle: "Creative sp. z o.o.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quam mattis dignissim ridiculus tellus risus sit. Sit arcu sem venenatis urna in aliquet pharetra risus aliquam. Nisi, a aliquet dictum auctor ut ut tellus volutpat. Adipiscing cursus ultricies et volutpat phasellus ut. ",
      date: new Date()
    },
    {
      title: "Experience2",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit sed enim nulla lorem et.",
      description: "dasd",
      date: new Date()
    },
    {
      title: "Experience3",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit sed enim nulla lorem et.",
      description: "dasd",
      date: new Date()
    },
    {
      title: "Experience4",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit sed enim nulla lorem et.",
      description: "dasd",
      date: new Date()
    },
    {
      title: "Experience5",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit sed enim nulla lorem et.",
      description: "dasd",
      date: new Date()
    },
  ]
}

export const testimontialSection: ITestimontialSlider = {
  startingIndex: 0,
  testimontials: [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu laoreet urna, ullamcorper convallis lorem. Integer faucibus tortor quis iaculis sagittis. Proin condimentum pretium ipsum nec venenatis. Sed mattis ornare cursus. Donec fermentum, nunc placerat condimentum cursus, tortor lorem tempor dolor, sit amet placerat nisi elit a mauris. Vivamus vitae sollicitudin eros. Nulla justo ex, lobortis posuere facilisis vitae, finibus et quam.",
      signature: "Michał Lukasiewicz",
      signatureDescription: "UX researcher at AQA ",
      image: "/images/avatar.jpg"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu laoreet urna, ullamcorper convallis lorem. Integer faucibus tortor quis iaculis sagittis. Proin condimentum pretium ipsum nec venenatis. Sed mattis ornare cursus. Donec fermentum, nunc placerat condimentum cursus, tortor lorem tempor dolor, sit amet placerat nisi elit a mauris. Vivamus vitae sollicitudin eros. Nulla justo ex, lobortis posuere facilisis vitae, finibus et quam.",
      signature: "Michał Lukasiewicz",
      signatureDescription: "UX researcher at AQA ",
      image: "/images/avatar.jpg"
    }
  ]
}

// Contact

export const contactData = {
  title: "Lorem ipsum dolor sit amet",
  email: "m.lukasiewicz92@gmail.com"
}