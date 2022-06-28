import React, { useState } from 'react';
import GameDash from '../GameDash';

import getRandomWord from '../../../utils/getRandomWord';
import { words } from '../../../utils/worddata/abbyy';

import './Start.pcss';

function Start() {

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
    setOneFinalWord(newWord.text);
    setOneFinalCategory(newWord.category);
    setCharCount(count);
  }

  const [oneFinalWord, setOneFinalWord] = useState('');
  const [oneFinalCategory, setOneFinalCategory] = useState('');
  const [charCount, setCharCount] = useState(0);
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
    <GameDash charCount={charCount} text={oneFinalWord} category={oneFinalCategory} /> :
    startJSX;
}

export default Start;
