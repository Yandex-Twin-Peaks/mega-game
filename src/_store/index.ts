import {
  applyMiddleware, combineReducers, createStore
} from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

/** Авторизация */
import authReducer, { IAuthState } from './reducers/auth.reducer';
import {
  sendSignInRequestEffect$, sendSignUpRequestEffect$, sendUserLogOutEffect$, sendUserRequestEffect$
} from './effects/auth.effects';

import {
  sendUserAvatarRequestEffect$, sendUserPasswordsRequestEffect$, sendUserSettingsRequestEffect$
} from './effects/usersettings.effects';
import gameReducer, { IGameState } from './reducers/game.reducer';
import leaderboardReducer, { IleaderBoardState } from './reducers/leaderboard.reducer';
import { sendAddDataLeaderboardRequestEffect$, sendLeaderboardDataRequestEffect$ } from './effects/leaderboard.effects';
import themeReducer from './reducers/theme.reducer';
import { sendGetThemeRequestEffect$, sendPutThemeRequestEffect$ } from './effects/theme.effects';

export interface IStore {
  auth: IAuthState
  game: IGameState
  leaderBoard: IleaderBoardState,
  theme: any
}

const state = window.__INITIAL_STATE__;

export const rootReducer = combineReducers({
  auth: authReducer,
  game: gameReducer,
  leaderBoard: leaderboardReducer,
  theme: themeReducer,
});

const observableMiddleware = createEpicMiddleware();

export const store = createStore(rootReducer, state, composeWithDevTools(applyMiddleware(observableMiddleware)));

delete window.__INITIAL_STATE__;

observableMiddleware.run(combineEpics(
  sendSignInRequestEffect$,
  sendSignUpRequestEffect$,
  sendUserRequestEffect$,
  sendUserLogOutEffect$,
  sendUserSettingsRequestEffect$,
  sendUserAvatarRequestEffect$,
  sendUserPasswordsRequestEffect$,
  sendLeaderboardDataRequestEffect$,
  sendAddDataLeaderboardRequestEffect$,
  sendGetThemeRequestEffect$,
  sendPutThemeRequestEffect$,
));
