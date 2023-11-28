const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src/"),
    },
    extensions: [".ts", ".js"],
  },
};
