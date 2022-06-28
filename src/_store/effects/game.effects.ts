import { ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Action } from 'redux-actions';
import { addGameWord } from '../actions/game.actions';


/** Эффект, обрабатывающий запрос на обновление слова пользователя */
export const addGameWordEffect$ = (actions$: Observable<Action<string>>) =>
  actions$.pipe(
    ofType(addGameWord.toString()),
    switchMap(({ payload }) =>
      payload )
  );
