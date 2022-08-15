import * as path from 'path';
import nodeExternals from 'webpack-node-externals';
import prodConfig from './prod.config';

export default {
  ...prodConfig,
  mode: 'production',
  entry: './src/App.tsx',
  target: 'node',
  output: {
    filename: 'ssr.bundle.js',
    path: path.join(__dirname, '../build/assets/'),
    publicPath: '/assets/',
    libraryTarget: 'commonjs2'
  },
  externals: [nodeExternals()]
};
