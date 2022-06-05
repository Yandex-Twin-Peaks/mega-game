import { Action } from 'redux-actions';
import { createTypedHandler, handleTypedActions } from 'redux-actions-ts';
import { sendSignUpRequestSuccess } from '../actions/signUp.actions';
import { ISignUpResponse } from '../types/signUp.types';

export interface ISignUpState {
  id?: string | null;
}

export const initialState: ISignUpState = { id: null };

const signUpReducer = handleTypedActions(
  [
    /** Запрос на регистрацию пользователя */
    createTypedHandler(sendSignUpRequestSuccess, (state: ISignUpState, action: Action<ISignUpResponse>): ISignUpState => {
      return {
        ...state,
        ...action.payload
      };
    }),
  ],
  initialState
);

export default signUpReducer;
