import { Comments } from '../db/models';

// @ts-ignore
const getAllComments = (req:any, res:any) => {
  try {
    Comments.findAll().then(comments => res.json(comments));
  } catch (error) {
    console.log(error);
  }
};

const getAllCommentByTopicId = (req:any, res:any) => {
  try {
    Comments.findAll({ where: { topicId: req.params.id } }).then(oneComment => res.json(oneComment));
  } catch (error) {
    console.log(error);
  }
};

const deleteOneCommentById = (req:any, res:any) => {
  try {
    Comments.destroy({ where: { id: req.params.id } }).then(oneComment => res.json(oneComment));
  } catch (error) {
    console.log(error);
  }
};

const postOneComment = (req:any, res:any) => {
  try {
    Comments.create({
      text: req.body.text,
      topicId: req.body.topicId,
      userId: req.body.userId
    }).then(oneTopic => res.json(oneTopic));
  } catch (error) {
    console.log(error);
  }
};

export {
  getAllComments,
  getAllCommentByTopicId,
  deleteOneCommentById,
  postOneComment
};
