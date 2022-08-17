import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import Axios from 'axios-observable';
import { AxiosResponse } from 'axios';
// import {
//   ISignInRequest, ISignUpRequest, ISignUpResponse, IUser
// } from '../types/auth.types';

import { paths } from '../../api/constants';

const axiosConfig = { withCredentials: true };

/** PUT Запрос на обновление темы */
export const sendPutThemeRequest = (payload: any): Observable<string> => {
  return Axios.put(`${paths.THEME}`, payload, axiosConfig)
    .pipe(map(({ data }: AxiosResponse<string>) => data));
};

/** GET Запрос на регистрацию пользователя */
export const sendGetThemeRequest = (params: any): Observable<any> => {
  return Axios.get(`${paths.THEME}`, { params }).pipe(map(({ data }: AxiosResponse<any>) => data));
};
