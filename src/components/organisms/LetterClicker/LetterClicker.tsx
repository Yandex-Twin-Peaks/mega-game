
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './LetterClicker.pcss';
import { addGameLetter } from '../../../_store/actions/game.actions';
import { r1, r2, r2, colorsLetter } from './alphabet';


function LetterClicker() {

  const [state, setState] = useState([]);
  const [letterColor, setLetterColor] = useState(colorsLetter);
  const dispatch = useDispatch();

  function handleAddLetter(letter:any) {
    console.log(letter);
    dispatch(addGameLetter(letter));

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


    </div>


  );
}


export default LetterClicker;
