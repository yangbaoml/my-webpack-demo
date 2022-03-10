const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    index: {
      import: './src/index.js',
      dependOn: 'shared',
    },
    another: {
      import: './src/another-module.js',
      dependOn: 'shared',
    },
    shared: 'lodash',
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
  // 如果我们要在一个 HTML 页面上使用多个入口时，还需设置 optimization.runtimeChunk: 'single'
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      // 将之前的示例中重复的 lodash 模块去除
      chunks: 'all',
    },
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
