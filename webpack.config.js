var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
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
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract(
            'style-loader',
            'css-loader!postcss-loader!sass-loader?indentedSyntax=sass&includePaths[]=' + __dirname + './app'
          )
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
