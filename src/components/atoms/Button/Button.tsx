import React, { FC } from 'react';
import './Button.pcss';

export interface IButtonProps {
  text: string;
  onClick?: () => void
}

const Button: FC<IButtonProps> = ({ text, onClick }: IButtonProps) => {
  return (
    <div className='button' onClick={onClick ? onClick : () => {}}>
      {`${text}!`}
    </div>
  );
};

export default Button;
