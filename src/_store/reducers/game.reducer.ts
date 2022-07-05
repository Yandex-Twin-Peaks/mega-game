import { Action } from 'redux-actions';
import { createTypedHandler, handleTypedActions } from 'redux-actions-ts';
import { IAbbyy } from '../../utils/getRandomWord';
import {
  addGameWord, addGameLetter, addErrorCounter, addShowText, clearGameState, addGameStatus
} from '../actions/game.actions';
import { GAMESTATUS } from '../../types/enums';

export interface IGameState {
  gameWord?: null | IAbbyy;
  gameLetters?: any | Array<string>;
  errorCount?: number;
  showText?: any | Array<string>;
  gameStatus?: number;
}


export const initialState: IGameState = {
  gameWord: null,
  gameLetters: [],
  errorCount: 0,
  showText: [],
  gameStatus: GAMESTATUS.inGame,
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
    }),
    /** Счетчик ошибок */
    createTypedHandler(addErrorCounter, (state: IGameState, action: Action<any>): IGameState => {

      return {
        ...state,
        errorCount: action.payload
      };
    }),
    /** открытое слово */
    createTypedHandler(addShowText, (state: IGameState, action: Action<any>): IGameState => {

      return {
        ...state,
        showText: action.payload
      };
    }),
    /** очистка game стейта */
    createTypedHandler(clearGameState, (state: IGameState): IGameState => {

      return {
        ...state,
        gameWord: null,
        gameLetters: [],
        errorCount: 0,
        showText: [],
        gameStatus: GAMESTATUS.inGame,
      };
    }),
    /** добавление статуса игры */
    createTypedHandler(addGameStatus, (state: IGameState, action: Action<any>): IGameState => {

      return {
        ...state,
        gameStatus: action.payload
      };
    }),

  ],
  initialState
);

export default gameReducer;
