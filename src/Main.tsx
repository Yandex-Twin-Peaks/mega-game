import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import Error from './components/atoms/Error';

import { store } from './_store';
import App from './App';

const Main = () => {
  return (
    <ErrorBoundary
      FallbackComponent={Error}
      onReset={() => {}}
    >
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </ErrorBoundary>
  );
};

export default Main;
