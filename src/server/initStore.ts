import { combineReducers, createStore } from 'redux';
import authReducer from '../_store/reducers/auth.reducer';
import leaderboardReducer from '../_store/reducers/leaderboard.reducer';
import gameReducer from '../_store/reducers/game.reducer';
import { IStore } from '../_store';
import { GAMESTATUS } from '../types/enums';

export function create(initialState?: IStore) {
  return createStore(combineReducers({
    auth: authReducer,
    game: gameReducer,
    leaderBoard: leaderboardReducer,
  }), initialState);
}

export const defaultStore = create({
  auth: {
    id: null,
    user: null,
    isLoggedIn: false
  },
  game: {
    gameWord: null,
    gameLetters: [],
    errorCount: 0,
    showText: [],
    gameStatus: GAMESTATUS.inGame,
    submitted: false,
  },
  leaderBoard: { rating: [] },
});
