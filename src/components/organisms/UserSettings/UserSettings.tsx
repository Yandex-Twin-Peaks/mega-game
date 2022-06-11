import React, { useState } from 'react';
import './UserSettings.pcss';
import { TextField } from '@mui/material';
import Input from '../../atoms/Input/Input';


function UserSettings() {


  const [inputs, setInputs]:any = useState({});

  const USERSETTINGSINPUTS = [
    'first_name',
    'second_name',
    'display_name',
    'login',
    'email',
    'phone'
  ];

  const USERPASSWORDSINPUTS = ['old_password', 'new_password'];

  function handleUserDataSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(inputs);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name } = event.target as HTMLInputElement;
    const { value } = event.target as HTMLInputElement;
    setInputs((values: object) => ({
      ...values,
      [name]: value
    }));
  }

  return (
    <div className='usersettings__container'>
      <div className='usersettings__avatarsettings'>
        <form id='user-settings' className='usersettings__settings' onSubmit={handleUserDataSubmit}>
          <span>Настройки пользователя</span>
          {USERSETTINGSINPUTS.map((inputName, index) => <TextField
            style={{
              width: '200px',
              margin: '5px'
            }}
            type='text'
            label={inputName}
            name={inputName}
            variant='outlined'
            value={inputs[inputName] || ''}
            onChange={handleChange}
            key={index}
          />)}
          <Input type={'submit'} inputValue={'Отправить'} />
        </form>
        <div className='usersettings__avatar'>
          <span>avatar</span>
        </div>
      </div>
      <form id='password-form' className='usersettings__passwords'>
        <span>Смена пароля</span>
        <TextField
          style={{
            width: '200px',
            margin: '5px'
          }}
          type='text'
          label={'old_password'}
          name={'old_password'}
          variant='outlined'
        />
        <TextField
          style={{
            width: '200px',
            margin: '5px'
          }}
          type='text'
          label={'new_password'}
          name={'new_password'}
          variant='outlined'
        />
        <Input type={'submit'} inputValue={'Отправить'} />
      </form>
    </div>
  );
}

export default UserSettings;
