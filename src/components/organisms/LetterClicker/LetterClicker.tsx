
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './LetterClicker.pcss';
import { addGameLetter, addErrorCounter, addShowText } from '../../../_store/actions/game.actions';
import {
  r1, r2, r3, colorsLetter
} from './alphabet';

function LetterClicker(props:any) {

  const { gameLetters, finalWord, errorCount, showText } = props;

  console.log(gameLetters)

  const [state, setState] = useState([]);
  const [letterColor, setLetterColor] = useState(colorsLetter);
  const dispatch = useDispatch();

  function handleAddLetter(letter:any) {
    console.log(letter);
    dispatch(addGameLetter(letter));

    if (finalWord.filter((el:string) => el === gameLetters[gameLetters.length - 1]).length) {
      finalWord.map((el:string, index:number) => {
  
        if (el === gameLetters[gameLetters.length - 1]) {
          showText[index] = gameLetters[gameLetters.length - 1];
        }
      });
      dispatch(addShowText(showText))
      //setShowText(showText);
    } else {
      dispatch(addErrorCounter(errorCount + 1));
  
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
