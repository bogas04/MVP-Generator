import React from 'react';
import styles from './styles';

export default function ReviewList({ reviews = [] }) {
  return (
    <div className="ReviewList">
      {reviews.map(review => (<ReviewListItem key={review.id} {...review} />))}
    </div>
  );
};

export function ReviewListItem ({ reviewer = {}, reviewBody, timestamp = Date.now(), likes = 0}) {
  return (
    <div className="ReviewListItem" style={styles.item}>
      <img style={styles.profilePhoto} src={reviewer.photo} alt={reviewer.name} />
      <div>{reviewer.name}</div>
      <p>{reviewBody}</p>
      <div>{timestamp}</div>
      <div>{likes}</div>
    </div>
  );
};
