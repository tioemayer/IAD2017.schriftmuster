/*
usage:

@mixin flegrix container {
  columns: 6;   // default: 12
  gutter: 2%;   // default: 3%
  debug: true;  // default: false
};

@mixin flegrix col {
  from: 2;
  to: 6;
  of: 6;        // default: 12
  push: 2;      // default: 0
  gutter: 2%;   // default: 3%
};

*/

var Flegrix = require('./module/flegrix');

// render with debug
var flegrix = new Flegrix();


module.exports = (root, arg) => {

  // parse with flegrix
  let declarations = flegrix.mixin(root, arg);

  // push the declaration to current context
  declarations.forEach(declaration => {
    root.parent.append(declaration);
  })

}
