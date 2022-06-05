/* eslint-disable padding-line-between-statements */
import React, { useState } from 'react';
import Canvas from '../Canvas/Canvas';
import drawlogic from '../utils/drawlogic';
import Win from '../Win';
import Fail from '../Fail';
import './GameDash.pcss';

import { words } from './../worddata/abbyy';

function GameDash(props: any) {

  const [errorCount, setError] = useState(0);
  const [word, setTerm] = useState('');
  const [win, setWin] = useState(false);

  const { number } = props;
  const myWord = words.filter((el) => Number(el.num) === Number(number));
  const finalWord = myWord[0]?.text.split('');

  const starArray:Array<string> = [];
  for (let i = 0; i < number; i++) {
    starArray.push('*');
  }

  const [showText, setShowText] = useState(starArray);

  function submitSquat(event: React.FormEvent<HTMLFormElement>) {
    if (finalWord.filter((el) => el === word).length) {
      finalWord.map((el, index) => {
        if (el === word) {
          showText[index] = word;
          setShowText(showText);
        }
      });
    } else {
      setError(errorCount + 1);
    }

    if (!showText.filter((el) => el === '*').length) {
      setWin(true);
    }

    setTerm('');
    event.preventDefault();
  }


  const draw = (ctx: any) => {
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 50, 50);
    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 50, 50);
    drawlogic(ctx, errorCount);
  };

  return (
    <>
      {errorCount >= 7 ? <Fail /> : !win ? (
        <div>
          <Canvas draw={draw} heigth={200} width={200} />
          <div>Количество ошибок {errorCount}</div>
          <div>
            Загаданное слово (открытое)
            {finalWord.map((el) => (
              <div>{el}</div>
            ))}
          </div>
          Загаданное слово закрытое
          <div>
            {showText.map((el) => (
              <div>{el}</div>
            ))}
          </div>
          <div>Введи букву</div>
          <form onSubmit={submitSquat}>
            <input
              value={word}
              onChange={(e) => setTerm(e.target.value)}
              type='text'
              placeholder='Enter a term'
              className='input'
            />
            <button type='submit' className='btn'>
              Ввод
            </button>
          </form>
        </div>
      ) : (
        <Win />
      )}
    </>
  );
}

export default GameDash;
