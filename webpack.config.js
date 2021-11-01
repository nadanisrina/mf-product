let HTMLWebpackPlugin = require("html-webpack-plugin");
let ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
  mode: "development",
  devServer: {
    port: "8081",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "products",
      filename: "remoteEntry.js",
      //will get expose to remote app
      exposes: {
        "./ProductsIndex": "./src/index",
      },
    }),
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
