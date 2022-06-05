import React from 'react';
import './Fail.pcss';
import Canvas from '../Canvas/Canvas';
import drawlogic from '../utils/drawlogic';

function Fail() {

  const draw = (ctx: any) => {
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 50, 50);
    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 50, 50);

    drawlogic(ctx, 7);


  };

  return (
    <>
      <div>Вы проиграли</div>
      <Canvas draw={draw} heigth={200} width={200} />
    </>
  );
}
export default Fail;
