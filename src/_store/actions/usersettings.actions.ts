import { createTypedAction } from 'redux-actions-ts';
import {
  IUserSettingsRequest, IUserSettingsResponse, IUserAvatarResponse, IUserPasswordsRequest
} from '../types/usersettings.types';


export const sendUserSettingsPending = createTypedAction<IUserSettingsRequest>('[Pending] Обновить данные пользователя');
export const sendUserSettingsSuccess = createTypedAction<IUserSettingsResponse>('[Success] Обновить данные пользователя');

export const sendUserAvatarPending = createTypedAction<void>('[Pending] Обновить аватар пользователя');
export const sendUserAvatarSuccess = createTypedAction<IUserAvatarResponse>('[Success] Обновить аватар пользователя');

export const sendUserPasswordsPending = createTypedAction<IUserPasswordsRequest | object>('[Pending] Обновить пароль пользователя');
export const sendUserPasswordsSuccess = createTypedAction<void>('[Success] Обновить пароль пользователя');
