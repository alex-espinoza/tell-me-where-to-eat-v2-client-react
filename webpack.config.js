var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

var DEV_ENV = process.env.NODE_ENV !== 'production' ? true : false;
var styles = 'css-loader!postcss-loader!sass-loader?indentedSyntax=sass&includePaths[]=' + __dirname + './app';
var sass_loader = DEV_ENV ? 'style-loader!' + styles : ExtractTextPlugin.extract('style-loader', styles);

var config = {
  context: __dirname + '/app',
  entry: {
    javascript: './App.js',
    html: './index.html'
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
      },
      {
        test: /\.sass$/,
        loader: sass_loader
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'file?name=[name].[ext]',
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ],
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  resolve: {
    extensions: ['', '.js', '.sass'],
    root: [__dirname + './app']
  }
};

module.exports = config;
