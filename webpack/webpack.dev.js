const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

module.exports = [
  merge(common, {
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.esm.json',
            },
          },
        },
      ],
    },
    output: {
      filename: 'boundle.esm.lib.dev.js',
      path: path.resolve(__dirname, '..', 'dist/esm'),
      libraryTarget: 'module',
    },
    experiments: {
      outputModule: true,
    },
    devtool: 'eval-source-map',
  }),
  merge(common, {
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.cjs.json',
            },
          },
        },
      ],
    },
    output: {
      filename: 'bundle.cjs.lib.dev.js',
      path: path.resolve(__dirname, '..', 'dist/cjs'),
      libraryTarget: 'commonjs2',
    },
    experiments: {
      outputModule: true,
    },
    devtool: 'eval-source-map',
  }),
];
