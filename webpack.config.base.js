const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
// const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const getGitVersion = require('./bin/get-git-version').getGitVersion

module.exports = () => {
  // Entry path
  const entryPath = path.join('src');
  const entryFile = 'index.jsx';
  const outputPath = 'dist';
  const outPutFileName = 'main.js';

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
            // {
            //   loader: 'postcss-loader',
            //   options: {
            //     config: {
            //       path: './webpack.postcss.config.js',
            //     },
            //   },
            // },
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
        {
            test: /\.(woff|woff2|ttf|otf|eot|svg)$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        outputPath: "fonts"
                    }
                }
            ]
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: 'file-loader',
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
      new HtmlWebpackPlugin({
          filename: 'index.html',
          template: path.join(__dirname, 'public', 'index.ejs'),
          version: JSON.stringify(require('./package.json').version + '-' + getGitVersion())
      }),
    ],
  };
};
