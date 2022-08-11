import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TopicCard from '../../molecules/TopicCard';
import AddTopic from '../../molecules/AddTopic';
import { useSelector } from 'react-redux';

import './OneTopic.pcss';

function OneTopic() {


  const [topic, setTopic] = useState<any>({});
  const [comments, setComments] = useState([]);
  const { Id } = useParams<any>();
  const userId = useSelector<any>((state: { auth: { user: { id: any; }; }; }) => state.auth.user.id);


  function getOneTopic() {

    axios.get(`/topic/${Id}`).then((data):any => setTopic(data.data));

  }

  function getComments() {
    axios.get(`/comments/${Id}`).then((data):any => setComments(data.data));
  }

  function handleAddCommentSubmit(event:any) {
    event.preventDefault();
    axios.post('/comments', {
      text: event.target[0].value,
      userId,
      topicId: Id
    }).then(() =>
      getComments());
  }


  useEffect(() => {

    getOneTopic();
    getComments();

  }, []);

  function handleDeleteOneComment(event:any) {
    axios.delete(`/comments/${event.target.dataset.topicId}`).then(() => getComments());

  }


  return (
    <>
      {topic && <TopicCard id={topic.id} title={topic.title} ownerId={topic.userId} />}
      <div>комментарии</div>
      <div className='onetopic__comments'>
        {comments && comments.map((el:any) => <TopicCard id={el.id} title={el.text} ownerId={el.userId} handleDelete={handleDeleteOneComment} />)}
      </div>

      <AddTopic name={'addComment'} handleAddTopic={handleAddCommentSubmit} />

    </>
  );
}

export default OneTopic;
