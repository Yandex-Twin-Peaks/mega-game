import { createTypedAction } from 'redux-actions-ts';
import { of } from 'rxjs';

export const errorAction = createTypedAction<void>('[Error]');

export const showErrorMessage = (e: any) => {
  console.log(e.message);
  return of(errorAction());
};
