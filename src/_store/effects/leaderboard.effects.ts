import { ofType } from 'redux-observable';
import {
  catchError, map, switchMap
} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Action } from 'redux-actions';
import { showErrorMessage } from '../_common/actions';

import { sendLeaderboardDataRequest, sendAddDataLeaderboardRequest } from '../services/leaderboard.services';
import { IAddLeaderboardRequest, IGetLeaderboardRequest } from '../types/leaderboard.types';

import {
  getLeaderboardPending, getLeaderboardSuccess, postLeaderboardPending, postLeaderboardSuccess
} from '../actions/leaderboard.actions';

/** Эффект, обрабатывающий запрос на получение данных лидерборда */
export const sendLeaderboardDataRequestEffect$ = (actions$: Observable<Action<IGetLeaderboardRequest>>) =>
  actions$.pipe(
    ofType(getLeaderboardPending.toString()),
    switchMap(({ payload }) =>
      sendLeaderboardDataRequest(payload).pipe(
        map((result: any) => getLeaderboardSuccess(result)),
        catchError(showErrorMessage)
      ))
  );

/** Эффект, обрабатывающий запрос на обновление аватара пользователя */
export const sendAddDataLeaderboardRequestEffect$ = (actions$: Observable<Action<IAddLeaderboardRequest>>) =>
  actions$.pipe(
    ofType(postLeaderboardPending.toString()),
    switchMap(({ payload }) =>
      sendAddDataLeaderboardRequest(payload).pipe(
        map((result: any) => postLeaderboardSuccess(result)),
        catchError(showErrorMessage)
      ))
  );
