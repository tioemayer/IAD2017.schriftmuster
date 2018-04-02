class Flegrix {
  constructor() {
    this.mode = "flexbox";
  }

  mixin(root, param) {
    let config = this.parse(root);

    if (param.includes("col")) {
      return this.col(config);
    }
    if (param.includes("container")) {
      return this.container(config);
    }

    return [];
  }

  parse(root) {
    let parsed = {
      from: 0,
      to: 0,
      context: 12,
      push: 0,
      gutter: 3,
      debug: false
    };

    root.walkDecls("from", function(decl) {
      parsed.from = parseFloat(decl.value, 10);
    });
    root.walkDecls("to", function(decl) {
      parsed.to = parseFloat(decl.value, 10);
    });
    root.walkDecls("columns", function(decl) {
      parsed.context = parseFloat(decl.value, 10);
    });
    root.walkDecls("debug", function(decl) {
      if (`${decl.value}`.toLowerCase().includes("true")) {
        parsed.debug = true;
      }
    });
    root.walkDecls("of", function(decl) {
      parsed.context = parseFloat(decl.value, 10);
    });
    root.walkDecls("push", function(decl) {
      parsed.push = parseFloat(decl.value, 10);
    });
    root.walkDecls("gutter", function(decl) {
      parsed.gutter = parseFloat(`${decl.value}`.replace("%", ""), 10);
    });

    return parsed;
  }

  container(config) {
    let { context, gutter, debug } = config;
    let css = [];

    if (this.mode === "flexbox") {
      css.push({
        prop: "display",
        value: "flex"
      });

      css.push({
        prop: "flex-wrap",
        value: "wrap"
      });
      css.push({
        prop: "justify-content",
        value: "space-between"
      });
    }

    if (debug) {
      css.push({
        prop: "background-size",
        value: "100% 100%"
      });
      css.push({
        prop: "background-position",
        value: "center 0"
      });
      css.push({
        prop: "background-repeat",
        value: "repeat-y"
      });
      css.push({
        prop: "background-image",
        value: `url("data:image/svg+xml;base64,${this.b64encode(
          this.svg({
            context,
            gutter
          })
        )}")`
      });
    }

    return css;
  }

  col(config) {
    let { from, to, context, push, gutter } = config;
    let css = [];

    css.push({
      prop: "flex-grow",
      value: 1
    });
    css.push({
      prop: "flex-shrink",
      value: 1
    });
    css.push({
      prop: "flex-basis",
      value: `${this.span(config)}%`
    });
    css.push({
      prop: "max-width",
      value: `${this.span(config)}%`
    });
    if (push) {
      css.push({
        prop: "margin-left",
        value: `${this.push({ from: 1, to: push, context, gutter })}%`
      });
    }
    return css;
  }

  push(config) {
    let { from, to, context, gutter } = config;
    return (
      this.span(config) + this.gutter({ from, to: context, context, gutter })
    );
  }

  // get the width
  // span(4) == span(1 to 4 of 12)
  span(config) {
    let { from, to, context, gutter } = config;
    let colCount = to - from + 1;
    let calcGutter = this.gutter({ from: 1, to: context, context, gutter });
    let totalColumnWidth = 100 - calcGutter * (context - 1);

    let width =
      totalColumnWidth / context * colCount + calcGutter * (colCount - 1);

    return width;
  }

  gutter(config) {
    let { from, to, context, gutter } = config;
    let colCount = to - from + 1;
    return gutter * colCount / context;
  }

  // from here
  // https://gist.github.com/stubbetje/229984
  b64encode(string) {
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var result = "";

    var i = 0;
    do {
      var a = string.charCodeAt(i++);
      var b = string.charCodeAt(i++);
      var c = string.charCodeAt(i++);

      a = a ? a : 0;
      b = b ? b : 0;
      c = c ? c : 0;

      var b1 = (a >> 2) & 0x3f;
      var b2 = ((a & 0x3) << 4) | ((b >> 4) & 0xf);
      var b3 = ((b & 0xf) << 2) | ((c >> 6) & 0x3);
      var b4 = c & 0x3f;

      if (!b) {
        b3 = b4 = 64;
      } else if (!c) {
        b4 = 64;
      }

      result +=
        characters.charAt(b1) +
        characters.charAt(b2) +
        characters.charAt(b3) +
        characters.charAt(b4);
    } while (i < string.length);

    return result;
  }

  svg(config) {
    let { context, gutter } = config;

    let color = "rgba(255,0,0,0.07)";
    let lineColor = "rgba(128,0,0,0.05)";
    let width = this.span({ from: 1, to: 1, context, gutter });
    let style = `<style><![CDATA[
            line {
              stroke: ${lineColor};
              stroke-width: 1;
            }
            ]]></style>`;
    let x = 0;
    let content = "";

    for (let i = 1; i <= context; i++) {
      content += `<rect x='${x}%' width='${width}%' height='100%' />`;
      content += `<line x1='${x + width / 2}%' y1='0' x2='${x +
        width / 2}%' y2='100%' />`;

      // draw midline of gutter if not last column
      if (i != context) {
        x += width;
        content += `<line x1='${x + gutter / 2}%' y1='0' x2='${x +
          gutter / 2}%' y2='100%' />`;
        x += gutter;
      }
    }

    return `<svg xmlns='http://www.w3.org/2000/svg' fill='${color}'>${style} ${content}</svg>`;
  }
}

module.exports = Flegrix;
