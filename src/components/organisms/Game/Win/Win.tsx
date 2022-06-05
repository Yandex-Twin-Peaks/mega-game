import React from 'react';
import './Win.pcss';
import Button from '../../../atoms/Button';


function Win() {


  return (
    <>
      <div>Вы выиграли</div>
      <Button text={'Начать сначала'} onClick={() => {
        console.log('сначала');
      }} />
      <Button text={'Перейти в Лидерборд'} onClick={() => {
        console.log('лидерборд');
      }} />
    </>
  );
}
export default Win;
