import Rating from '../Rating';
import Bookmark from '../Bookmark';
import styles from './styles';
import { Grid, Col } from 'react-bootstrap';

export default function EntityHeader ({ id, title, profile_photo, cover_photo, rating, description }) {
  return (
    <section className={`EntityHeader`} style={styles.wrapper({ cover_photo })} >
      <Grid fluid>
        <Col md={3}> <img src={profile_photo} style={styles.profile} /> </Col>
        <Col md={9}>
          <h1>{title} <small><Rating value={rating} entityId={id} /></small> <Bookmark /></h1>
          <p>{description}</p>
        </Col>
      </Grid>
    </section>
  );
};
