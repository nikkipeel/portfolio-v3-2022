require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Nikki Peel - Portfolio`,
    description: `Personal website for Nikki Peel includes recent projects, certifications, link to download resume, and contact form`,
    author: `Nikki Peel`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1440,
            },
          },
          {
            resolve: "gatsby-remark-code-buttons",
            options: {
              // Optional button container class name. Defaults
              // to 'gatsby-code-button-container'.
              buttonContainerClass: `button-container--code`,
              // Optional button class name. Defaults to 'gatsby-code-button'.
              buttonClass: `button-code`,
              // Optional button text. Defaults to ''.
              buttonText: ``,
              svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>`,
              // Optional svg icon class name. Defaults to 'gatsby-code-button-icon'.
              //svgIconClass: `icon-copy`,
              tooltipText: `copy to clipboard`,
              // Optional toaster class name. Defaults to ''.
              toasterClass: `toast-copy`,
              // Optional toaster text class name. Defaults to ''.
              toasterTextClass: ``,
              // Optional toaster text. Defaults to ''.
              toasterText: "Copied to clipboard",
              // Optional toaster duration. Defaults to 3500.
              toasterDuration: 5000,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (e.g. <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (e.g. for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: "language-",
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in gatsby-browser.js
              // right after importing the prism color scheme:
              //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: false,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
              // This adds a new language definition to Prism or extend an already
              // existing language definition. More details on this option can be
              // found under the header "Add new language definition or extend an
              // existing language" below.
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              // Customize the prompt used in shell output
              // Values below are default
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              // By default the HTML entities <>&'" are escaped.
              // Add additional HTML escapes by providing a mapping
              // of HTML entities and their escape value IE: { '}': '&#123;' }
              escapeEntities: {},
            },
          },
        ],
      },
    },
    `gatsby-plugin-image`,
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
        name: `postImages`,
        path: `${__dirname}/src/content/posts/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/content/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nikki Peel - Portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#75acc0`,
        theme_color: `#75acc0`,
        display: `minimal-ui`,
        icon: `src/images/np-logo.png`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-dark-mode`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        // useAutoGen: required 'true' to use autogen
        useAutoGen: true,
        // autoGenHomeLabel: optional 'Home' is default
        autoGenHomeLabel: `home`,
        // exclude: optional, include this array to exclude paths you don't want to
        // generate breadcrumbs for (see below for details).
        exclude: [
          `**/dev-404-page/**`,
          `**/404/**`,
          `**/404.html`,
          `**/offline-plugin-app-shell-fallback/**`,
        ],
        // isMatchOptions: optional, include this object to configure the wildcard-match library.
        // excludeOptions: {
        //   separator: '.'
        // },
        // crumbLabelUpdates: optional, update specific crumbLabels in the path
        //  crumbLabelUpdates: [
        //   {
        //     pathname: '/books',
        //     crumbLabel: 'Books'
        //   }
        // ],
        // trailingSlashes: optional, will add trailing slashes to the end
        // of crumb pathnames. default is false
        //trailingSlashes: true,
        // usePathPrefix: optional, if you are using pathPrefix above
        //usePathPrefix: '/blog',
      },
    },
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        // Configure color of the scroll indicator
        // color: "#4a94a8",
        color: "linear-gradient(to right, #c8782f, #da9c63)",
        // Height of the scroll indicator
        height: "14px",
        // Configure paths where the scroll indicator will appear
        paths: ["/blog/*"],
        // Configure the z-index of the indicator element
        zIndex: `9999`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-LGJFSQMPBK", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        //   gtagConfig: {
        // 	optimize_id: "OPT_CONTAINER_ID",
        // 	anonymize_ip: true,
        // 	cookie_expires: 0,
        //   },
        // This object is used for configuration specific to this plugin
        //   pluginConfig: {
        // 	// Puts tracking script in the head instead of the body
        // 	head: false,
        // 	// Setting this parameter is also optional
        // 	respectDNT: true,
        // 	// Avoids sending pageview hits from custom paths
        // 	exclude: ["/preview/**", "/do-not-track/me/too/"],
        // 	// Defaults to https://www.googletagmanager.com
        // 	origin: "YOUR_SELF_HOSTED_ORIGIN",
        //   },
      },
    },
    `gatsby-plugin-netlify`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
