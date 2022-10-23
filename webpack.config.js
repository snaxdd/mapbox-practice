const path = require("path");

// Plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Rules import
const StyleRules = require("./webpack/styles.rules");
const ImgRules = require("./webpack/images.rules");
const FontsRules = require("./webpack/fonts.rules");
const BabelRules = require("./webpack/babel.rules");

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 8081,
    open: true,
  },
  output: {
    clean: true,
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [BabelRules, StyleRules, ImgRules, FontsRules],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./dist/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
};
