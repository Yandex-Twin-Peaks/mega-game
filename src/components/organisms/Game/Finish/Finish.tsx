import React from 'react';
import Fail from '../Fail';
import Win from '../Win';
import './Finish.pcss';

export interface IFinishProps {
  gamestatus: number;
}

function Finish(props:IFinishProps) {

  const { gamestatus } = props;

  return (
    <>
      {gamestatus === 1 ? <Win /> : <Fail />}
    </>
  );
}
export default Finish;
