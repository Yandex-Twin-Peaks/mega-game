import { ofType } from 'redux-observable';
import {
  catchError, map, switchMap
} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Action } from 'redux-actions';
import { showErrorMessage } from '../_common/actions';
import {
  ISignInRequest, ISignUpRequest, ISignUpResponse, IUser
} from '../types/auth.types';
import {
  sendUserLogOutPending, sendUserLogOutSuccess,
  sendGetUserPending, sendGetUserSuccess,
  sendSignInRequestPending, sendSignInRequestSuccess, sendSignUpRequestPending, sendSignUpRequestSuccess
} from '../actions/auth.actions';
import {
  sendLogOutRequest,
  sendSignInRequest, sendSignUpRequest, sendUserRequest
} from '../services/auth.services';

/** ISignInRequest */
export const sendSignInRequestEffect$ = (actions$: Observable<Action<ISignInRequest>>) =>
  actions$.pipe(
    ofType(sendSignInRequestPending.toString()),
    switchMap(({ payload }) =>
      sendSignInRequest(payload).pipe(
        map((result: string) => sendSignInRequestSuccess(result)),
        catchError(showErrorMessage)
      ))
  );

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

/** Эффект на получение пользователя */
export const sendUserRequestEffect$ = (actions$: Observable<Action<void>>) =>
  actions$.pipe(
    ofType(sendGetUserPending.toString()),
    switchMap(() =>
      sendUserRequest().pipe(
        map((result: IUser) => sendGetUserSuccess(result)),
        catchError(showErrorMessage)
      ))
  );

/** Эффект на разлогин */
export const sendUserLogOutEffect$ = (actions$: Observable<Action<void>>) =>
  actions$.pipe(
    ofType(sendUserLogOutPending.toString()),
    switchMap(() =>
      sendLogOutRequest().pipe(
        map(() => sendUserLogOutSuccess()),
        catchError(showErrorMessage)
      ))
  );
