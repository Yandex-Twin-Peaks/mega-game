import { createTypedAction } from 'redux-actions-ts';
import { IUserSettingsRequest, IUserSettingsResponse } from '../types/usersettings.types';


export const sendUserSettingsPending = createTypedAction<IUserSettingsRequest>('[Pending] Обновить данные пользователя');
export const sendUserSettingsSuccess = createTypedAction<IUserSettingsResponse>('[Success] Обновить данные пользователя');
