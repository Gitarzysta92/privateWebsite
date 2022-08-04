import * as React from "react";
import { PageProps } from "gatsby";
import GridTile from "../components/grid-tile/grid-tile";
import PageReferenceSection from "../components/page-reference-section/page-reference-section";
import SectionHeader from "../components/section-header/section-header";
import { aboutPageReferenceSection, gridSectionHeader, cryptoAlertGridTile } from "../data/data";
import DefaultTemplate from "../templates/default-template";

// markup
const ContactPage = (props: PageProps) => {
  return (
    <DefaultTemplate>
      <section className="container page-reference-section">
        <div className="row">
          <div className="col-12">
            <PageReferenceSection data={aboutPageReferenceSection}></PageReferenceSection>
          </div>
        </div>
      </section>
      <section className="container projects-grid-section">
        <div className="row">
          <div className="col-12">
            <SectionHeader data={gridSectionHeader}></SectionHeader>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <GridTile data={cryptoAlertGridTile}></GridTile>
          </div>
          <div className="col-12 col-lg-6">
            <GridTile data={cryptoAlertGridTile}></GridTile>
          </div>
          <div className="col-12">
            <GridTile data={cryptoAlertGridTile}></GridTile>
          </div>
        </div>
      </section>
    </DefaultTemplate>
  )
}

export default ContactPage