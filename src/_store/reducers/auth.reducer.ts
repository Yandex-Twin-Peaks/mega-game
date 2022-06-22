import { Action } from 'redux-actions';
import { createTypedHandler, handleTypedActions } from 'redux-actions-ts';
import {
  sendGetUserSuccess, sendSignInRequestSuccess, sendSignUpRequestSuccess, sendUserLogOutSuccess
} from '../actions/auth.actions';
import { ISignUpResponse, IUser } from '../types/auth.types';

import { IUserSettingsResponse } from '../types/usersettings.types';
import { sendUserSettingsSuccess } from '../actions/usersettings.actions';

export interface IAuthState {
  id?: null | number;
  user: null | IUser;
  isLoggedIn: boolean;
  isLoaded: boolean;
}

export const initialState: IAuthState = {
  id: null,
  user: null,
  isLoggedIn: false,
  isLoaded: false
};

const signInReducer = handleTypedActions(
  [
    /** Вход пользователя */
    createTypedHandler(sendSignInRequestSuccess, (state: IAuthState, action: Action<string>): IAuthState => {

      return {
        ...state,
        isLoggedIn: action.payload === 'OK',
        isLoaded: true
      };
    }),
    /** Регистрация пользователя */
    createTypedHandler(sendSignUpRequestSuccess, (state: IAuthState, action: Action<ISignUpResponse>): IAuthState => {
      return {
        ...state,
        ...action.payload
      };
    }),
    /** Получить пользователя */
    createTypedHandler(sendGetUserSuccess, (state: IAuthState, action: Action<IUser>): IAuthState => {
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        isLoaded: true
      };
    }),
    /** Разлогиниться */
    createTypedHandler(sendUserLogOutSuccess, (state: IAuthState): IAuthState => {
      return {
        ...state,
        isLoggedIn: false
      };
    }),
    /** Обновить данные пользователя */
    createTypedHandler(sendUserSettingsSuccess, (state: IAuthState, action: Action<IUserSettingsResponse>): IAuthState => {
      return {
        ...state,
        user: action.payload
      };
    }),
  ],
  initialState
);

export default signInReducer;
