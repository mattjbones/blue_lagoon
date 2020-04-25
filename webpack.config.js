const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./app/src/index.js",
  output: {
	 path: path.resolve(__dirname, 'dist'),
	 filename: '[name].[hash].bundle.js',
  }, 
	plugins: [
    new HtmlWebpackPlugin({
      hash: true, 
      filename: 'dist/index.html',
      template: 'app/index.template.html',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'source-map',
  watch: true
};
