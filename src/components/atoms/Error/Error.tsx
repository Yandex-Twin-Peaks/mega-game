import React from 'react';
import './Error.pcss';


export interface IErrorProps {
  error: Error;
  resetErrorBoundary: () => void;
}

function Error({ error, resetErrorBoundary }: IErrorProps) {
  return (
    <div className='Error-Wrapper' role='alert'>
      <p> 💥 CABOOM 💥 Что-то пошло не так</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Перезагрузка</button>
    </div>
  );
}

export default Error;
