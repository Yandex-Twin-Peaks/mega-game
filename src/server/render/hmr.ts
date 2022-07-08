import webpack from 'webpack';
import middleware from 'webpack-dev-middleware';
// @ts-ignore
import hotMiddleware from '@gatsbyjs/webpack-hot-middleware';
// @ts-ignore
import config from '../../../webpack.config';
import { render } from './render.js';


const compiler = webpack({
  ...config,
  mode: 'development',

});


export default [
  middleware(compiler, {
    serverSideRender: true,
    index: false,
  }),
  hotMiddleware(compiler, {
    path: '/__webpack_hmr',
    log: false,
    heartbeat: 10 * 1000,
  }),
  render,
];
