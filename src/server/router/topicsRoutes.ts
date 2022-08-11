import { Router } from 'express';
import   { getAllTopics,
getOneTopicById,
deleteOneTopicById, postOneTopic} from '../controllers/TopicController'


export const topicsRoutes = (router: Router) => {
  const topicsRouter: Router = Router();

  topicsRouter
    .get('/', getAllTopics)
    .get('/:id', getOneTopicById)
    .delete('/:id', deleteOneTopicById)
    .post('/', postOneTopic)


  router.use('/topic', topicsRouter);
};
