import { IGridTile } from "../components/grid-tile/grid-tile"
import { IHorizontalTimeline } from "../components/horizontal-timeline/horizontal-timeline"
import { INavigationMenuItem } from "../components/navigation-menu/navigation-menu-item"
import { IPageReferenceSection } from "../components/page-reference-section/page-reference-section"
import { ISectionHeader } from "../components/section-header/section-header"
import { ITestimontialSlider } from "../components/testimontial-slider/testimontial-slider"
import { IWordpressNewsfeedConfiguration } from "../components/wordpress-newsfeed/wordpress-newsfeed"
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
        link: "http://cryptoalert.tk",
        appearance: "link",
      },
      { 
        title: "Hex chess",
        link: "http://hexchess.tk",
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
      { title: "About me", link: "/about-me" },
      { title: "Contact", link: "/contact" }
    ]
  },
  second: {
    title: "Projects",
    items: [
      { title: "Hex chess", link: "http://hexchess.tk" },
      { title: "Crypto alert", link: "http://cryptoalert.tk" }
    ]
  },
  third: {
    title: "Social media",
    items: [
      { title: "Facebook", link: "https://www.facebook.com/asdasd.gffgdfg" },
      { title: "Linkedin", link: "https://www.linkedin.com/in/micha%C5%82-%C5%82ukasiewicz-6bb38361/" },
      { title: "Github", link: "https://github.com/Gitarzysta92" }
    ]
  },
  fourth: {
    title: "Contact",
    items: [
      { title: "contact@michallukasiewicz.com", link: "mailto: contact@michallukasiewicz.com" },
    ]
  },
  bottomBar: "Copyright 2022"
}

// Home

export const aboutPageReferenceSection: IPageReferenceSection = {
  title: "Builds apps that using is a pure pleasure.",
  subtitle: "Well written code, undoubtedly is a really hard goal to achieve, but delivering real value for end user is on a whole different level of difficulty.",
  button: {
    label: "About me",
    link: "/about-me"
  }
}

export const gridSectionHeader: ISectionHeader = {
  title: "Projects",
  subtitle: "Check projects im currently working on, or share an project idea!",
  faIcon: "fa-solid fa-chevron-down"
}


export const nextProjectGridTile: IGridTile = {
  title: "Project idea?",
  subtitle: "Have an idea but you're non tech guy? Or maybe you're a dev who is looking for the company?",
  button: {
    label: "Contact",
    link: "/contact"
  },
}

export const cryptoAlertGridTile: IGridTile = {
  title: "Crypto Alert.",
  subtitle: "Set alarms for price changes, and trade crypto virtually without risking your own money.",
  button: {
    label: "Read more",
    link: "http://cryptoalert.tk"
  },
  backgroundImage: "/images/crypto-alert.jpg"
}

export const hexGridTile: IGridTile = {
  title: "Hex chess.",
  subtitle: "Browser implementation of popular board game, with aspiration for something more.",
  button: {
    label: "Read more",
    link: "http://hexchess.tk"
  },
  backgroundImage: "/images/hex.jpg"
}

export const articlesHeader: ISectionHeader = {
  title: "Articles",
  subtitle: "Project related news and some overall tech oriented thoughts in development area.",
  faIcon: "fa-solid fa-chevron-down"
}

export const wordpressNewsfeed: IWordpressNewsfeedConfiguration = {
  url: "https://www.blog.michallukasiewicz.com/wp-json/wp/v2/posts?_embed"
}

// About me

export const aboutMeSection = {
  title: "Wannabe architect (yet)",
  text: "I am an IT passionate, with solid commercial experience in software development, mostly in legaltech, foodtech and retail fields. Im worked, for such companies like Olewnik, Diebold Nixdorf, EastWestLink, and a lot of smaller ones. During all of these years in software development, I tried to touch nearly all aspects of development process, which gave me a priceless outlook on the wide picture of creating software, and this wide picture is what interests me the most. Currently im working on my own projects related to crypto and gaming field.",
  image: "/images/avatar.jpg"
}

export const techStackSection = {
  title: "Skills and knowledge:",
  skills: [
    "Javascript", "Html", "Css", "C#", "SQL", "Angular", "React", "Azure", ".Net", "NestJS"
  ]
}

export const contactSection = {
  text: "If you think good architecture is expensive, try bad architecture. - Brian Foote.",
  button: {
    label: "Contact me",
    link: "/contact"
  },
}


export const experienceSection: IHorizontalTimeline & ISectionHeader = {
  startingIndex: 0,
  title: "Experience",
  subtitle: "Quick brief of what i was doing in the last years.",
  faIcon: "fa-solid fa-chevron-down",
  occurences: [
    {
      title: "Fullstack/DevOps Engineer",
      subtitle: "EastWestLink sp. z o.o.",
      description: "Responsible for implementing CI/CD solutions for software development department. Developing new tools, services, and reusable ui elements for domain teams. Maintaining microservices architecture.",
      date: "12.2021 - currently"
    },
    {
      title: "Fullstack Developer",
      subtitle: "DiebolNixdorf sp. z o.o.",
      description: "Responsible for development new features (front and back) for VEngage product, including technical design and implementation. Major refactoring of webclient app, developed in the Angular. Creating new microservices.",
      date: "9.2021 - 3.2021"
    },
    {
      title: "Fullstack Developer",
      subtitle: "Synchroner sp. z o.o.",
      description: "Responsible for development new features (front and back) for SyncHRoner (SaaS) main product, including technical design, software implementation, troubleshooting, documentation. test development and execution. Leading in major refactorings/architectual redesigns in SyncHRoner. For example, latest completed project was to redesign permissions across whole system. Making integrations with third party services/websites. Also being a member of the devops team and participating in CI/CD development and maintenance.",
      date: "2019 - 03.2021"
    },
    {
      title: "Front-end Developer",
      subtitle: "Creative sp. z o.o.",
      description: "Managing a team of freelance web developers. Designing, coding and implementing of web pages based on technologies, including HTML, CSS, Javascript, PHP. Company internal web services managment. Responsible for mail platform, web server, domains, etc.",
      date: "2013 - 2019"
    },
  ]
}

export const testimontialSection: ITestimontialSlider = {
  startingIndex: 0,
  testimontials: [
    {
      text: "I believe, any software engineer should be able to understand the requirements, deliver on time, deliver according to the requirements. With Michał Łukasiewicz all those three requirements was fulfilled. It’s a great developer with excellent communication skills and business oriented attitude.",
      signature: "Jacek Ziąbski",
      signatureDescription: "CEO Creative sp. z o.o.",
      image: "/images/jacek.jpg"
    }
  ]
}

// Contact

export const contactData = {
  title: "Heave any questions?",
  email: "contact@michallukasiewicz.com"
}