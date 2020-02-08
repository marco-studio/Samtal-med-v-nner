module.exports = {
  siteMetadata: {
    title: `Over The Bridge`,
    description: `Hey, meet Bilal, Kwaku, Patrick &amp; Tom. 4 Black &amp; Mixed-Race guys who became friends whilst studying at Cambridge University. Join us as we talk about life before, during and well - after 'The Bridge'. Expect chats about life, and our own experiences.
    email: otbpodcastuk@gmail.com
    Twitter: @otbpodcastuk
    Cast: 
    Kwaku: @KwakuDapaah_
    Patrick: @CariocoLondrino
    Bilal: @Tweetsbybilal
    Tom: @TomTheEconomist`,
    author: `Kwaku, Patrick, Bilal & Tom`,
    twitter: `https://twitter.com/otbpodcastuk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor`,
    instagram: `https://www.instagram.com/otbpodcastuk/`,
    facebook: ``,
    youtube: ``,
    apple: `https://podcasts.apple.com/podcast/id1364395842?ct=podlink&mt=2`,
    stitcher: ``,
    google: `https://podcasts.google.com/?feed=aHR0cDovL2ZlZWRzLnNvdW5kY2xvdWQuY29tL3VzZXJzL3NvdW5kY2xvdWQ6dXNlcnM6NDA3NTYwNzY0L3NvdW5kcy5yc3M=`,
    pocket: `https://pca.st/itunes/1364395842`,
    spotify: `https://open.spotify.com/show/0Lo2a3hwV0nxymHUj2lNIk`,
    overcast: `https://overcast.fm/itunes1364395842`,
    castbox: `https://soundcloud.com/overthebridgeuk`,
    castro: `https://castro.fm/itunes/1364395842`,
    podbean: `https://www.podbean.com/podcast-detail/g9v5c-68ac3/Over-The-Bridge-Podcast`,
    beaker: `https://www.breaker.audio/shows?feed_url=http%3A%2F%2Ffeeds.soundcloud.com%2Fusers%2Fsoundcloud%3Ausers%3A407560764%2Fsounds.rss`
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
        url: `http://feeds.soundcloud.com/users/soundcloud:users:407560764/sounds.rss`,
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
