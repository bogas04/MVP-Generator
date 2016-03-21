import React from 'react';
import TimeStamp from 'react-timeago';
import styles from './styles';

export default function ReviewList({ reviews = [] }) {
  return (
    <div className="ReviewList">
      {reviews.map(review => (<ReviewListItem key={review.id} {...review} />))}
    </div>
  );
};

export function ReviewListItem ({ reviewer = {}, reviewBody, createdAt, likes = 0}) {
  return (
    <div className="ReviewListItem" style={styles.item}>
      <img style={styles.profilePhoto} src={reviewer.photo} alt={reviewer.name} />
      <div>{reviewer.name}</div>
      <p>{reviewBody}</p>
      <TimeStamp date={createdAt}/>
      <div>{likes}</div>
    </div>
  );
};
