
import React from 'react';
import './TopicCard.pcss';
import { Link } from 'react-router-dom';

export interface ITopicCardProps {
  /** Буква, которая отображается */
  id: number,
  title: string,
  ownerId: number,
  handleDelete: any,
}



function TopicCard({ id, title, ownerId, handleDelete }: ITopicCardProps) {
  return (
    <div className='topiccard topiccard-1'>
      <div className='topiccard__icon'><i className='fas fa-bolt'></i></div>
      <p className='topiccard__exit'><i className='fas fa-times'>ИД пользователя: {ownerId}</i></p>
      <Link to={`forum/${id}`}><h2 className='topiccard__title'>{id}{title}</h2></Link>
      <p className='topiccard__apply'>
        <div className='topiccard__link' data-topic-id={id} onClick={handleDelete}>
           Удалить пост <i className='fas fa-arrow-right'></i></div>
        {/* <div>Удалить топик</div> */}
      </p>
    </div>
  );
}

export default TopicCard;
