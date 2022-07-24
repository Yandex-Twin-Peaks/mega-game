import React from 'react';
import Canvas from '../../molecules/Canvas';
import getCanvasPic from '../../../utils/getCanvasPic';
import Finish from '../../molecules/Finish';
import OneLetter from '../../molecules/OneLetter';
import { GAMESTATUS } from '../../../types/enums';

import './GameDash.pcss';
import LetterClicker from '../LetterClicker';
import { useSelector } from 'react-redux';
import { IStore } from '../../../_store';


function GameDash() {

  const { gameLetters, gameWord, errorCount, showText, gameStatus }:any = useSelector<IStore>((state) => state.game);

  const { category, text }:any = gameWord;

  const finalWord = text.split('');


  const draw = (ctx: any) => {
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 50, 50);
    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 50, 50);
    getCanvasPic(ctx, errorCount);
  };

  const gameJSX = <div className='gamedash'>
    <div className='gamedash__canvascontainer'>
      <Canvas draw={draw} height={400} width={400} />
    </div>
    <div className='gamedash__category'>Категория: {category}</div>
    <div className='gamedash__lettercontainer'>
      {showText.map((el: string) => (
        <OneLetter letter={el} />
      ))}
    </div>
    <LetterClicker gameLetters={gameLetters} finalWord = {finalWord} errorCount={errorCount} showText={showText} gameStatus={gameStatus} />
  </div>;

  return (
    <>
      {gameStatus === GAMESTATUS.inGame ? (
        gameJSX
      ) :
        <Finish gameStatus={gameStatus} />}
    </>
  );
}

export default GameDash;
