'use strict';

const webpack = require('webpack')
const path = require('path');

module.exports = {
  entry: ['./client'],
  output: {
    path: `${__dirname}/web`,
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map',
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    /* new webpack.optimize.UglifyJsPlugin({
compressor: { warnings: false, }, }),
new webpack.optimize.OccurenceOrderPlugin(),
*/
  ]
}
