const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: "development", // "production" | "development" | "none"
  context: __dirname + '/client',
  entry: './app.jsx',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          },
        },  
      },
    ],
  },
  output: {
    path: __dirname + '/public',
    filename: './bundle.js',
  }
};