const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
module.exports = {
  entry: './src/index.ts',
  plugins: [
    new HtmlWebpackPlugin({
     title: 'Progressive Web Application',
    }),
   new WorkboxPlugin.GenerateSW({
     // 这些选项帮助快速启用 ServiceWorkers
     // 不允许遗留任何“旧的” ServiceWorkers
     clientsClaim: true,
     skipWaiting: true,
   }),
  ],
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};