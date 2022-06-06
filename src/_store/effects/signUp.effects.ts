import { ofType } from 'redux-observable';
import {
  catchError, map, switchMap
} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Action } from 'redux-actions';
import { showErrorMessage } from '../_common/actions';
import { ISignUpRequest, ISignUpResponse } from '../types/signUp.types';
import { sendSignUpRequestPending, sendSignUpRequestSuccess } from '../actions/signUp.actions';
import { sendSignUpRequest } from '../services/signUp.services';

/** Эффект, обрабатывающий запрос на добавление нового пользователя */
export const sendSignUpRequestEffect$ = (actions$: Observable<Action<ISignUpRequest>>) =>
  actions$.pipe(
    ofType(sendSignUpRequestPending.toString()),
    switchMap(({ payload }) =>
      sendSignUpRequest(payload).pipe(
        map((result: ISignUpResponse) => sendSignUpRequestSuccess(result)),
        catchError(showErrorMessage)
      ))
  );
