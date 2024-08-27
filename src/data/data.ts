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
    childerns: [
      {
        title: "Bio",
        link: "/about-me",
        appearance: "link"
      },
      { 
        title: "Linkedin",
        link: "https://www.linkedin.com/in/micha%C5%82-%C5%82ukasiewicz-6bb38361/",
        appearance: "link",
      },
      { 
        title: "Github",
        link: "https://github.com/Gitarzysta92",
        appearance: "link",
      }
    ],
    appearance: "link"
  },
  {
    title: "Projects",
    appearance: "link",
    link: "/projects",
    childerns: [
      { 
        title: "Dungeon Venture",
        link: "http://dungeon-venture.com",
        appearance: "link",
      },
      { 
        title: "Hex chess",
        link: "https://github.com/Gitarzysta92/hexChess",
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
      { title: "Dungeon venture", link: "http://dungeon-venture.com/" },
      { title: "Hex chess", link: "https://github.com/Gitarzysta92/hexChess" }
    ]
  },
  third: {
    title: "Social media",
    items: [
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

export const dungeonVentureTile: IGridTile = {
  title: "Dungeon venture.",
  subtitle: "Dungeon Venture is an innovative adventure oriented deckbuilder.",
  button: {
    label: "Read more",
    link: "http://dungeon-venture.com/"
  },
  backgroundImage: "/images/dungeon-venture.jpg"
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
  title: "IT passionate",
  text: "I am IT passionate with solid commercial experience in software development, primarily in the legaltech, foodtech, and retail sectors. I have worked for companies such as Olewnik, Diebold Nixdorf, EastWestLink, as well as many smaller ones. Over the years, I have gained experience in nearly every aspect of the software development process, providing me with a comprehensive understanding of the broader picture of software creation, which is really useful in overall process of designing software. Currently, I am working on my own project related to the gaming field.",
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
      title: "Founder/Dev - Dungeon Venture",
      subtitle: "Threesixty sp. z o.o.",
      description: "Desing and development of the adventure/deckbuilder/rpg, browser based game.",
      date: "2022 - 2023"
    },
    {
      title: "Fullstack/DevOps Engineer",
      subtitle: "EastWestLink sp. z o.o.",
      description: "Responsible for implementing CI/CD solutions for software development department. Developing new tools, services, and reusable ui elements for domain teams. Maintaining microservices architecture.",
      date: "2022 - 2023"
    },
    {
      title: "Fullstack Developer",
      subtitle: "DiebolNixdorf sp. z o.o.",
      description: "Responsible for development new features (front and back) for VEngage product, including technical design and implementation. Major refactoring of webclient app, developed in the Angular. Creating new microservices.",
      date: "2021 - 2022"
    },
    {
      title: "Fullstack Developer",
      subtitle: "Synchroner sp. z o.o.",
      description: "Responsible for development new features (front and back) for SyncHRoner (SaaS) main product, including technical design, software implementation, troubleshooting, documentation. test development and execution. Leading in major refactorings/architectual redesigns in SyncHRoner. For example, latest completed project was to redesign permissions across whole system. Making integrations with third party services/websites. Also being a member of the devops team and participating in CI/CD development and maintenance.",
      date: "2019 - 2021"
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