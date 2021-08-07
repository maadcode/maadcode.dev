module.exports = {
  siteMetadata: {
    siteTitle: "Maadcode",
    siteDescription: "Este es mi website personal donde muestro mis proyectos personales y artículos sobre desarrollo web.",
    siteAuthor: "Manuel Dávila",
    siteTwitterUsername: "@maadcode",
    siteImage: "/twitter-img.png",
    siteUrl: "https://maadcode.dev",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://strapi-maadcode.herokuapp.com`,
        queryLimit: 1000,
        contentTypes: [`projects`, `blogs`, `skills`],
        singleTypes: [`about`],
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Poppins",
              variants: ["400", "700"],
            },
            { family: "Open Sans" },
          ],
        },
      },
    },
  ],
}
