const path = require('path');

const config = {
  entry: './src/my-button.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'mu-button-full.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

module.exports = config;
