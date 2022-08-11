import { Topics } from '../db/models';

// @ts-ignore
const getAllTopics = (req:any, res:any) => {
  try {
    Topics.findAll().then(topics => res.json(topics));
  } catch (error) {
    console.log(error);
  }
};

const getOneTopicById = (req:any, res:any) => {
  try {
    Topics.findByPk(req.params.id).then(oneTopic => res.json(oneTopic));
  } catch (error) {
    console.log(error);
  }
};

const deleteOneTopicById = (req:any, res:any) => {
  try {
    Topics.destroy({ where: { id: req.params.id } }).then(oneTopic => res.json(oneTopic));
  } catch (error) {
    console.log(error);
  }
};

const postOneTopic = (req:any, res:any) => {
  try {
    Topics.create({
      title: req.body.title,
      userId: req.body.userId
    }).then(oneTopic => res.json(oneTopic));
  } catch (error) {
    console.log(error);
  }
};

export {
  getAllTopics,
  getOneTopicById,
  deleteOneTopicById,
  postOneTopic
};
