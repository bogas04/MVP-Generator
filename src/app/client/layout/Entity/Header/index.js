import Rating from '../Rating';
import Bookmark from '../Bookmark';
import styles from './styles';
import { Grid, Col } from 'react-bootstrap';

export default function EntityHeader (props) {
  const { id, title, profile_photo, cover_photo, rating, description } = props;

  const dynamicAttributes = Object.keys(props).filter(key => ['id', 'location', 'title', 'profile_photo', 'cover_photo', 'rating', 'description'].indexOf(key) < 0);

  return (
    <section className={`EntityHeader`} style={styles.wrapper({ cover_photo })} >
      <Grid fluid>
        <Col md={3}> <img src={profile_photo} style={styles.profile} /> </Col>
        <Col md={9}>
          <h1>{title} <small><Rating value={rating} entityId={id} /></small> <Bookmark entityId={id} /></h1>
          <p>{description}</p>
          <ul>
            {dynamicAttributes.map(title => <li key={title}><strong>{title}</strong>: {props[title]}</li>)}
          </ul>
        </Col>
      </Grid>
    </section>
  );
};
