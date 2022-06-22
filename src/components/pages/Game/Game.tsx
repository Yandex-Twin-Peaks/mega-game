import React from 'react';
import Start from '../../organisms/Start/Start';

import './Game.pcss';

const Game = () => {
  return (
    <div className='game'>
      <header className='game__header'>
        <h1>Виселица</h1>
      </header>
      <Start />
    </div>
  );
};

export default Game;
