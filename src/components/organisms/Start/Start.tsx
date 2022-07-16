import React, { useState } from 'react';
import GameDash from '../GameDash';

import getRandomWord from '../../../utils/getRandomWord';
import { words } from '../../../utils/worddata/abbyy';

import './Start.pcss';
import { useDispatch } from 'react-redux';
import {
  addGameWord, addShowText, clearGameState
} from '../../../_store/actions/game.actions';

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


  function handleLetterCount(count:any) {
    setSubmit(true);
    const newWord = getRandomWord(words, count);
    dispatch(clearGameState());
    dispatch(addGameWord(newWord));
    const starArray:any = new Array(newWord.num).fill('*');
    dispatch(addShowText(starArray));
  }
  const [submitted, setSubmit] = useState(false);

  const startJSX = <div className='start-container'>
    <span className='start-container__title'>Игра начинается введите количество буковок:</span>
    <div className='footer__letter'>
      <div className='footer__row'>
        {r1.map((letterCount) => (<p style={{ backgroundColor: '#E2E2E2' }}
          onClick = {() => {
            handleLetterCount(letterCount);
          }}>
          {letterCount}
        </p>
        ))}
      </div>


    </div>

  </div>;

  return submitted ?
    <GameDash /> :
    startJSX;
}

export default Start;
