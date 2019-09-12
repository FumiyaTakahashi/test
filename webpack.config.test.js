const config = require('./webpack.config');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  ...config,
  mode: 'development',
  externals: [nodeExternals()],
  devtool: 'inline-cheap-module-source-map',
};
