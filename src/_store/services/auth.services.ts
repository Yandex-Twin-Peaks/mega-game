import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import Axios from 'axios-observable';
import { AxiosResponse } from 'axios';
import {
  ISignInRequest, ISignUpRequest, ISignUpResponse, IUser
} from '../types/auth.types';
import { API_HOST, paths } from '../../api/constants';

const axiosConfig = { withCredentials: true };

/** POST Запрос на вход пользователя */
export const sendSignInRequest = (payload: ISignInRequest): Observable<string> => {
  return Axios.post(`${API_HOST}${paths.SIGN_IN}`, payload, axiosConfig)
    .pipe(map(({ data }: AxiosResponse<string>) => data));
};

/** POST Запрос на регистрацию пользователя */
export const sendSignUpRequest = (payload: ISignUpRequest): Observable<any> => {
  return Axios.post(`${API_HOST}${paths.SIGN_UP}`, payload).pipe(map(({ data }: AxiosResponse<ISignUpResponse>) => data));
};

/** GET Запрос на регистрацию пользователя */
export const sendUserRequest = (): Observable<any> => {
  return Axios.get(`${API_HOST}${paths.GET_USER}`, axiosConfig).pipe(map(({ data }: AxiosResponse<IUser>) => data));
};

/** GET Запрос на разлогин */
export const sendLogOutRequest = (): Observable<any> => {
  return Axios.post(`${API_HOST}${paths.LOG_OUT}`)
    .pipe(map(({ data }: AxiosResponse<void>) => data));
};
