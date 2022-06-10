import React from 'react';
import { ISignUpRequest } from '../../../_store/types/auth.types';
import { sendSignUpRequestPending, sendSignInRequestPending } from '../../../_store/actions/auth.actions';
import { useDispatch } from 'react-redux';

const Authorization = () => {
  const dispatch = useDispatch();
  const mockData: ISignUpRequest = {
    'first_name': 'Mike',
    'second_name': 'Spring',
    'login': 'spring',
    'email': 'mikespring@mail.com',
    'password': 'mypass55!',
    'phone': '+79008007060'
  };

  const handleSendSignUp = () => {
    dispatch(sendSignUpRequestPending(mockData));
  };

  const handleSignIn = () => {
    dispatch(sendSignInRequestPending({
      login: mockData.login,
      password: mockData.password
    }));
  };

  return (
    <>
      <h1>SIGN IN</h1>
      <button onClick={() => handleSendSignUp()}>Зарегистрироваться</button>
      <button onClick={() => handleSignIn()}>Войти</button>
    </>
  );
};

export default Authorization;
