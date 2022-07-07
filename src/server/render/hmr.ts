import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
// @ts-ignore
import config from '../../../webpack.config';
import { render } from './render.js';

console.log(config);

const compiler = webpack({
  ...config,
  mode: 'development',

});


export default [
  devMiddleware(compiler, {
    serverSideRender: true,
    index: false,
  }),
  render,
];
