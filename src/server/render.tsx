// @ts-ignore
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { defaultStore } from './initStore';

const html = fs.readFileSync(path.join(__dirname, '../../src/index.html'), { encoding: 'utf-8' });

export function render(req: Request, res: Response) {
  if (process.env.MODE === 'development') {
    delete require.cache[require.resolve('../../ssr.bundle')];
  }

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const App = require('../../ssr.bundle').default;

  const reactHTML = ReactDOMServer.renderToString(<Provider store={defaultStore}>
    <StaticRouter location={req.url}>
      <App/>
    </StaticRouter>
  </Provider>);
  res.send(html.replace(
    '<div id="root"></div>',
    `<div id="root">${reactHTML}</div>
<script>window.__INITIAL_STATE__=${JSON.stringify(defaultStore.getState())
    .replace(/</g, '\\u003c')}</script>`
  ));
}
