import { Action } from 'redux-actions';
import { createTypedHandler, handleTypedActions } from 'redux-actions-ts';
import { sendSignInRequestSuccess, sendSignUpRequestSuccess } from '../actions/auth.actions';
import { ISignUpResponse } from '../types/auth.types';

export interface IAuthState {
  id?: null | string
}

export const initialState: IAuthState = { id: null };

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
  ],
  initialState
);

export default signInReducer;
