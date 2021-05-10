module.exports = {
  siteMetadata: {
    title: `Kara Family Daycare `,
    description: `We are Licensed Daycare. We accept Infant, Toddler, Preschool, Kindergarten,School Age, Part-Time and Hourly. We strive to make your child’s time at daycare the best experience it can be for them as well as you, the parents.`,
    author: `Ratko Gjurichanin`,
    siteUrl: "https://karadaycare.ca",
    social: {
      twitter: "",
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-svg`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -120,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
      
    //   options: {
    //     fonts: [
    //       {
    //         family: `Londrina Solid`,
    //         variants: [`300`, `400`, `900`],
    //       },
    //       {
    //         family: `Lato`,
    //         variants: [`400`, `400i`, `700`],
    //       },
    //     ],
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kara Family Daycare`,
        short_name: `Kara Daycare`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#393E72`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
