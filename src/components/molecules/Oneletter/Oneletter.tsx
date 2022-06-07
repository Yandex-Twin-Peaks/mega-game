import React from 'react';
import './OneLetter.pcss';

export interface IOneletterProps {
  /** Одна буква */
  letter: string;
}

function OneLetter({ letter }:IOneletterProps) {

  return (
    <div className={'card' + (letter === '*' ? '__open' : '')}>{letter}</div>
  );
}
export default OneLetter;
