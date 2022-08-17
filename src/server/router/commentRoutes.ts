import { Router } from 'express';
import {
  getAllComments, getAllCommentByTopicId, deleteOneCommentById, postOneComment
} from '../controllers/CommentController';


export const commentsRoutes = (router: Router) => {
  const commentsRouter: Router = Router();

  commentsRouter
    .get('/', getAllComments)
    .get('/:id', getAllCommentByTopicId)
    .delete('/:id', deleteOneCommentById)
    .post('/', postOneComment);


  router.use('/comments', commentsRouter);
};
