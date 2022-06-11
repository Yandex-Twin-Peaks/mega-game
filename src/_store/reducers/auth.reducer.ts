import { Action } from 'redux-actions';
import { createTypedHandler, handleTypedActions } from 'redux-actions-ts';
import {
  sendGetUserSuccess, sendSignInRequestSuccess, sendSignUpRequestSuccess
} from '../actions/auth.actions';
import { ISignUpResponse, IUser } from '../types/auth.types';

export interface IAuthState {
  id?: null | number;
  user: null | IUser;
}

export const initialState: IAuthState = {
  id: null,
  user: null
};

const signInReducer = handleTypedActions(
  [
    /** Вход пользователя */
    createTypedHandler(sendSignInRequestSuccess, (state: IAuthState): IAuthState => {

      return { ...state };
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
        user: action.payload
      };
    }),
  ],
  initialState
);

export default signInReducer;
