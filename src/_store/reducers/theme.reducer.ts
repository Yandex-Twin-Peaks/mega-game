import { Action } from 'redux-actions';
import { createTypedHandler, handleTypedActions } from 'redux-actions-ts';


import { getThemeSuccess, putThemeSuccess } from '../actions/theme.actions';


// export interface IAuthState {
//   id?: null | number;
//   user: null | IUser;
//   isLoggedIn: boolean;
// }

export const initialState: any = { theme: null, };

const themeReducer = handleTypedActions(
  [
    /** Получаем тему */
    createTypedHandler(getThemeSuccess, (state: any, action: Action<string>): any => {

      return {
        ...state,
        theme: action.payload
      };
    }),
    /** Регистрация пользователя */
    createTypedHandler(putThemeSuccess, (state: any, action: Action<any>): any => {
      return {
        ...state,
        theme: action.payload
      };
    }),
  ],
  initialState
);

export default themeReducer;
