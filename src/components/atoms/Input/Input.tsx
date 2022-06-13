import React from 'react';
import './Input.pcss';

export interface IInputProps {
  /** Тип инпута */
  type?: string;
  /** Заглушка ипута */
  placeHolder?: string;
  /** Имя инпута */
  name?: string;
  /** Надпись на инпуте */
  inputValue?: string;
  /** Класс name */
  className?: string;
  /** формат */
  accept?: string;
  /** Функция-обработчик измений в инпуте */
  handleChange?: () => void;
}

function Input({
  type = 'text',
  accept,
  className = 'input__submit',
  placeHolder,
  name,
  inputValue,
  handleChange,
}: IInputProps) {
  return (
    <input
      className={className}
      accept={accept}
      type={type}
      value={inputValue}
      placeholder={placeHolder}
      name={name}
      onChange={handleChange}
    />
  );
}
export default Input;
