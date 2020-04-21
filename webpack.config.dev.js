const webpackBase = require('./webpack.config.base')

module.exports = webpackBase('', {
    watch: true,
    mode: 'development',
    NODE_ENV: 'development',
    BUILD_SOURCE_MAP: false
})