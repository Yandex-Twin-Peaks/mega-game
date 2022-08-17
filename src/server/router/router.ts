import express from 'express';
import handler from '../render';

import { themesRoutes } from './themeRoutes';
import { topicsRoutes } from './topicsRoutes';
import { commentsRoutes } from './commentRoutes';


const router = express.Router();

themesRoutes(router);
topicsRoutes(router);
commentsRoutes(router);
router.get('/*', handler);

export default router;
