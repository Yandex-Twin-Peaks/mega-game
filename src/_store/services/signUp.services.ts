import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import Axios from 'axios-observable';
import { AxiosResponse } from 'axios';
import { ISignUpRequest, ISignUpResponse } from '../types/signUp.types';
import { API_HOST, paths } from '../../api/constants';

/** Регистрация нового пользователя */
export const sendSignUpRequest = (payload: ISignUpRequest): Observable<any> => {
  return Axios.post(`${API_HOST}${paths.SIGN_UP}`, payload).pipe(map(({ data }: AxiosResponse<ISignUpResponse>) => data));
};
