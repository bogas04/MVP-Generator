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
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
      'React': 'react',
    }),
    // 30% reduction
    /*
       new webpack.optimize.UglifyJsPlugin(),
       new webpack.optimize.DedupePlugin(),
       new webpack.DefinePlugin({
       'process.env': {
       'NODE_ENV': JSON.stringify('production')
       }
       }),
       */
  ]
}
