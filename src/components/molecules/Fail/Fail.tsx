import React from 'react';
import './Fail.pcss';
import Canvas from '../Canvas';
import getCanvasPic from '../../../utils/getCanvasPic';
import Button from '../../atoms/Button';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addSubmittedFlag } from '../../../_store/actions/game.actions';

function Fail() {
// TODO: добавить интерфейс для функции
  const draw = (ctx: any) => {
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 50, 50);
    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 50, 50);
    getCanvasPic(ctx, 7);
  };

  const dispatch = useDispatch();

  return (
    <>
      <div>Вы проиграли <img style={{ width: '150px' }} src = './../../../assets/svg/loose.svg' alt='LooseSVG'/></div>
      <Canvas draw={draw} height={400} width={400} />
      <Button text={'Начать сначала'} onClick={() => {
        dispatch(addSubmittedFlag(false));
      }} />
      <Link to='/leaderboard'>
        <Button text={'Перейти в Лидерборд'} onClick={() => {
        }} />
      </Link>
    </>
  );
}
export default Fail;
