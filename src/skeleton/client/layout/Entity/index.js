import EntityHeader from './Header';
import PhotoGallery from '../../container/PhotoGallery';
import ReviewList from '../../container/ReviewList';
import Map from '../Map';
import styles from './styles';
import { Grid, Col } from 'react-bootstrap';

export default function Entity (props) {
  const { id, title, description, location, email, phone, rating } = props;
  return (
    <div className="Entity">
      <EntityHeader {...props} />
      <Grid fluid style={styles.content}>

        <Col md={3}>
          <ul style={{listStyle: 'none'}}>
            <li><span className="glyphicon glyphicon-earphone" /> Phone: { phone }</li>
            <li>@ Email: { email }</li>
            <li>
              <Map location={location} title={title} width="100%" height="300px"/>
            </li>
          </ul>
        </Col>

        <Col md={5}>
          <ReviewList entityId={id} showEntity={false} />
        </Col>

        <Col md={4}>
          <PhotoGallery entityId={id} thumbnails={true} />
        </Col>

      </Grid>
      <section className={`container-fluid`} style={styles.content}></section>
    </div>
  );
};
