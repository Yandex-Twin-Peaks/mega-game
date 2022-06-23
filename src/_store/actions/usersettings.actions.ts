import { createTypedAction } from 'redux-actions-ts';
import {
  IUserSettingsRequest, IUserSettingsResponse, IUserAvatarResponse
} from '../types/usersettings.types';


export const sendUserSettingsPending = createTypedAction<IUserSettingsRequest>('[Pending] Обновить данные пользователя');
export const sendUserSettingsSuccess = createTypedAction<IUserSettingsResponse>('[Success] Обновить данные пользователя');

export const sendUserAvatarPending = createTypedAction<void>('[Pending] Обновить аватар пользователя');
export const sendUserAvatarSuccess = createTypedAction<IUserAvatarResponse>('[Success] Обновить аватар пользователя');
