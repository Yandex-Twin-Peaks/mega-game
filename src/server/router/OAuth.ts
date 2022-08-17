import { Router } from 'express';
import { getAuthToken } from '../controllers/OAuthControllers';

export const oauth = (router: Router) => {
  const oauth: Router = Router();

  oauth
    .get('/', getAuthToken);

  router.use('/oauth', oauth);
};
