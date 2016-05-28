//import TimeStamp from 'react-timeago';
import TimeStamp from '../TimeStamp';
import styles from './styles';
import { Link } from 'react-router';
import { Button, Grid, Panel, Col, Glyphicon, } from 'react-bootstrap';
import { connect } from 'react-redux';
import PhotoList from '../PhotoList';

export default function ReviewList({ reviews = [], showEntity = false}) {
  return (
    <div className="ReviewList">
      {reviews.length} reviews.
      {reviews.map(review => (<ReviewListItem key={review.id} {...review} showEntity={showEntity}/>))}
    </div>
  );
};

export let ReviewListItem = connect(({ user }) => ({ user }), {

})(
function ReviewListItem ({ user = {}, reviewer = {}, entity = {}, id, reviewBody, images = [], createdAt, likes = 0, showEntity = false}) {
  const header = <div style={styles.header}>
    <h4>
      <Link to={`/user/${reviewer.username}`}>
        <img style={styles.photo} src={reviewer.photo} />
        {reviewer.firstName + ' ' + reviewer.lastName}
      </Link>
      <small> reviewed {showEntity && <Link to={`/entity/${entity.id}`}>{entity.title}</Link>} <TimeStamp date={createdAt}/>
        {(user && user.loggedIn && user.id === reviewer.id) && (
          <div className="pull-right text-right">
            <Button bsSize="xs" bsStyle="info" title="Edit"><Glyphicon glyph="pencil" /></Button>
            {' '}
            <Button bsSize="xs" bsStyle="danger" title="Delete"><Glyphicon glyph="trash" /></Button>
          </div>
          )}
        </small>
      </h4>
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
}
);
