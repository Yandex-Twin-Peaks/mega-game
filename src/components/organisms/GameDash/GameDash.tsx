import React, { useState } from 'react';
import Canvas from '../../molecules/Canvas';
import getCanvasPic from '../../../utils/getCanvasPic';
import Finish from '../../molecules/Finish';
import OneLetter from '../../molecules/OneLetter';
import { GAMESTATUS } from '../../../types/enums';
import { addErrorCounter } from '../../../_store/actions/game.actions';

import './GameDash.pcss';
import LetterClicker from '../LetterClicker';
import { useSelector } from 'react-redux';
import { IStore } from '../../../_store';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
function GameDash() {

  const dispatch = useDispatch();
  const { gameLetters, gameWord, errorCount, showText }:any = useSelector<IStore>((state) => state.game);

  const { num, category, text }:any = gameWord;

  const starArray:Array<string> = new Array(num).fill('*');
  //const [showText, setShowText] = useState(starArray);
  // const [word, setLetter] = useState('');
  const [gameStatus, setGameStatus] = useState(GAMESTATUS.inGame);
  // const [errorCount, setErrorCount] = useState(0);
  const finalWord = text.split('');

  useEffect(()=>{}, [gameLetters])



  // if (finalWord.filter((el:string) => el === gameLetters[gameLetters.length - 1]).length) {
  //   finalWord.map((el:string, index:number) => {

  //     if (el === gameLetters[gameLetters.length - 1]) {
  //       showText[index] = gameLetters[gameLetters.length - 1];
  //     }
  //   });
  //   setShowText(showText);
  // } else {
  //   setErrorCount(errorCount + 1);
  //   dispatch(addErrorCounter(errorCount));

  // }

  if (errorCount === 6) {
    // setGameStatus(2);
    console.log('porazh');
  }


  // if (finalWord.filter((el:string) => el === gameLetters[gameLetters.length - 1]).length) {
  //   finalWord.map((el:string, index:number) => {

  //     if (el === gameLetters[gameLetters.length - 1]) {
  //       showText[index] = gameLetters[gameLetters.length - 1];
  //       setShowText(showText);
  //     }
  //   });
  // } else {

  //   // dispatch(addErrorCounter(errorCount + 1));
  //   // setError(errorCount + 1);
  //   // console.log(errorCount + 1);
  //   // if (errorCount === 6) {
  //   //   setGameStatus(2);
  //   // }
  // }

  // if (!showText.filter((el) => el === '*').length) {
  //   setGameStatus(1);
  // }

  //   // if (finalWord.filter((el:string) => el === word).length) {
  //   //   finalWord.map((el:string, index:number) => {
  //   //     if (el === word) {
  //   //       showText[index] = word;
  //   //       setShowText(showText);
  //   //     }
  //   });
  // } else {
  //   setError(errorCount + 1);

  //   if (errorCount === 6) {
  //     setGameStatus(2);
  //   }
  // }

  // if (!showText.filter((el) => el === '*').length) {
  //   setGameStatus(1);
  // }

  // setLetter('');

  const draw = (ctx: any) => {
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 50, 50);
    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 50, 50);
    getCanvasPic(ctx, errorCount);
  };

  const gameJSX = <div className='gamedash'>
    <Canvas draw={draw} heigth={200} width={200} />
    <div>Количество ошибок {errorCount}</div>
    <div>
    Загаданное слово (открытое)
      {finalWord.map((el:string) => (
        <div>{el}</div>
      ))}
    </div>
    <div>Категория: {category}</div>
  Загаданное слово закрытое
    <div className='gamedash__lettercontainer'>
      {showText.map((el) => (
        <OneLetter letter={el} />
      ))}
    </div>


    <div>Введи букву</div>
    <LetterClicker gameLetters={gameLetters} finalWord = {finalWord} errorCount={errorCount} showText={showText} />
  </div>;

  return (
    <>
      {gameStatus === 0 ? (
        gameJSX
      ) :
        <Finish gameStatus={gameStatus} />}
    </>
  );
}

export default GameDash;
