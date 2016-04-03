import styles from './styles';
import Map from '../Map';
import Rating from '../Entity/Rating';
import { Link } from 'react-router';
import { Grid, Col } from 'react-bootstrap';

export default function SearchItem ({ id, rating, profile_photo, cover_photo, title = '', description = '', location, }) {
  return (
    <div className={`SearchItem`} style={styles.wrapper}>
      <Grid fluid style={styles.header({ cover_photo })}>
        <Col md={1}> <img style={styles.image} src={profile_photo} /> </Col>
        <Col md={10} offset={1}>
          <h2><Link to={`/entity/${id}`}>{title}</Link> <small><Rating color='white' entityId={id} value={rating} /></small></h2>
        </Col>
      </Grid>
      <p>{description.slice(0, 140) + '...'}</p>
    </div>
  );
}
