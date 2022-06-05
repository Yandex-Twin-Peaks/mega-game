import {
  applyMiddleware, combineReducers, createStore
} from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import signUpReducer, { ISignUpState } from './reducers/signUp.reducer';
import { sendSignUpRequestEffect$ } from './effects/signUp.effects';

/* [imports:end] */

export interface IStore {
  signUp: ISignUpState;

  /* [types:end] */
}

const observableMiddleware = createEpicMiddleware();
const rootReducer = combineReducers({
  signUp: signUpReducer

  /* [reducers:end] */
});
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(observableMiddleware)));

// @ts-ignore
observableMiddleware.run(combineEpics(
  // @ts-ignore
  sendSignUpRequestEffect$,));
