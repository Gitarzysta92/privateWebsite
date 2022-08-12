import * as React from "react";
import { PageProps } from "gatsby";
import DefaultTemplate from "../templates/default-template";
import { aboutMeSection, contactSection, experienceSection, techStackSection, testimontialSection } from "../data/data";
import "./about-me.scss";
import SectionHeader from "../components/section-header/section-header";
import HorizontalTimeline from "../components/horizontal-timeline/horizontal-timeline";
import TestimontialSlider from "../components/testimontial-slider/testimontial-slider";
import BasicButton from "../components/buttons/basic-button/basic-button";

// markup
const AboutMePage = (props: PageProps) => {
  return (
    <DefaultTemplate>
      <section className="container introduce-section">
        <div className="row">
          <div className="col-12 col-lg-5 introduce-image-wrapper">
            <div>
              <img src={aboutMeSection.image} />
            </div>
          </div>
          <div className="col-12 col-lg-6 introduce-text-wrapper">
            <h2>{aboutMeSection.title}</h2>
            <p>{aboutMeSection.text}</p> 
          </div>
        </div>
      </section>
      <section className="container tech-stack-section">
        <div className="row">
          <div className="col-12 col-lg-5 tech-stack-text-wrapper">
            <h2>{techStackSection.title}</h2>
          </div>
          <div className="col-12 col-lg-6 tech-stack-pills-wrapper">
            {techStackSection.skills.map((s, i) => <span key={i}>{s}</span>) } 
          </div>
        </div>
      </section>
      <section className="container experience-section">
        <div className="row">
          <div className="col-12">
            <SectionHeader data={experienceSection}></SectionHeader>
          </div>
          <div className="col-12">
            <HorizontalTimeline data={experienceSection}></HorizontalTimeline>
          </div>
        </div>
      </section>
      <section className="container testimonial-section">
        <div className="row">
          <TestimontialSlider data={testimontialSection}></TestimontialSlider>
        </div>
      </section>
      <section className="container contact-reference-section">
        <div className="row">
          <div className="col-12">
            <p>{"\"" + contactSection.text + "\""}</p>
            <BasicButton data={contactSection.button}></BasicButton>
          </div>
        </div>
      </section>
    </DefaultTemplate>
  )
}

export default AboutMePage