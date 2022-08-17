import { Router } from 'express';
import { getThemeByOwnerId, updateThemeByOwnerId } from '../controllers/ThemeControllers';


export const themesRoutes = (router: Router) => {
  const themesRouter: Router = Router();

  themesRouter
    .put('/', updateThemeByOwnerId)
    .get('/', getThemeByOwnerId);

  router.use('/theme', themesRouter);
};
