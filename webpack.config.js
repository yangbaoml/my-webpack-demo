const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    index: './src/index.js',
  },
  //在开发环境追踪错误。不可用于生产环境
  devtool: "inline-source-map",
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      // title: '管理输出',
      title: "Development",
    }),
  ],
  output: {
    // filename: 'main.js',
    // filename: 'bundle.js',
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
