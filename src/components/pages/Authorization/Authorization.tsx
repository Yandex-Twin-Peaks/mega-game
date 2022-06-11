import React from 'react';
import { ISignUpRequest } from '../../../_store/types/auth.types';
import {
  sendSignUpRequestPending, sendSignInRequestPending, sendGetUserPending
} from '../../../_store/actions/auth.actions';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '../../../_store';

const Authorization = () => {
  const dispatch = useDispatch();
  const user = useSelector((store: IStore) => store.auth.user);

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

  const handleGetUser = () => {
    dispatch(sendGetUserPending());
  };

  return (
    <>
      <h1>SIGN IN</h1>
      <button onClick={() => handleSendSignUp()}>Зарегистрироваться</button>
      <button onClick={() => handleSignIn()}>Войти</button>
      {user || <button onClick={() => handleGetUser()}>Получить данные пользователя</button>}
      {user && (
        <div>
          <p>{user.login}</p>
          <p>{user.email}</p>
          <p>{user.display_name}</p>
          <p>{user.first_name}</p>
          <p>{user.second_name}</p>
          <p>{user.phone}</p>
        </div>
      )}
    </>
  );
};

export default Authorization;
