import { createTypedAction } from 'redux-actions-ts';
import { of } from 'rxjs';

export const errorAction = createTypedAction<void>('[Error]');

export const showErrorMessage = (e: any) => {
  // if (e.response.status === 401) {
  //   console.log(e.response, 'myresponse');
  //   // FIXME: починить # в пути
  //   window.location.href = '/auth';
  // }

  console.log(e.message);
  return of(errorAction());
};
