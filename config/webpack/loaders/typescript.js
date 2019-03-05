var HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
  test: /\.(ts|tsx)?(\.erb)?$/,
  use: [{
    loader: 'ts-loader'
  }]
}
