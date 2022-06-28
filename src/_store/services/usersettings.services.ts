import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import Axios from 'axios-observable';
import { AxiosResponse } from 'axios';
import {
  IUserPasswordsRequest,
  IUserSettingsRequest,
  IUserSettingsResponse,
} from '../types/usersettings.types';
import { API_HOST, paths } from '../../api/constants';

const axiosConfig = { withCredentials: true };

/** PUT Запрос на обновление данных пользователя */
export const sendUserSettingsRequest = (payload: IUserSettingsRequest): Observable<any> => {
  return Axios.put(
    `${API_HOST}${paths.USER_PROFILE}`,
    payload,
    axiosConfig
  ).pipe(map(({ data }: AxiosResponse<IUserSettingsResponse>) => data));
};

/** PUT Запрос на обновление аватара пользователя */
export const sendUserAvatarRequest = (payload: IUserSettingsRequest): Observable<any> => {
  return Axios.put(
    `${API_HOST}${paths.USER_AVATAR}`,
    payload,
    {
      ...axiosConfig,
      headers: { 'Content-Type': 'multipart/form-data' }
    }
  ).pipe(map(({ data }: AxiosResponse<IUserSettingsResponse>) => data));
};

/** PUT Запрос на обновление пароля пользователя */
export const sendUserPasswordsRequest = (payload: IUserPasswordsRequest): Observable<any> => {
  return Axios.put(
    `${API_HOST}${paths.USER_PASSWORDS}`,
    payload,
    axiosConfig
  ).pipe(map(({ data }: AxiosResponse<void>) => data));
};
