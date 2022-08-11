import { ofType } from 'redux-observable';
import {
  catchError, map, switchMap
} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Action } from 'redux-actions';
import { showErrorMessage } from '../_common/actions';

// import { sendAddDataLeaderboardRequest } from '../services/leaderboard.services';

import { sendGetThemeRequest, sendPutThemeRequest } from '../services/theme.services';
import {
  getThemePending, getThemeSuccess, putThemePending, putThemeSuccess
} from '../actions/theme.actions';


// import { IAddLeaderboardRequest, IGetLeaderboardRequest } from '../types/leaderboard.types';


/** Эффект, обрабатывающий запрос на получение темы */
export const sendGetThemeRequestEffect$ = (actions$: Observable<Action<any>>) =>
  actions$.pipe(
    ofType(getThemePending.toString()),
    switchMap(({ payload }) =>
      sendGetThemeRequest(payload).pipe(
        map((result: any) => getThemeSuccess(result)),
        catchError(showErrorMessage)
      ))
  );

/** Эффект, обрабатывающий запрос на обновление темы */
export const sendPutThemeRequestEffect$ = (actions$: Observable<Action<any>>) =>
  actions$.pipe(
    ofType(putThemePending.toString()),
    switchMap(({ payload }) =>
      sendPutThemeRequest(payload).pipe(
        map((result: any) => putThemeSuccess(result)),
        catchError(showErrorMessage)
      ))
  );
