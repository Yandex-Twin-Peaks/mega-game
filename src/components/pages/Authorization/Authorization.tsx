import React from 'react';
import {
  sendSignUpRequestPending, sendSignInRequestPending, sendGetUserPending
} from '../../../_store/actions/auth.actions';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '../../../_store';
import { createdUserMock } from '../../../_store/mock/userMock';

const Authorization = () => {
  const dispatch = useDispatch();
  const user = useSelector((store: IStore) => store.auth.user);

  const handleSendSignUp = () => {
    dispatch(sendSignUpRequestPending(createdUserMock));
  };

  const handleSignIn = () => {
    dispatch(sendSignInRequestPending({
      login: createdUserMock.login,
      password: createdUserMock.password
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
      <button onClick={() => handleGetUser()}>Получить данные пользователя</button>
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
