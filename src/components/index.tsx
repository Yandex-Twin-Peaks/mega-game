import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
import Error from './atoms/Error';

const rootElement = document.querySelector('#root') || document.createElement('div');

// @ts-ignore
import { store } from '../_store';
import '../styles/index.pcss';
import '../styles/normalize.css';
// @ts-ignore

ReactDOM.hydrateRoot(
  rootElement,
  <ErrorBoundary
    FallbackComponent={Error}
    onReset={() => {
    }}
  >
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </ErrorBoundary>
);
