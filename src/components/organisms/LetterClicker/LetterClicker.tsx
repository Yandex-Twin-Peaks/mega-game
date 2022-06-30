
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './LetterClicker.pcss';
import { addGameLetter } from '../../../_store/actions/game.actions';

const r1 = [
  'й',
  'ц',
  'у',
  'к',
  'е',
  'н',
  'г',
  'ш',
  'щ',
  'з',
  'х',
  'ъ'
];

const r2 = [
  'ф',
  'ы',
  'в',
  'а',
  'п',
  'р',
  'о',
  'л',
  'д',
  'ж',
  'э'
];

const r3 = [
  'я',
  'ч',
  'с',
  'м',
  'и',
  'т',
  'ь',
  'б',
  'ю'
];

const colorsLetter = {
  'б': '#E2E2E2',
  'а': '#E2E2E2',
  'в': '#E2E2E2',
  'г': '#E2E2E2',
  'д': '#E2E2E2',
  'е': '#E2E2E2',
  'ё': '#E2E2E2',
  'ж': '#E2E2E2',
  'з': '#E2E2E2',
  'и': '#E2E2E2',
  'й': '#E2E2E2',
  'к': '#E2E2E2',
  'л': '#E2E2E2',
  'м': '#E2E2E2',
  'н': '#E2E2E2',
  'о': '#E2E2E2',
  'п': '#E2E2E2',
  'р': '#E2E2E2',
  'с': '#E2E2E2',
  'т': '#E2E2E2',
  'у': '#E2E2E2',
  'ф': '#E2E2E2',
  'х': '#E2E2E2',
  'ц': '#E2E2E2',
  'ч': '#E2E2E2',
  'ш': '#E2E2E2',
  'щ': '#E2E2E2',
  'ь': '#E2E2E2',
  'ы': '#E2E2E2',
  'ъ': '#E2E2E2',
  'э': '#E2E2E2',
  'ю': '#E2E2E2',
  'я': '#E2E2E2',
};

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
