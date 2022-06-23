import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import Axios from 'axios-observable';
import { AxiosResponse } from 'axios';
import {
  IUserSettingsRequest,
  IUserSettingsResponse,
} from '../types/usersettings.types';
import { API_HOST, paths } from '../../api/constants';

const axiosConfig = { withCredentials: true };
const axiosConfigAvatar = {
  withCredentials: true,
  headers: {
    'Content-Type': 'multipart/form-data',
    'accept': 'application/json',
    'content-type': 'application/json'
  },
};

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
    axiosConfigAvatar
  ).pipe(map(({ data }: AxiosResponse<IUserSettingsResponse>) => data));
};
