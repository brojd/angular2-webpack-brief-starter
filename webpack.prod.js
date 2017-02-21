'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpack = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const rootDir = path.resolve(__dirname);

module.exports = {
  
  entry: {
    boot: [path.resolve(rootDir, 'src', 'boot')],
    vendor: [path.resolve(rootDir, 'src', 'vendor')]
  },
  
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(rootDir, 'build')
  },
  
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(pcss|css)$/,
        exclude: [path.resolve(rootDir, 'src', 'app', 'global_styles')],
        loader: ExtractTextPlugin.extract(['to-string-loader', 'css-loader', 'postcss-loader'])
      },
      {
        test: /\.(pcss|css)$/,
        include: [path.resolve(rootDir, 'src', 'app', 'global_styles')],
        loader: ExtractTextPlugin.extract(['css-loader', 'postcss-loader'])
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        loader: 'file-loader?name=media/[name].[ext]',
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'url-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  
  debug: false,
  
  plugins: [
    new HtmlWebpack({
      filename: 'index.html',
      inject: 'body',
      template: path.resolve(rootDir, 'src', 'index.html')
    }),
    new ExtractTextPlugin("css/[name].bundle.css"),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    })
  ],
  
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
  
};