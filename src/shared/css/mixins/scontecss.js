/*
usage:

@mixin scontecss {
  font-size: $.fontSize.h1;
  line-height: $.lineHeight.h1;
  font-family: $.fontFamily.serif;
  font-weight: $.fontWeight.sans.normal;
}

*/

const postcss = require("postcss");
var Scontecss = require("./module/scontecss");
var config = require("../typography");
var breakpoints = require("../breakpoints");

module.exports = (root, arg) => {
  // parse with typography
  let scontecss = new Scontecss({
    fontSize: config.fontSizes.default,
    fontFamily: config.fontFamilies.default,
    fontWeight: config.fontWeights.default,
    lineHeight: config.lineHeights.default,
  });

  // push the declaration to current context
  scontecss.mixin(root, arg).forEach(declaration => {
    root.parent.append(declaration);
  });

  // print
  scontecss = new Scontecss({
    fontSize: config.fontSizes.print || null,
    fontFamily: config.fontFamilies.print || null,
    fontWeight: config.fontWeights.print || null,
    lineHeight: config.lineHeights.print || null,
  });
  let declarations = scontecss.mixin(root, arg);

  if (declarations.length) {

    const ptintMq = postcss.parse(
      `@media print { }`
    );
    declarations.forEach(declaration => {
      ptintMq.first.append(declaration);
    });
    // copy current context to definiton of parent
    root.parent.append(ptintMq);
  }

  // for (var key in breakpoints) {
  Object.keys(breakpoints).forEach((key) => {
    scontecss = new Scontecss({
      fontSize: config.fontSizes[key],
      fontFamily: config.fontFamilies[key],
      fontWeight: config.fontWeights[key],
      lineHeight: config.lineHeights[key],
    });
    let declarations = scontecss.mixin(root, arg);

    if (declarations.length) {
      const defaultMq = postcss.parse(
        `@media screen and (min-width: ${breakpoints[key]}) { }`
      );
      declarations.forEach(declaration => {
        defaultMq.first.append(declaration);
      });
      // copy current context to definiton of parent
      root.parent.append(defaultMq);
    }
  });
};
