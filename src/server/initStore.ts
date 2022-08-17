import { combineReducers, createStore } from 'redux';
import authReducer from '../_store/reducers/auth.reducer';
import leaderboardReducer from '../_store/reducers/leaderboard.reducer';
import gameReducer from '../_store/reducers/game.reducer';
import { IStore } from '../_store';
import { GAMESTATUS } from '../types/enums';
import themeReducer from '../_store/reducers/theme.reducer';

export function create(initialState?: IStore) {
  return createStore(combineReducers({
    auth: authReducer,
    game: gameReducer,
    leaderBoard: leaderboardReducer,
    theme: themeReducer
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
  theme: null
});
