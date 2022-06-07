import React from 'react';
import Fail from '../Fail';
import Win from '../Win';
import { GAMESTATUS } from '../../../types/enums';
import './Finish.pcss';

export interface IFinishProps {
  /** Статус игры */
  gameStatus: GAMESTATUS;
}

const Finish = ({ gameStatus }:IFinishProps) => gameStatus === GAMESTATUS.win ? <Win /> : <Fail />;

export default Finish;
