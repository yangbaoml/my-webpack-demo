const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: "index.html",
      title: "Progressive Web Application",
    }),
    new WorkboxPlugin.GenerateSW({
      // 这些选项帮助快速启用 ServiceWorkers
      // 不允许遗留任何“旧的” ServiceWorkers
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
          cacheDirectory: true,
          cacheCompression: false,
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          // 将 Sass 编译成 CSS
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  //忽略warnings
  ignoreWarnings: [
    {
      module: /module2\.js\?[34]/, // A RegExp
    },
    {
      module: /[13]/,
      message: /homepage/,
    },
    /warning from compiler/,
    (warning) => true,
  ],
};
