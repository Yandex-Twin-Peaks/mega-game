import { Action } from 'redux-actions';
import { createTypedHandler, handleTypedActions } from 'redux-actions-ts';
import { getLeaderboardSuccess, postLeaderboardSuccess } from '../actions/leaderboard.actions';
import { IAddLeaderboardRequest, IGetLeaderboardRequest } from '../types/leaderboard.types';

export interface IleaderBoardState {
  rating: IGetLeaderboardRequest[];
}

export const leaderBoardState: IleaderBoardState = { rating: [] };

const leaderboardReducer = handleTypedActions(
  [
    /** Добавить в leaderboard */
    createTypedHandler(postLeaderboardSuccess, (state: IleaderBoardState, action: Action<IAddLeaderboardRequest>): IleaderBoardState => {

      return {
        ...state,
        ...action.payload,
      };
    }),
    /** Получить из leaderboard */
    createTypedHandler(getLeaderboardSuccess, (state: IleaderBoardState, action: Action<IGetLeaderboardRequest>): IleaderBoardState => {
      return {
        ...state,
        ...action.payload,
      };
    }),
  ],
  leaderBoardState
);

export default leaderboardReducer;
