
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './LetterClicker.pcss';
import {
  addGameLetter, addShowText, addErrorCounter, addGameStatus
} from '../../../_store/actions/game.actions';
import {
  r1, r2, r3, colorsLetter
} from './alphabet';
import { GAMESTATUS } from '../../../types/enums';

function LetterClicker(props:any) {

  const { finalWord, errorCount, showText } = props;
  const [letterColor, setLetterColor] = useState(colorsLetter);
  const dispatch = useDispatch();

  function handleAddLetter(letter:any) {
    if (finalWord.filter((el:string) => el === letter).length) {
      setLetterColor({
        ...letterColor,
        [letter]: '#00d286'
      });
      finalWord.map((el:string, index:number) => {
        if (el === letter) {
          showText[index] = letter;
        }
      });
      dispatch(addShowText(showText));
    } else {
      setLetterColor({
        ...letterColor,
        [letter]: '#dc143c'
      });
      dispatch(addErrorCounter(errorCount + 1));
    }

    dispatch(addGameLetter(letter));

    if (!showText.filter((el: string) => el === '*').length) {
      dispatch(addGameStatus(GAMESTATUS.win));
    }

    if (errorCount === 6) {
      dispatch(addGameStatus(GAMESTATUS.fail));
    }
  }


  return (
    <div className='footer__letter'>
      <div className='footer__row'>
        {r1.map((letter) => (<p style={{ backgroundColor: letterColor[letter] }}
          onClick = {() => handleAddLetter(letter)}>
          {letter}
        </p>
        ))}
      </div>
      <div className='footer__row'>
        {r2.map((letter) => (<p style={{ backgroundColor: letterColor[letter] }}
          onClick = {() => handleAddLetter(letter)}>
          {letter}
        </p>
        ))}
      </div>
      <div className='footer__row'>
        {r3.map((letter) => (<p style={{ backgroundColor: letterColor[letter] }}
          onClick = {() => handleAddLetter(letter)}>
          {letter}
        </p>
        ))}
      </div>


    </div>


  );
}


export default LetterClicker;
