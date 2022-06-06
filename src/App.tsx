import React from 'react';
import Router from './router/Router';
import { routes } from './router/config';

const App = () => {
  return (
    <Router routes={routes} />
  );
};

export default App;
