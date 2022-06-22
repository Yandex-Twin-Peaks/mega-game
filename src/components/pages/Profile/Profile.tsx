import React, { useState } from 'react';
import {
  Avatar, CircularProgress, IconButton
} from '@mui/material';

import './Profile.pcss';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '../../../_store';
import { sendUserLogOutPending } from '../../../_store/actions/auth.actions';
import UserSettings from '../../organisms/UserSettings';

const Profile = () => {
  /** ---------------------------- Глобальное состояние ----------------------------------- */
  const userInfo = useSelector((store: IStore) => store.auth);
  const dispatch = useDispatch();
  // @ts-ignore
  const { email, login, first_name, second_name, display_name, phone } = userInfo.user;

  /** ---------------------------- Внутреннее состояние ----------------------------------- */
  const [isDataOpen, setIsDataOpen] = useState<boolean>(false);
  const [isPasswordOpen, setIsPasswordOpen] = useState<boolean>(false);

  /** ---------------------------- JSX компонента ----------------------------------------- */
  const renderInfo = (title: string, value: string) => (
    <div className='profile__info-row'>
      <h2 className='profile__title'>{title}</h2>
      <p className='profile__value'>{value}</p>
    </div>
  );

  const renderControl = (title: string, onClick: () => void, isLogOut = false) => (
    <div className='profile__control-row'>
      <h2
        className={!isLogOut ? 'profile__control' : 'profile__control--logout'}
        onClick={onClick}
      >
        {title}
      </h2>
    </div>
  );

  /** ---------------------------- Обработчики --------------------------------------------- */
  const [file, setFile]:any = useState(null);

  function handleChangeAvatar(event: React.ChangeEvent<HTMLInputElement>) {
    const { files } = event.target as HTMLInputElement;

    if (files !== null && files.length > 0) {
      const file = URL.createObjectURL(files[0]);
      setFile(file);
    }

    console.log(file);
  }

  const handleIsSettingsOpen = () => {
    setIsDataOpen(true);
    setIsPasswordOpen(false);
  };

  const handleIsPasswordSettingOpen = () => {
    setIsDataOpen(false);
    setIsPasswordOpen(true);
  };

  const renderProfileOnState = () => {
    if (isDataOpen) {
      return <UserSettings />;
    } else if (isPasswordOpen) {
      return <UserSettings />;
    }

    return (
      <div className='profile'>
        <div className='profile__avatar-wrapper'>
          <input type='file' onChange={handleChangeAvatar} id='upload' accept='image/*' style={{ display: 'none' }}/>
          <label htmlFor='upload'>
            <IconButton color='primary' aria-label='upload picture' component='span'>
              <Avatar style={{
                width: '90px',
                height: '90px',
              }}
              onClick={(event: any) => handleChangeAvatar(event)}
              />
            </IconButton>
          </label>
          <label htmlFor='avatar'/>
        </div>
        <div className='profile__name-wrapper'>
          <h1 className='profile__name'>Ivan</h1>
        </div>
        <div className='profile__info-wrapper'>
          {renderInfo('Почта', email)}
          {renderInfo('Логин', login)}
          {renderInfo('Имя', first_name)}
          {renderInfo('Фамилия', second_name)}
          {renderInfo('Имя в чате', display_name)}
          {renderInfo('Телефон', phone)}
        </div>
        <div className='profile__control-wrapper'>
          {renderControl('Изменить данные', handleIsSettingsOpen)}
          {renderControl('Изменить пароль', handleIsPasswordSettingOpen)}
          {renderControl('Выйти', () => dispatch(sendUserLogOutPending()), true)}
        </div>
      </div>
    );

  };

  /** ------------------------------------------------------------------------------------- */
  return (
    userInfo.isLoaded ? renderProfileOnState() : <CircularProgress />
  );
};

export default Profile;
