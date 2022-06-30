import { Action } from 'redux-actions';
import { createTypedHandler, handleTypedActions } from 'redux-actions-ts';
import { IAbbyy } from '../../utils/getRandomWord';
import { addGameWord, addGameLetter } from '../actions/game.actions';

export interface IGameState {
  gameWord?: null | IAbbyy;
  gameLetters?: any | Array<string>;

}


export const initialState: IGameState = {
  gameWord: null,
  gameLetters: []
};

const gameReducer = handleTypedActions(
  [
    /** Добавление слова */
    createTypedHandler(addGameWord, (state: IGameState, action: Action<IAbbyy>): IGameState => {

      return {
        ...state,
        gameWord: action.payload
      };
    }),
    /** Добавление буквы */
    createTypedHandler(addGameLetter, (state: IGameState, action: Action<any>): IGameState => {

      return {
        ...state,
        gameLetters: [...state.gameLetters, action.payload]
      };
    })
  ],
  initialState
);

export default gameReducer;