import { ofType } from 'redux-observable';
import {
  catchError, map, switchMap
} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Action } from 'redux-actions';
import { showErrorMessage } from '../_common/actions';


import { IUserSettingsRequest, IUserSettingsResponse } from '../types/usersettings.types';
import { sendUserSettingsPending, sendUserSettingsSuccess } from '../actions/usersettings.actions';
import { sendUserSettingsRequest } from '../services/usersettings.services';

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
