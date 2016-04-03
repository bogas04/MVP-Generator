import React from 'react';
import TimeStamp from 'react-timeago';
import styles from './styles';
import { Link } from 'react-router';

export default function ReviewList({ reviews = [], showEntity = false}) {
  return (
    <div className="ReviewList">
      {reviews.length} reviews.
      {reviews.map(review => (<ReviewListItem key={review.id} {...review} showEntity={showEntity}/>))}
    </div>
  );
};

export function ReviewListItem ({ user = {}, entity = {}, reviewBody, createdAt, likes = 0, showEntity = false}) {
  return (
    <div className={`ReviewListItem`} style={styles.item}>
      <div className={`container-fluid`} style={styles.itemHeader}>
        <div className="col-md-1 text-left" style={{padding: '0'}}>
          <img style={styles.profilePhoto} src={user.photo || '/img_assets/default_profile_image.png'}
            alt={user.firstName + ' ' + user.lastName} />
        </div>
        <div className="col-md-11">
          <h3>
            <Link to={`/user/${user.username}`}>{user.firstName + ' ' + user.lastName}</Link>
            {showEntity && <small> reviewed <Link to={`/entity/${entity.id}`}>{entity.title}</Link></small>}
          </h3>
        </div>
      </div>
      <p>{reviewBody}</p>
      <TimeStamp date={createdAt}/>
    </div>
  );
};
