import React, { useEffect, useState } from 'react';
import { sendSignUpRequestPending, sendSignInRequestPending } from '../../../_store/actions/auth.actions';
import { useDispatch, useSelector } from 'react-redux';

import {
  Button, Card, TextField
} from '@mui/material';

import './Authorization.styles.pcss';
import { IStore } from '../../../_store';
import { useHistory } from 'react-router-dom';

const Authorization = () => {
  /** ---------------------------- Глобальное состояние ------------------------------------ */
  const history = useHistory();
  const isLoggedIn = useSelector((store: IStore) => store.auth.isLoggedIn);

  /** ---------------------------- Внутреннее состояние ------------------------------------ */
  /** Вход или регистрация */
  const [isSignIn, toggleIsSignIn] = useState<boolean>(true);

  /** Данные входа */
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  /** Данные для регистрации */
  const [email, setEmail] = useState<string>('');
  const [signInLogin, setSignInLogin] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [secondName, setSecondName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [firstPassword, setFirstPassword] = useState<string>('');
  const [secondPassword, setSecondPassword] = useState<string>('');

  /** ------------------------- Обработчики событий отправки ------------------------------ */
  const dispatch = useDispatch();
  const handleSendSignUp = () => {
    dispatch(sendSignUpRequestPending({
      email,
      login: signInLogin,
      first_name: firstName,
      second_name: secondName,
      phone,
      password: firstPassword
    }));

  };

  const handleSignIn = () => {
    dispatch(sendSignInRequestPending({
      login,
      password
    }));
  };

  const CLIENT_ID = '42a6859b167b459f9097c0543efd7684';
  const REDIRECT_URI = 'http://localhost:8080';

  function handleOAuthSignIn(e:any) {
    e.preventDefault();
    window.location.href = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
    console.log('test');
  }

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/home');
    }
  }, [isLoggedIn]);

  /** ------------------------- JSX разметка элементов ------------------------------------ */
  const signInJSX = (
    <>
      <div className='auth__card-content'>
        <div className='auth__header-wrapper'>
          <h1 className='auth__header'>
            Вход
          </h1>
        </div>
        <div className='auth__inputs-wrapper'>
          <div className='auth__input-wrapper'>
            <TextField
              required
              label='Логин'
              variant='standard'
              placeholder='Логин'
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              id='login'
            />
          </div>
          <div>
            <TextField
              required
              label='Пароль'
              variant='standard'
              placeholder='Пароль'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id='password'
            />
          </div>
        </div>
        <div className='auth__controls-wrapper'>
          <Button
            variant='contained'
            onClick={() => handleSignIn()}
          >
            Авторизоваться
          </Button>
          <Button
            variant='contained'
            onClick={handleOAuthSignIn}
          >
            Яндекс авторизация
          </Button>
          <Button
            variant='text'
            onClick={() => toggleIsSignIn(false)}
          >
            Нет аккаунта?
          </Button>
        </div>
      </div>
    </>
  );

  const signUpJSX = (
    <>
      <div className='auth__card-content'>
        <div className='auth__header-wrapper'>
          <h1 className='auth__header'>
            Регистрация
          </h1>
        </div>
        <div className='auth__inputs-wrapper__sign-in'>
          <div className='auth__input-wrapper__sign-up'>
            <TextField
              required
              label='Почта'
              variant='standard'
              placeholder='Почта'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id='email'
            />
          </div>
          <div className='auth__input-wrapper__sign-up'>
            <TextField
              required
              label='Логин'
              variant='standard'
              placeholder='Логин'
              value={signInLogin}
              onChange={(e) => setSignInLogin(e.target.value)}
              id='login'
            />
          </div>
          <div className='auth__input-wrapper__sign-up'>
            <TextField
              required
              label='Имя'
              variant='standard'
              placeholder='Имя'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              id='first_name'
            />
          </div>
          <div className='auth__input-wrapper__sign-up'>
            <TextField
              required
              label='Фамилия'
              variant='standard'
              placeholder='Фамилия'
              value={secondName}
              onChange={(e) => setSecondName(e.target.value)}
              id='second_name'
            />
          </div>
          <div className='auth__input-wrapper__sign-up'>
            <TextField
              required
              label='Телефон'
              variant='standard'
              placeholder='Телефон'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              id='phone'
            />
          </div>
          <div className='auth__input-wrapper__sign-up'>
            <TextField
              required
              label='Пароль'
              variant='standard'
              placeholder='Пароль'
              value={firstPassword}
              onChange={(e) => setFirstPassword(e.target.value)}
              id='password'
            />
          </div>
          <div>
            <TextField
              required
              label='Пароль (ещё раз)'
              variant='standard'
              placeholder='Пароль'
              value={secondPassword}
              onChange={(e) => setSecondPassword(e.target.value)}
              id='password2'
            />
          </div>
        </div>
        <div className='auth__controls-wrapper'>
          <Button
            variant='contained'
            onClick={() => handleSendSignUp()}
          >
            Зарегистрироваться
          </Button>
          <Button
            variant='text'
            onClick={() => toggleIsSignIn(true)}
          >
            Войти
          </Button>
        </div>
      </div>
    </>
  );

  /** ------------------------- Рендер ---------------------------------------------------- */
  return (
    <div className='auth'>
      <Card variant='outlined'>
        {isSignIn ? signInJSX : signUpJSX}
      </Card>
    </div>
  );
};

export default Authorization;
