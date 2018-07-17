const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  watch: true,
  entry: {
    'index': './src/index.js',
  },
  output: {filename: 'dist/[name].js'},
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template/index.html',
      inject: 'body'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ]
  },
  devServer: {
    hot: true,
    lazy: true,
    publicPath: "/dist/",
    contentBase: [path.join(__dirname, "../")],
    disableHostCheck: true,
    watchOptions: {
      ignored: /node_modules/,
      poll: true
    }
  }
}
