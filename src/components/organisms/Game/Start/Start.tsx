import React, { useState } from 'react';
import GameDash from '../GameDash/GameDash';
import './Start.pcss';

import getRandomWord from './utils/getRandomWord';

import { words } from '../../../pages/Game/worddata/abbyy';

function Start() {
  const [oneFinalWord, setOneFinalWord] = useState('');
  const [oneFinalCategory, setOneFinalCategory] = useState('');

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmit(true);
    const newWord = getRandomWord(words, charCount);
    setOneFinalWord(newWord.text);
    setOneFinalCategory(newWord.category);

  };
  const [charCount, setCharCount] = useState(0);
  const [submitted, setSubmit] = useState(false);
  return (
    <>
      {submitted ? (
        <GameDash charCount={charCount} textWord={oneFinalWord} category={oneFinalCategory} />
      ) : (
        <div className='start-container'>
          <span className='start-container__title'>Игра начинается введите количество буковок</span>
          <form className='start-container__form' onSubmit={submitForm}>
            <input
              value={charCount}
              onChange={(e) => setCharCount(Number(e.target.value))}
              type='number'
              placeholder='Enter a term'
              className='start-container__input'
            />
            <button type='submit' className='start-container__button'>
              Ввод
            </button>
          </form>
        </div>
      )}
    </>
  );
}
export default Start;
