import webpack from 'webpack';
import config from '../../webpack/dev.config';
import devMiddleware from 'webpack-dev-middleware';
import { render } from './render';
// @ts-ignore
import hotMiddleware from '@gatsbyjs/webpack-hot-middleware';

// @ts-ignore
const compiler = webpack(config);

export default [
  devMiddleware(compiler, {
    serverSideRender: true,
    index: false,
    publicPath: '/'
  }),
  hotMiddleware(compiler, {
    path: '/__webpack_hmr',
    log: false,

  }),
  render
];
