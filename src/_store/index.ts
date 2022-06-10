import {
  applyMiddleware, combineReducers, createStore
} from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

/** Авторизация */
import authReducer, { IAuthState } from './reducers/auth.reducer';
import { sendSignInRequestEffect$, sendSignUpRequestEffect$ } from './effects/auth.effects';

export interface IStore {
  auth: IAuthState
}

const rootReducer = combineReducers({
  auth: authReducer
  // @ts-ignore
});

const observableMiddleware = createEpicMiddleware();

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(observableMiddleware)));

// @ts-ignore
observableMiddleware.run(combineEpics(
  // @ts-ignore
  sendSignInRequestEffect$,
  sendSignUpRequestEffect$
));
