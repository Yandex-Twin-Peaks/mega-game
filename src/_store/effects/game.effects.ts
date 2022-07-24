import { ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Action } from 'redux-actions';
import {
  addGameWord, addGameLetter, addErrorCounter, addShowText, clearGameState, addGameStatus, addSubmittedFlag
} from '../actions/game.actions';


/** Эффект, обрабатывающий запрос на обновление слова пользователя */
export const addGameWordEffect$ = (actions$: Observable<Action<string>>) =>
  actions$.pipe(
    ofType(addGameWord.toString()),
    switchMap(({ payload }) =>
      payload )
  );


/** Эффект, обрабатывающий запрос на добавление букв пользователем */
export const addGameLetterEffect$ = (actions$: Observable<Action<string>>) =>
  actions$.pipe(
    ofType(addGameLetter.toString()),
    switchMap(({ payload }) =>
      payload )
  );

/** Эффект, обрабатывающий запрос на добавление количества ошибок пользователем */
export const addErrorCounterEffect$ = (actions$: Observable<Action<string>>) =>
  actions$.pipe(
    ofType(addErrorCounter.toString()),
    switchMap(({ payload }) =>
      payload )
  );


/** Эффект, обрабатывающий запрос на добавление слова для показа пользователем */
export const addShowTextEffect$ = (actions$: Observable<Action<string>>) =>
  actions$.pipe(
    ofType(addShowText.toString()),
    switchMap(({ payload }) =>
      payload )
  );

/** Эффект, очищающий стэйт игры */
export const clearGameStateEffect$ = (actions$: Observable<Action<string>>) =>
  actions$.pipe(ofType(clearGameState.toString()), );

/** Эффект, обрабатывающий запрос на добавление статуса игры */
export const addGameStatusEffect$ = (actions$: Observable<Action<string>>) =>
  actions$.pipe(
    ofType(addGameStatus.toString()),
    switchMap(({ payload }) =>
      payload )
  );

/** Эффект, для старта игры */
export const addSubmittedFlagEffect$ = (actions$: Observable<Action<string>>) =>
  actions$.pipe(
    ofType(addSubmittedFlag.toString()),
    switchMap(({ payload }) =>
      payload )
  );
