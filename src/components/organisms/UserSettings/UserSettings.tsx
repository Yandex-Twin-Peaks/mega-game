import React, { useState } from 'react';
import './UserSettings.pcss';
import {
  TextField, Avatar, IconButton
} from '@mui/material';
import Input from '../../atoms/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '../../../_store';
import {
  sendUserSettingsPending, sendUserAvatarPending, sendUserPasswordsPending
} from '../../../_store/actions/usersettings.actions';

interface IPasswords {
  oldPassword: string,
  newPassword: string,
}

interface IInputs {
  first_name: string | '',
  second_name: string,
  display_name: string,
  login: string,
  email: string,
  phone: string
}

function UserSettings() {
  const AVATAR_PATH = 'https://ya-praktikum.tech/api/v2/resources/';
  const user = useSelector((store: IStore) => store.auth.user);
  const test = useSelector(state=>state);
  console.log(test, 'gggoodday')
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState<IInputs | object | any>(user);
  const [passwords, setPasswords] = useState<IPasswords | object>({});
  const [file, setFile] = useState<string | undefined>(user?.avatar ? AVATAR_PATH + user?.avatar : undefined);

  const USER_SETTINGS_INPUTS = [
    'first_name',
    'second_name',
    'display_name',
    'login',
    'email',
    'phone'
  ];

  const USER_PASSWORDS_INPUTS = ['oldPassword', 'newPassword'];

  function handleUserDataSubmit(event: React.FormEvent<HTMLFormElement>) {
    dispatch(sendUserSettingsPending(inputs));
    event.preventDefault();
  }

  function handlePasswordsSubmit(event: React.FormEvent<HTMLFormElement>) {
    dispatch(sendUserPasswordsPending(passwords));
    event.preventDefault();
  }

  function handleChangeUserSettings(event: React.ChangeEvent<HTMLInputElement>) {
    const { name } = event.target as HTMLInputElement;
    const { value } = event.target as HTMLInputElement;
    setInputs((values: object) => ({
      ...values,
      [name]: value
    }));
  }

  function handleChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
    const { name } = event.target as HTMLInputElement;
    const { value } = event.target as HTMLInputElement;
    setPasswords((values: object) => ({
      ...values,
      [name]: value
    }));
  }

  function handleChangeAvatar(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    const { files } = event.target as HTMLInputElement;

    if (files !== null && files.length > 0) {
      const formData: any = new FormData();
      formData.append('avatar', files[0]);
      const file = URL.createObjectURL(files[0]);
      dispatch(sendUserAvatarPending(formData));
      setFile(file);
    }
  }

  return (
    <div className='user-settings__container'>
      <div className='user-settings__avatar'>
        <input type='file' onChange={handleChangeAvatar} id='upload' accept='image/*' style={{ display: 'none' }}/>
        <label htmlFor='upload'>
          <IconButton color='primary' aria-label='upload picture' component='span'>
            <Avatar id='avatar' src={file}
              style={{
                width: '90px',
                height: '90px',
              }}
            />
          </IconButton>
        </label>
        <label htmlFor='avatar'/>
      </div>
      <form id='user-settings' className='user-settings__settings' onSubmit={handleUserDataSubmit}>
        {USER_SETTINGS_INPUTS.map((inputName, index) => <TextField
          style={{
            width: '200px',
            margin: '5px'
          }}
          type='text'
          label={inputName}
          name={inputName}
          variant='outlined'
          value={inputs[inputName] || ''}
          onChange={handleChangeUserSettings}
          key={index}
        />)}
        <Input type={'submit'} inputValue={'Изменить данные'} />
      </form>
      <div className='user-settings__avatar'>

      </div>
      <form id='password-form' className='user-settings__passwords' onSubmit={handlePasswordsSubmit}>
        {USER_PASSWORDS_INPUTS.map((inputName, index) => <TextField
          style={{
            width: '200px',
            margin: '5px'
          }}
          type='text'
          label={inputName}
          name={inputName}
          variant='outlined'
          onChange={handleChangePassword}
          key={index}
        />)}
        <Input type={'submit'} inputValue={'Изменить пароль'} />
      </form>
    </div>
  );
}

export default UserSettings;
