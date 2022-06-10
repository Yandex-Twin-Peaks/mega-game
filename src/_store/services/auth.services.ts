import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import Axios from 'axios-observable';
import { AxiosResponse } from 'axios';
import {
  ISignInRequest, ISignUpRequest, ISignUpResponse
} from '../types/auth.types';
import { API_HOST, paths } from '../../api/constants';

/** POST Запрос на вход пользователя */
export const sendSignInRequest = (payload: ISignInRequest): Observable<void> => {
  return Axios.post(`${API_HOST}${paths.SIGN_IN}`, payload)
    .pipe(map(({ data }: AxiosResponse<void>) => data));
};

/** POST Запрос на регистрацию пользователя */
export const sendSignUpRequest = (payload: ISignUpRequest): Observable<any> => {
  return Axios.post(`${API_HOST}${paths.SIGN_UP}`, payload).pipe(map(({ data }: AxiosResponse<ISignUpResponse>) => data));
};
