import React, { FC } from 'react';
import './Button.pcss';

export interface IButtonProps {
  /** Текст внутри кнопки */
  text: string;
  /** Функция-обработчик клика */
  onClick?: () => void
}

const Button: FC<IButtonProps> = ({ text = 'Кнопка', onClick }: IButtonProps) => {
  return (
    <div className='button' onClick={onClick ? onClick : () => {}}>
      {`${text}!`}
    </div>
  );
};

export default Button;
