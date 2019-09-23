const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/main.js',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new CopyPlugin([
      {
        from: './src/index.html',
        to: path.resolve(__dirname, 'dist')
      },
      {
        from: './src/assets',
        to: path.resolve(__dirname, 'dist', 'assets')
      }
    ]),
  ]
};
