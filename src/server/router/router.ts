import express from 'express';

import { themesRoutes } from './themeRoutes';
import { topicsRoutes } from './topicsRoutes';
import { commentsRoutes } from './commentRoutes';
import { oauth } from './OAuth';


const router = express.Router();

themesRoutes(router);
topicsRoutes(router);
commentsRoutes(router);
oauth(router);

export default router;
