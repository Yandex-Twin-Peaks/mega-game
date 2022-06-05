import React from 'react';
import './Fail.pcss';
import Canvas from '../../../pages/Game/Canvas/Canvas';
import getCanvasPic from '../../../pages/Game/utils/getCanvasPic';
import Button from '../../../atoms/Button';


function Fail() {

  const draw = (ctx: any) => {
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 50, 50);
    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 50, 50);
    getCanvasPic(ctx, 7);
  };

  return (
    <>
      <div>Вы проиграли</div>
      <Canvas draw={draw} heigth={200} width={200} />
      <Button text={'Начать сначала'} onClick={() => {
        console.log('сначала');
      }} />
      <Button text={'Перейти в Лидерборд'} onClick={() => {
        console.log('лидерборд');
      }} />
    </>
  );
}
export default Fail;
