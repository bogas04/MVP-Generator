//import TimeStamp from 'react-timeago';
import TimeStamp from '../TimeStamp';
import styles from './styles';
import { Link } from 'react-router';
import { Panel } from 'react-bootstrap';
import PhotoList from '../PhotoList';

export default function ReviewList({ reviews = [], showEntity = false}) {
  return (
    <div className="ReviewList">
      {reviews.length} reviews.
      {reviews.map(review => (<ReviewListItem key={review.id} {...review} showEntity={showEntity}/>))}
    </div>
  );
};

export function ReviewListItem ({ user = {}, entity = {}, reviewBody, images = [], createdAt, likes = 0, showEntity = false}) {
  const header = <div style={styles.header}>
    <h3>
      <Link to={`/user/${user.username}`}>
        <img style={styles.photo} src={user.photo || '/img_assets/default_profile_image.png'} />
        {user.firstName + ' ' + user.lastName}
      </Link>
      <small> reviewed {showEntity && <Link to={`/entity/${entity.id}`}>{entity.title}</Link>} <TimeStamp date={createdAt}/></small>
    </h3>
  </div>;
  const footer = images.length > 0 && (
    <div style={{ whiteSpace: 'nowrap', overflowX: 'auto', }}>
      <div>{`${images.length} Photos`}</div>
      <PhotoList photos={images.map(src => ({ src, title: reviewBody }))} />
    </div>
  );

  return (
    <Panel header={header} footer={footer}>
      {reviewBody} 
    </Panel>
  );
};

