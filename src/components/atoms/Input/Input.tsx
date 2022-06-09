import React from 'react';
import './Input.pcss';

export interface IInputProps {
  /** Тип инпута */
  type?: string;
  /** Заглушка ипута */
  placeHolder: string;
  /** Имя инпута */
  name: string;
  /** Надпись на инпутом */
  inputTitle: string;
  /** Функция-обработчик измений в инпуте */
  handleChange?: () => void
}

function Input({ type = 'text', placeHolder, name, inputTitle, handleChange, }:IInputProps) {

  return <div className='input__container'>
    <span>{inputTitle}</span>
    <input type={type} placeholder={placeHolder} name={name} onChange={handleChange} />
  </div>;
}
export default Input;
