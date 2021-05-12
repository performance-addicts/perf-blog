require(`dotenv`).config({
  path: `.env`,
});
const proxy = require("http-proxy-middleware");
const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  // proxy: {
  //   prefix: "./netlify/functions",
  //   url: "http://localhost:8888/.netlify/functions",
  // },
  siteMetadata: {
    siteTitleAlt: `Minimal Blog - Gatsby Theme`,
    siteTitle: `Tapestry Performance`,
    // Default title of the page
    siteTitleAlt: `Perf Blog`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Web Performance Blog`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://tapestry-performance.netlify.app`,
    // Used for SEO
    siteDescription: `A blog about Web Performance`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@javascript_josh`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: ``,
            url: ``,
          },
          {
            name: ``,
            url: ``,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
};
