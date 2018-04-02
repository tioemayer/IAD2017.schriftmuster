const htmlSizes = {
  default: 16,
  m: 18,
  l: 20,
}

const fontSizes = {
  // mobile
  default: {
    base: `${htmlSizes.default}px`, // body
    code: '0.9rem',
    small: '0.8rem',
    p: '1rem',
    h1: '2.2rem',
    h2: '1.6rem',
    h3: '1.15rem',
    h4: '1rem',
    h5: '0.9rem',
  },
  m: {
    base: `${htmlSizes.m}px`,
  },
  l: {
    base: `${htmlSizes.l}px`,
  },

  print: {
    base: '9pt',
    code: '6.5pt',
    small: '8pt',
  	p: '9pt',
  	h1: '13.5pt',
  	h2: '11.5pt',
    h3: '10pt',
    h4: '9pt',
  	h5: '8pt',
  },
}

const fontNames = {
  default: {
    sans: 'SignalwerkSans',
    serif: 'SignalwerkSerif',
  },
}

const fontFamilies = {
  default: {
    sans: `${fontNames.default.sans},Helvetica,Arial,sans-serif`,
    serif: `${fontNames.default.serif},Times,serif`,
  },
}

const fontWeights = {
  default: {
    sans: {
      normal: 400,
      bold: 700,
    },
    serif: {
      normal: 400,
      bold: 700,
    },
  },
}

const lineHeights = {
  // mobile
  default: {
    base: 1.45, // body
  },
}

module.exports = {
  fontNames,
  fontFamilies,
  fontWeights,
  fontSizes,
  lineHeights,
}
