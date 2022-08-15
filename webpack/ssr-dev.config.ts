import * as path from 'path';
import nodeExternals from 'webpack-node-externals';
import devConfig from './dev.config';

export default {
  ...devConfig,
  mode: 'development',
  entry: './src/App.tsx',
  target: 'node',
  output: {
    filename: 'ssr.bundle.js',
    path: path.join(__dirname, '../dist/assets/'),
    publicPath: '/assets/',
    libraryTarget: 'commonjs2'
  },
  externals: [nodeExternals()]
};
