'use strict';

const HtmlWebpack = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const ChunkWebpack = webpack.optimize.CommonsChunkPlugin;
const rootDir = path.resolve(__dirname, '..');

module.exports = {
  
  entry: {
    app: [path.resolve(rootDir, 'src', 'boot')],
    vendor: [path.resolve(rootDir, 'src', 'vendor')]
  },
  
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(rootDir, 'build')
  },
  
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'awesome-typescript-loader', exclude: /node_modules/ }
    ]
  },
  
  devServer: {
    contentBase: path.resolve(rootDir, 'build'),
    port: 3000,
    quiet: true,
    noInfo: true
  },
  
  debug: true,
  devtool: 'source-map',
  
  plugins: [
    new ChunkWebpack({
      filename: 'vendor.bundle.js',
      minChunks: Infinity,
      name: 'vendor'
    }),
    new HtmlWebpack({
      filename: 'index.html',
      inject: 'body',
      template: path.resolve(rootDir, 'src', 'index.html')
    })
  ],
  
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
  
};