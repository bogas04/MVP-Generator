'use strict';

// const webpack = require('webpack')

module.exports = {
  entry: ['./components'],
  output: {
    path: `${__dirname}/web`,
    filename: 'bundle.js'
  },
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
    // new webpack.optimize.UglifyJsPlugin({
    // compressor: {
    // warnings: false,
    // },
    // }),
    // new webpack.optimize.OccurenceOrderPlugin()
  ]
}
