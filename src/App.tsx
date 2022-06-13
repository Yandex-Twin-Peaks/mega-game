import React from 'react';
import Router from './router/Router';
import { routes } from './router/config';
import NavBar from './components/organisms/NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      <Router routes={routes} />
    </>
  );
};

export default App;
