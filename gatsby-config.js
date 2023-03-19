module.exports = {
    siteMetadata: {
        title: `Erich's DevBlog`,
        description: `A blog talking about dinosours lenguage programing`,
        author: `@erich`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/src/content`,
            },
        },

        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [`gatsby-remark-reading-time`],
            },
        },

        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                // This will impact how browsers show your PWA/website
                // https://css-tricks.com/meta-theme-color-and-trickery/
                // theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the
                // root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline
        // functionality To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}