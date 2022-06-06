import { createTypedAction } from 'redux-actions-ts';
import { ISignUpRequest, ISignUpResponse } from '../types/signUp.types';

export const sendSignUpRequestPending = createTypedAction<ISignUpRequest>('[Pending] Зарегистрировать нового пользователя');
export const sendSignUpRequestSuccess = createTypedAction<ISignUpResponse>('[Success] Зарегистрировать нового пользователя');
