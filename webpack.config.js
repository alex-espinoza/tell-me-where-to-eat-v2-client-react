var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');

module.exports = {
  context: __dirname + '/app',
  entry: {
    javascript: './App.js',
    css: './css/style.css'
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract(
            'style',
            'css!postcss-loader'
          )
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css")
  ],
  postcss: [autoprefixer]
};
