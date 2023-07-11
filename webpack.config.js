const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: {
    'js': './src/js/app.js',
    'theme-styles': './src/scss/theme-styles.scss',
    // 'theme-pack': './src/js/index.js',
    // 'theme-yellow': ['./src/js/theme-yellow.js', './src/themes/theme-yellow.main.scss'],
    // 'theme-blue': ['./src/js/theme-blue.js', './src/themes/theme-blue.main.scss']
  },

  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'js/[name].min.js',
    clean: true,
  },

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png | jpg | gif | svg)$/,
        type: "asset/resource",
        generator: {
          filename: "./img/[name][ext]",
        },
      },
      // Add Prettier loader
      {
        enforce: 'pre',
        test: /\.(js|php)$/,
        exclude: /node_modules/,
        loader: 'prettier-loader',
        options: {
          // Prettier options
          printWidth: 80,
          tabWidth: 2,
          useTabs: false,
          semi: true,
          singleQuote: true,
          trailingComma: 'all',
          bracketSpacing: true,
          arrowParens: 'always',
          endOfLine: 'auto',
        },
      },
    ]
  },
  resolve: {
    extensions: [
      '.scss',
      '.js'
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[name].css"
    })
  ]
};

module.exports = config;
