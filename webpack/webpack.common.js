const path = require('path');

module.exports = {
  entry: './src/index.ts',
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src/'),
    },
    extensions: ['.ts', '.js'],
  },
};
