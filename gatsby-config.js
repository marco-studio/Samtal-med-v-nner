module.exports = {
  siteMetadata: {
    title: `Samtal med vänner`,
    description: `Litteraturpodden Samtal med vänner görs av Hanna Ylöstalo och Kaneli Johansson i samarbete med HBL.`,
    author: `Hanna Ylöstalo, Kaneli Johansson`,
    twitter: `https://www.twitter.com/samtalmedvanner/`,
    instagram: `https://www.instagram.com/samtalmedvanner/`,
    facebook: ``,
    youtube: ``,
    apple: `https://podcasts.apple.com/us/podcast/feed/id1462401906?at=11lo6V&ct=podnews_podcast`,
    stitcher: ``,
    google: `https://podcasts.google.com/?feed=aHR0cDovL2ZlZWRzLnNvdW5kY2xvdWQuY29tL3VzZXJzL3NvdW5kY2xvdWQ6dXNlcnM6NjMwMzM5Njc4L3NvdW5kcy5yc3M=`,
    pocket: `http://pca.st/itunes/1462401906`,
    spotify: `https://open.spotify.com/show/6RzddqZYmGgIUu7amwPzvS`,
    overcast: `https://overcast.fm/itunes1462401906`,
    castbox: `https://soundcloud.com/samtalmedvanner`,
    castro: `https://castro.fm/itunes/`,
    podbean: ``,
    beaker: `https://www.breaker.audio/shows?feed_url=http%3A%2F%2Ffeeds.soundcloud.com%2Fusers%2Fsoundcloud%3Ausers%3A630339678%2Fsounds.rss`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
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
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `https://pbcdn1.podbean.com/imglogo/image-logo/2144795/26850174_531238480575311_1377019303222901017_o_1_.png`, // This path is relative to the root of the site.
        icon: `src/images/logo.png` // This path is relative to the root of the site.
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        // url: `https://www.gatsbyjs.org/blog/rss.xml`,
        // url: `https://boysinthecave.com/feed/podcast/`,
        // url: `http://boysinthecave.libsyn.com/rss`,
        url: `http://feeds.soundcloud.com/users/soundcloud:users:630339678/sounds.rss`,
        name: `GatsbyBlog`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            channel: ["title", "image"]
            // item: ["itunes:summary"],
            // item: ["itunes:image", "img"],
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`)]
      }
    }
  ]
};
