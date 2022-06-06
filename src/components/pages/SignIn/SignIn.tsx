import React from 'react';
import { ISignUpRequest } from '../../../_store/types/signUp.types';
import { sendSignUpRequestPending } from '../../../_store/actions/signUp.actions';
import { useDispatch } from 'react-redux';

const SignIn = () => {
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

  return (
    <>
      <h1>SIGN IN</h1>
      <button onClick={() => handleSendSignUp()}>Отправить тестовые данные</button>
    </>
  );
};

export default SignIn;
