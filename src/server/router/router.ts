import express from 'express';
import handler from '../render';

import { themesRoutes } from './themeRoutes';
import { topicsRoutes } from './topicsRoutes';
import { commentsRoutes } from './commentRoutes';
import { oauth } from './OAuth';


const router = express.Router();

themesRoutes(router);
topicsRoutes(router);
commentsRoutes(router);
oauth(router);
router.get('/*', handler);

export default router;
