import React from 'react';
import './Oneletter.pcss';

export interface IOneletterProps {
  letter: string;
}

function Oneletter(props:IOneletterProps) {

  const { letter } = props;

  return (
    <div className={'card' + (letter === '*' ? '__open' : '')}>{letter}</div>
  );
}
export default Oneletter;
