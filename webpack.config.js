'use strict';

let path = require('path');
let webpack = require('webpack');
let copyWebpackPlugin = require('copy-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

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
    watchOptions: {
        aggregateTimeout: 100
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                // loaders: ['style', 'css', 'sass']
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new copyWebpackPlugin([
            {from: path.join(__dirname, 'app/index.html')}
        ])
    ]
};
