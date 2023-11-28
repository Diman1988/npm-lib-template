const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = [
  merge(common, {
    mode: "production",
    output: {
      filename: "bundle.esm.lib.prod.js",
      path: path.resolve(__dirname, "dist/esm"),
      libraryTarget: "module",
    },
    experiments: {
      outputModule: true,
    },
    devtool: "source-map",
  }),
  merge(common, {
    mode: "production",
    output: {
      filename: "bundle.cjs.lib.prod.js",
      path: path.resolve(__dirname, "dist/cjs"),
      libraryTarget: "commonjs2",
    },
    devtool: "source-map",
  }),
];
