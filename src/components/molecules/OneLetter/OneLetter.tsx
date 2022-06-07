import React from 'react';
import './OneLetter.pcss';

export interface IOneLetterProps {
  /** Буква, которая отображается */
  letter: string;
}

function OneLetter({ letter }: IOneLetterProps) {
  return (
    <div className={'card' + (letter === '*' ? '--closed' : '')}>
      {letter}
    </div>
  );
}

export default OneLetter;
