import React from 'react';
import Router from './router/Router';
import { routes } from './router/config';

const Main = () => {
  return (
    <Router routes={routes} />
  );
};

export default Main;
