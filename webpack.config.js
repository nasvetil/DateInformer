const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';
const getFilename = (ext) => isDevelopment ? `[name].${ext}` : `[name].[hash].${ext}`;

const optimizationConfig = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }

  if (!isDevelopment) {
    config.minimizer = [
      new TerserWebpackPlugin()
    ];
  }

  return config;
}

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: ['@babel/polyfill', './index.jsx']
  },
  output: {
    filename: getFilename('js'),
    path: path.resolve(__dirname, 'dist')
  },
  optimization: optimizationConfig(),
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ]
          }
        }
      },
      {
        // 'eslint-loader'
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ]
            },
          }, {
              loader: 'eslint-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      title: './index.html',
      template: './index.html',
      minify: {
        collapseWhitespace: true
      }
    })
  ],
  devServer: {
    port: 8000
  }
}