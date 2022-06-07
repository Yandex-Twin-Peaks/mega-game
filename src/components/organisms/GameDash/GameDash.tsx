import React, { useState } from 'react';
import Canvas from '../../molecules/Canvas';
import getCanvasPic from '../../../utils/getCanvasPic';
import Finish from '../../molecules/Finish';
import Oneletter from '../../molecules/Oneletter';
import './GameDash.pcss';


export interface IGameDash {
  /** Количество букв в слове, которое нужно отгадать */
  charCount: number;
  /** Итоговое слово которое участвует в игре (рандомно выбрано в компоненте старт) */
  textWord: string;
  /** Наименование категории угадываемого слова */
  category: string
  }

function GameDash(props: IGameDash) {

  const { charCount, category, textWord } = props;

  const starArray:Array<string> = new Array(charCount).fill('*');
  const [showText, setShowText] = useState(starArray);
  const [errorCount, setError] = useState(0);
  const [word, setLetter] = useState('');
  /** Статусы игры: 0 - в процессе 1 - победа 2 - поражение */
  const [gameStatus, setGameStatus] = useState(0);
  const finalWord = textWord.split('');

  function checkNextChar(event: React.FormEvent<HTMLFormElement>) {
    if (finalWord.filter((el) => el === word).length) {
      finalWord.map((el, index) => {
        if (el === word) {
          showText[index] = word;
          setShowText(showText);
        }
      });
    } else {
      setError(errorCount + 1);

      if (errorCount === 6) {
        setGameStatus(2);
      }
    }

    if (!showText.filter((el) => el === '*').length) {
      setGameStatus(1);
    }

    setLetter('');
    event.preventDefault();
  }


  const draw = (ctx: any) => {
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 50, 50);
    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 50, 50);
    getCanvasPic(ctx, errorCount);
  };

  return (
    <>
      {gameStatus === 0 ? (
        <div className='gamedash'>
          <Canvas draw={draw} heigth={200} width={200} />
          <div>Количество ошибок {errorCount}</div>
          <div>
            Загаданное слово (открытое)
            {finalWord.map((el) => (
              <div>{el}</div>
            ))}
          </div>
          <div>Категория: {category}</div>
          Загаданное слово закрытое
          <div className='gamedash__lettercontainer'>
            {showText.map((el) => (
              <Oneletter letter={el} />
            ))}
          </div>
          <div>Введи букву</div>
          <form onSubmit={checkNextChar}>
            <input
              value={word}
              onChange={(e) => setLetter(e.target.value)}
              type='text'
              placeholder='Enter a term'
              className='gamedash__input'
            />
            <button type='submit' className='gamedash__button'>
              Ввод
            </button>
          </form>
        </div>
      ) : (
        <Finish gamestatus={gameStatus} />
      )}
    </>
  );
}

export default GameDash;
