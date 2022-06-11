import { createTypedAction } from 'redux-actions-ts';
import {
  ISignInRequest, ISignUpRequest, ISignUpResponse, IUser
} from '../types/auth.types';

export const sendSignInRequestPending = createTypedAction<ISignInRequest>('[Pending] ISignInRequest');
export const sendSignInRequestSuccess = createTypedAction<void>('[Success] ISignInRequest');

export const sendSignUpRequestPending = createTypedAction<ISignUpRequest>('[Pending] Зарегистрировать нового пользователя');
export const sendSignUpRequestSuccess = createTypedAction<ISignUpResponse>('[Success] Зарегистрировать нового пользователя');

export const sendGetUserPending = createTypedAction<void>('[Pending] Получить пользователя');
export const sendGetUserSuccess = createTypedAction<IUser>('[Success] Получить пользователя');
