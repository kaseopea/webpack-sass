'use strict';

let path = require('path');
let webpack = require('webpack');
let copyWebpackPlugin = require('copy-webpack-plugin');

const SRC_PATH = '/app';

module.exports = {
  entry: {
    main: './app/js/index.js'
  },
  output: {
      library: '[name]',
      filename: 'js/[name].js',
      path: path.join(__dirname, 'dist'),
  },
  watch: true,
  watchOptions:{
      aggregateTimeout: 100
  },
  plugins:[
    new copyWebpackPlugin([
      { from: path.join(__dirname, 'app/index.html') }
      ]),
  ]
}
