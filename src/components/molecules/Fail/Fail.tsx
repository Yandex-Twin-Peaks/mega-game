import React from 'react';
import './Fail.pcss';
import Canvas from '../Canvas';
import getCanvasPic from '../../../utils/getCanvasPic';
import { useHistory } from 'react-router-dom';

function Fail() {
  const history = useHistory();
  // TODO: добавить интерфейс для функции
  const draw = (ctx: any) => {
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 50, 50);
    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 50, 50);
    getCanvasPic(ctx, 7);
  };

  return (
    <div className='fail'>
      <div>Вы проиграли</div>
      <div style={{
        width: 200,
        height: 200
      }}>
        <Canvas draw={draw} heigth={200} width={200} />
      </div>
      <p className='fail__button' onClick={() => document.location.reload()}>Начать сначала</p>
      <p className='fail__button' onClick={() => history.push('/leaderboard')}>Перейти в Лидерборд</p>
    </div>
  );
}
export default Fail;
