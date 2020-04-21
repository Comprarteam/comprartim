const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpackBase = require('../webpack.config.base');

module.exports = webpackBase('', {
  mode: 'production',
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new UglifyJsPlugin({
    // Use uglifyjs-webpack-plugin instead of webpack.optimize.UglifyJs because it's to slow
      parallel: true,
      uglifyOptions: {
        ie8: false,
        sourceMap: false,
        compress: { warnings: false },
      },
    }),
  ],
  NODE_ENV: 'production',
  BUILD_SOURCE_MAP: true,
});
