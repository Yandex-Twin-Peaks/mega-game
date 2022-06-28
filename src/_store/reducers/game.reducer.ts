import { Action } from 'redux-actions';
import { createTypedHandler, handleTypedActions } from 'redux-actions-ts';
import { IAbbyy } from '../../utils/getRandomWord';
import { addGameWord } from '../actions/game.actions';

export interface IGameState {
  gameWord?: null | IAbbyy;

}


export const initialState: IGameState = { gameWord: null };

const gameReducer = handleTypedActions(
  [
    /** Добавление слова */
    createTypedHandler(addGameWord, (state: IGameState, action: Action<IAbbyy>): IGameState => {

      return {
        ...state,
        gameWord: action.payload
      };
    })
  ],
  initialState
);

export default gameReducer;
