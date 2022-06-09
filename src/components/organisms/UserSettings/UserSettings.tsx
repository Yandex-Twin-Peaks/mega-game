import React from 'react';
import './UserSettings.pcss';
import Input from '../../atoms/Input/Input';


function UserSettings() {

  return (
    <div className='usersettings__container'>
      <div className='usersettings__avatarsettings'>
        <div className='usersettings__settings'>
          <Input placeHolder='first_name' name='first_name' inputTitle='Имя'/>
          <Input placeHolder='second_name' name='second_name' inputTitle='Фамилия' />
          <Input placeHolder='display_name' name='display_name' inputTitle='Отображаемое имя'/>
          <Input placeHolder='login' name='login' inputTitle='Логин'/>
          <Input placeHolder='email' name='email' inputTitle='Пароль'/>
          <Input placeHolder='phone' name='phone' inputTitle='Телефон'/>
        </div>
        <div className='usersettings__avatar'>
          <span>avatar</span>
        </div>
      </div>
      <div className='usersettings__passwords'>
        <span>Смена пароля</span>
        <Input placeHolder='old_password' name='old_password' inputTitle='Старый пароль'/>
        <Input placeHolder='new_password' name='new_password' inputTitle='Новый пароль' />
      </div>
    </div>
  );
}

export default UserSettings;
