import express from 'express';
// import serverApp from '@/server/serverRenderApp';
import handler from '../render';
// import { themesRoutes } from './themesRoutes';
// import { themesRoutes } from './themeRoutes';
// import themesRouter from './themeRoutes';
// import { userRoutes } from './userRoutes';

import { themesRoutes } from './themeRoutes';
import { topicsRoutes } from './topicsRoutes';

const router = express.Router();

themesRoutes(router);
topicsRoutes(router);
// userRoutes(router);
router.get('/*', handler);

export default router;
