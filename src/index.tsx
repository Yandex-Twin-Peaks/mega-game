import React from 'react';
import Main from './Main';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import './styles/index.pcss';
import './styles/normalize.css';

const container = document.getElementById('root')!;

const app = (
  <HashRouter>
    <Main />
  </HashRouter>
);

const root = createRoot(container);
root.render(app);
