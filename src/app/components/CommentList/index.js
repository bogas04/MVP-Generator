import React from 'react';
import styles from './styles';


export default ({ comments = [] }) => {
  return (
    <div className="CommentList">
      {comments.map(comment => (<Item key={comment.timestamp + Math.random()} {...comment} />))}
    </div>
  );
};

export const Item = ({ commenter = {}, comment, timestamp = Date.now(), likes = 0}) => {
  return (
    <div className="CommentListItem" style={styles.item}>
      <img src={commenter.photo} alt={commenter.name} />
      <div>{commenter.name}</div>
      <p>{comment}</p>
      <div>{timestamp}</div>
      <div>{likes}</div>
    </div>
  );
};
