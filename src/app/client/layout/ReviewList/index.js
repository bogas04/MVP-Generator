import TimeStamp from 'react-timeago';
import styles from './styles';
import { Link } from 'react-router';
import { Panel } from 'react-bootstrap';

export default function ReviewList({ reviews = [], showEntity = false}) {
  return (
    <div className="ReviewList">
      {reviews.length} reviews.
      {reviews.map(review => (<ReviewListItem key={review.id} {...review} showEntity={showEntity}/>))}
    </div>
  );
};

export function ReviewListItem ({ user = {}, entity = {}, reviewBody, createdAt, likes = 0, showEntity = false}) {
  const header = <div style={styles.header}>
    <h3>
      <Link to={`/user/${user.username}`}>
        <img style={styles.photo} src={user.photo || '/img_assets/default_profile_image.png'} />
        {user.firstName + ' ' + user.lastName}
      </Link>
      <small> reviewed {showEntity && <Link to={`/entity/${entity.id}`}>{entity.title}</Link>} <TimeStamp date={createdAt}/></small>
    </h3>
  </div>;
  return (
    <Panel header={header}>
      {reviewBody} 
    </Panel>
  );
};

