import React from 'react';
import GameDash from '../GameDash';

import getRandomWord from '../../../utils/getRandomWord';
import { words } from '../../../utils/worddata/abbyy';

import './Start.pcss';
import { useDispatch, useSelector } from 'react-redux';
import {
  addGameWord, addShowText, addSubmittedFlag, clearGameState
} from '../../../_store/actions/game.actions';
import { IStore } from '../../../_store';

function Start() {

  const dispatch = useDispatch();
  const r1 = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ];

  const gameSubmit = useSelector<IStore>(state => state.game.submitted);

  function handleLetterCount(count: any) {
    dispatch(addSubmittedFlag(!gameSubmit));
    const newWord = getRandomWord(words, count);
    dispatch(clearGameState());
    dispatch(addGameWord(newWord));
    const starArray: any = new Array(newWord.num).fill('*');
    dispatch(addShowText(starArray));
  }

  const startJSX = <div className='start-container'>
    <span className='start-container__title'>Игра начинается введите количество буковок:</span>
    <div className='footer__letter'>
      <div className='footer__row'>
        {r1.map((letterCount, index) => (<p key={index} style={{ backgroundColor: '#E2E2E2' }}
          onClick={() => {
            handleLetterCount(letterCount);
          }}>
          {letterCount}
        </p>
        ))}
      </div>
    </div>

  </div>;

  return gameSubmit ?
    <GameDash /> :
    startJSX;
}

export default Start;
