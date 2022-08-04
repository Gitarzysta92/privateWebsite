import type { GatsbyConfig } from "gatsby";


const myCustomQueries = {
  xs: '(max-width: 320px)',
  sm: '(max-width: 800px)',
  md: '(max-width: 1024px)',
  l: '(max-width: 1536px)',
};


const config: GatsbyConfig = {
  siteMetadata: {
    title: `Private Portfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-web-font-loader",
    "gatsby-plugin-fontawesome-css",
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
          queries: myCustomQueries,
      },
    },
  ]
};

export default config;
