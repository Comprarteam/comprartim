const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const dotenv = require('dotenv');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require('./package.json');
const { getGitVersion } = require('./bin/get-git-version');


module.exports = () => {
  // Entry path
  const entryPath = path.join('src');
  const entryFile = 'index.jsx';
  const outputPath = 'dist';
  const outPutFileName = 'main.js';
  const env = dotenv.config().parsed;
  const envKeys = Object.keys(env).reduce((prevParam, next) => {
    const prev = prevParam;
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    entry: path.join(__dirname, entryPath, entryFile),
    devServer: {
      contentBase: path.join(__dirname, outputPath),
      open: true,
      openPage: 'index.html',
      disableHostCheck: true,
      historyApiFallback: true,
    },
    output: {
      path: path.join(__dirname, outputPath),
      filename: outPutFileName,
    },
    module: {
      rules: [
        // SCSS
        {
          test: /\.(css|scss)$/,
          exclude: [/public/],
          use: [
            { loader: MiniCssExtractPlugin.loader },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[hash:base64:5]',
                },
                importLoaders: 1,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: './config/postcss.config.js',
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  includePaths: ['node_modules'],
                },
              },
            },
          ],
        },
        // JS
        {
          test: /\.(js|jsx)$/, // include .jsx files
          exclude: [/node_modules/], // exclude any and all files in the node_modules folder
          loader: 'babel-loader',
        },
        // ESLINT
        {
          test: /\.(js|jsx)$/, // include .jsx files
          exclude: /nodes_modules/,
          loader: 'eslint-loader',
        },
      ],
    },
    resolve: {
      alias: {
        react: path.join(__dirname, 'node_modules', 'react'),
      },
      extensions: ['.js', '.jsx', '.json'],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles.css',
      }),
      new webpack.DefinePlugin(envKeys),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(__dirname, 'public', 'index.ejs'),
        version: JSON.stringify(`${pkg.version}-${getGitVersion()}`),
      }),
      new CopyWebpackPlugin([
        {
          from: './public',
          to: '',
          ignore: ['index.ejs'],
        },
      ]),
    ],
  };
};
