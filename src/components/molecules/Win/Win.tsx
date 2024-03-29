import React from 'react';
import './Win.pcss';
import Button from '../../atoms/Button';
import { useDispatch } from 'react-redux';
import { addSubmittedFlag } from '../../../_store/actions/game.actions';
import { Link } from 'react-router-dom';
// @ts-ignore
import winImg from '../Win/winner.svg';


function Win() {
  const dispatch = useDispatch();
  return (
    <>
      <div>Вы выиграли  <img style={{ width: '150px' }}
        src = {winImg} alt='WinSVG'/></div>
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
export default Win;
