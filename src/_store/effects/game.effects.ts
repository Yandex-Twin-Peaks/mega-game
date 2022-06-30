import { ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Action } from 'redux-actions';
import { addGameWord, addGameLetter } from '../actions/game.actions';


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
