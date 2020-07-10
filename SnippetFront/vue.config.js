const webpack = require("webpack");
const path = require('path')

module.exports = {
  outputDir: '../SnippetBack/dist',
  assetsDir: 'static',
  chainWebpack: config => {
    config
      .plugin('copy')
      .use(require('copy-webpack-plugin'), [[{
        from: path.resolve(__dirname, 'public/static'),
        to: path.resolve(__dirname, '../SnippetBack/dist/static'),
        toType: 'dir',
        ignore: ['.DS_Store']
      }]])
  },
}