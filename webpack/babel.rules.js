module.exports = {
  test: /\.jsx?$/,
  exclude: /(node_modules)/,
  loader: "babel-loader",
  options: {
    presets: ["@babel/preset-react"],
  },
};
