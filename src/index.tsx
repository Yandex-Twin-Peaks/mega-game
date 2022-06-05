import React from 'react';
import Main from './Main';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import Error from './components/atoms/Error';

import './styles/index.pcss';
import './styles/normalize.css';

const container = document.getElementById('root')!;

const app = (
  <ErrorBoundary
    FallbackComponent={Error}
    onReset={() => {}}
  >
    <HashRouter>
      <Main />
    </HashRouter>
  </ErrorBoundary>
);

const root = createRoot(container);
root.render(app);
