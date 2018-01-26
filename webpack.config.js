const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve('dist'),
    filename: '[name].[chunkhash:8].js'
  },

  devtool: '#source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { ascii_only: true },
      sourceMap: true
    }),
    new webpack.LoaderOptionsPlugin({ minimize: true }),
    new CopyWebpackPlugin([{ from: 'img', to: 'img' }])
  ]
}
