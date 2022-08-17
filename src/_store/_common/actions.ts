import { createTypedAction } from 'redux-actions-ts';
import { of } from 'rxjs';

export const errorAction = createTypedAction<void>('[Error]');

export const showErrorMessage = (e: any) => {
  if (e.response.status === 401) {
    // FIXME: починить # в пути
    // window.location.href = '/auth';
  }

  console.log(e.message);
  return of(errorAction());
};
