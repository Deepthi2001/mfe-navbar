const webpack=require("webpack");
const {merge:webpackMerge} = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mfe-demo",
    projectName: "navbar",
    webpackConfigEnv,
  });

  return webpackMerge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    output: {
      // filename: '[name].bundle.js',
      path: path.resolve(__dirname, "dist/build"),
      libraryTarget: "system",
    },
    // plugins: [
    //   new webpack.ProvidePlugin({
    //       process: 'process/browser',
    //   })],
    resolve: {
      extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.(svg|png|jpg|gif)$/,
          type: 'asset/resource'
        },
        {
          test: /\.module\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "style-loader"],
        },
      ],
    },
    externals: ["single-spa", /^@mfe-demo\/.+$/],
  });
};
