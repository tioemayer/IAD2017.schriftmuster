// const path = require('path');
// const postCssVariables = path.join(paths.appSrc, 'shared', 'css', 'variables.js');

module.exports = {
  // cssVariables: path.join(__dirname, '../src/components/defaults/variables.js')
  cssVariables: `${__dirname}/../src/shared/css/variables.js`,
  cssImport: {
    root: `${__dirname}/../src/`,
  },
  cssMixins: {
    mixinsDir: `${__dirname}/../src/shared/css/mixins/`,
  },
  cssFunctions: {
    glob: `${__dirname}/../src/shared/css/functions/*.js`,
  },
}
