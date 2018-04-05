const fs = require('fs')

const noCache = require('require-no-cache')

const postCssCalc = require('postcss-calc')
const postCssNext = require('postcss-cssnext')
const postCssNested = require('postcss-nested') // really old version !!!
const postCssVars = require('postcss-simple-vars')
const postCssImport = require('postcss-import')
const postCssForLoop = require('postcss-for')
const postCssMixins = require('postcss-mixins')
const postCssFunctions = require('postcss-functions')

const {
  cssVariables,
  cssImport,
  cssMixins,
  cssFunctions,
} = require('./config/paths')

const defaultOverwrite = require('./config/gatsby-config');

module.exports = {
  pathPrefix: defaultOverwrite.pathPrefix || '/doc-starter',
  siteMetadata: {
    title: 'signalwerk',
  },
  plugins: [
    'gatsby-plugin-react-helmet',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },

    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [
          postCssImport({
            root: cssImport.root,
          }),
          postCssForLoop(),
          postCssNested(),
          postCssVars({
            variables: () => {
              if (fs.existsSync(cssVariables)) {
                return noCache(cssVariables)
              }
              return {}
            },
          }),
          postCssMixins({
            mixinsDir: cssMixins.mixinsDir,
          }),
          postCssFunctions({
            glob: cssFunctions.glob,
          }),
          postCssCalc(),
          postCssNext({
            // Allow future CSS features to be used, also auto-prefixes the CSS.
            browsers: ['last 2 versions', 'IE > 10'],
          }),
        ],
        // precision: 8, // SASS default: 5
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
        ],
      },
    },
  ],
}
