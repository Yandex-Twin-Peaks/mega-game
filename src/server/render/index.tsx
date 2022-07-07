import { render } from './render';
let handler;

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  handler = require('./hmr').default;
} else {
  handler = render;
}

export default handler as any;
