import { ofType } from 'redux-observable';
import {
  catchError, map, switchMap
} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Action } from 'redux-actions';
import { showErrorMessage } from '../_common/actions';


import {
  IUserSettingsRequest, IUserSettingsResponse, IUserAvatarResponse
} from '../types/usersettings.types';
import {
  sendUserSettingsPending,
  sendUserSettingsSuccess,
  sendUserAvatarPending,
  sendUserAvatarSuccess,
  sendUserPasswordsPending,
  sendUserPasswordsSuccess
} from '../actions/usersettings.actions';
import {
  sendUserSettingsRequest, sendUserAvatarRequest, sendUserPasswordsRequest
} from '../services/usersettings.services';

/** Эффект, обрабатывающий запрос на обновление данных пользователя */
export const sendUserSettingsRequestEffect$ = (actions$: Observable<Action<IUserSettingsRequest>>) =>
  actions$.pipe(
    ofType(sendUserSettingsPending.toString()),
    switchMap(({ payload }) =>
      sendUserSettingsRequest(payload).pipe(
        map((result: IUserSettingsResponse) => sendUserSettingsSuccess(result)),
        catchError(showErrorMessage)
      ))
  );

/** Эффект, обрабатывающий запрос на обновление аватара пользователя */
export const sendUserAvatarRequestEffect$ = (actions$: Observable<Action<any>>) =>
  actions$.pipe(
    ofType(sendUserAvatarPending.toString()),
    switchMap(({ payload }) =>
      sendUserAvatarRequest(payload).pipe(
        map((result: IUserAvatarResponse) => sendUserAvatarSuccess(result)),
        catchError(showErrorMessage)
      ))
  );

/** Эффект, обрабатывающий запрос на обновление пароля пользователя */
export const sendUserPasswordsRequestEffect$ = (actions$: Observable<Action<any>>) =>
  actions$.pipe(
    ofType(sendUserPasswordsPending.toString()),
    switchMap(({ payload }) =>
      sendUserPasswordsRequest(payload).pipe(
        map(() => sendUserPasswordsSuccess()),
        catchError(showErrorMessage)
      ))
  );
