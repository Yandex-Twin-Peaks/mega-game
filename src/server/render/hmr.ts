import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
// @ts-ignore
import hotMiddleware from '@gatsbyjs/webpack-hot-middleware';
// @ts-ignore
import config from '../../../webpack/webpack.config';
import { render } from './render.js';

const compiler = webpack({
  ...config,
  mode: 'development',

});

export default [
  devMiddleware(compiler, {
    serverSideRender: true,
    index: false,
    publicPath: config.output?.publicPath,
  }),
  hotMiddleware(compiler, {
    path: '/__webpack_hmr',
    log: false,
    heartbeat: 10 * 1000,
  }),
  render,
];
