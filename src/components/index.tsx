import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { create } from '../server/initStore';

const rootElement = document.querySelector('#root') || document.createElement('div');

// @ts-ignore
const store = create(window.__PRELOADED_STATE__ || {});

// @ts-ignore
delete window.__PRELOADED_STATE__;


ReactDOM.hydrateRoot(
  rootElement,
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);
