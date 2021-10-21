const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  resolve: {
    extensions: [".js"]
  },
  entry: {
    index: "./src/index"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      meta: {
        charset: "utf-8",
        description: "THREE Demo",
        viewport: "width=device-width,initial-scale=1,maximum-scale=1,shrink-to-fit=no,user-scalable=no,minimal-ui,viewport-fit=cover"
      }
    })
  ],

  devServer: {
    historyApiFallback: true,
    port: 9000,
    compress: true,
    hot: true,
    static: {
      directory: path.join(__dirname, "static")
    }
  }
}
