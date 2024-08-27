import * as React from "react";
import { PageProps } from "gatsby";
import DefaultTemplate from "../templates/default-template";
import GridTile from "../components/grid-tile/grid-tile";
import PageReferenceSection from "../components/page-reference-section/page-reference-section";
import SectionHeader from "../components/section-header/section-header";
import { aboutPageReferenceSection, articlesHeader, dungeonVentureTile, gridSectionHeader, hexGridTile, nextProjectGridTile, wordpressNewsfeed } from "../data/data";
import ParallaxContainer from "../components/parallax-container/parallax-container";
import "./index.scss";
import "@fontsource/lato";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";
import WordpressNewsfeed from "../components/wordpress-newsfeed/wordpress-newsfeed";



// markup
const IndexPage = (props: PageProps) => {
  return (
    <DefaultTemplate>
      <ParallaxContainer>
        <div className="blob-bg"></div>
      </ParallaxContainer>
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
          <div className="col-12 ">
            <GridTile wide dimmed data={dungeonVentureTile}></GridTile>
          </div>
          <div className="col-12 col-lg-6">
            <GridTile dimmed data={hexGridTile}></GridTile>
          </div>
          <div className="col-12 col-lg-6">
            <GridTile data={nextProjectGridTile}></GridTile>
          </div>
        </div>
      </section>
    </DefaultTemplate>
  )
}

export default IndexPage
