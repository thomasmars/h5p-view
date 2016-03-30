var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    prod: "./index.js"
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js"
  },
  devServer: {
    port: 8050
  }
};
