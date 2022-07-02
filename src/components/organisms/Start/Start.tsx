import React, { useState } from 'react';
import GameDash from '../GameDash';

import getRandomWord from '../../../utils/getRandomWord';
import { words } from '../../../utils/worddata/abbyy';

import './Start.pcss';
import { useDispatch, useSelector } from 'react-redux';
import { addGameWord, addShowText } from '../../../_store/actions/game.actions';
import { IStore } from '../../../_store';
function Start() {

  const dispatch = useDispatch();
  const { errorCount }:any = useSelector<IStore>((state) => state.game);
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
    dispatch(addGameWord(newWord));
    dispatch(addShowText(new Array(newWord.num).fill('*')))
  }
  const [submitted, setSubmit] = useState(false);

  const startJSX = <div className='start-container'>
    <span className='start-container__title'>Игра начинается введите количество буковок</span>
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
    <GameDash errorCount = {errorCount} /> :
    startJSX;
}

export default Start;
