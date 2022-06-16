import { Action } from 'redux-actions';
import { createTypedHandler, handleTypedActions } from 'redux-actions-ts';
import {
  sendGetUserSuccess, sendSignInRequestSuccess, sendSignUpRequestSuccess, sendUserLogOutSuccess
} from '../actions/auth.actions';
import { ISignUpResponse, IUser } from '../types/auth.types';

export interface IAuthState {
  id?: null | number;
  user: null | IUser;
  isLoggedIn: boolean;
}

export const initialState: IAuthState = {
  id: null,
  user: null,
  isLoggedIn: false
};

const signInReducer = handleTypedActions(
  [
    /** Вход пользователя */
    createTypedHandler(sendSignInRequestSuccess, (state: IAuthState, action: Action<string>): IAuthState => {

      return {
        ...state,
        isLoggedIn: action.payload === 'OK'
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
        isLoggedIn: true
      };
    }),
    /** Разлогиниться */
    createTypedHandler(sendUserLogOutSuccess, (state: IAuthState): IAuthState => {
      return {
        ...state,
        isLoggedIn: false
      };
    }),
  ],
  initialState
);

export default signInReducer;
