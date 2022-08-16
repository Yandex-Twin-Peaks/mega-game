import React from 'react';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

import './NotFound.pcss';

const NotFound = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('');
  };

  return (
    <main className='not-found'>
      <h1 className='not-found__header'>404</h1>
      <p className='not-found__description'>Упс, не туда попали :(</p>
      <Button onClick={handleClick}>Назад на главную</Button>
    </main>
  );
};

export default NotFound;
