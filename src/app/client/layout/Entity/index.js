import React from 'react';

import EntityHeader from './Header';
import PhotoGallery from '../../container/PhotoGallery';
import ReviewList from '../../container/ReviewList';
import Map from '../Map';
import styles from './styles';

export default function Entity (props) {
  const { id, title, description, location, email, phone, rating } = props;
  return (
    <div className="Entity">
      <EntityHeader {...props} />
      <section className={`container-fluid`} style={styles.content}>
        <div className="col-md-3">
          <ul style={{listStyle: 'none'}}>
            <li><span className="glyphicon glyphicon-earphone" /> Phone: { phone }</li>
            <li>@ Email: { email }</li>
            <li>
              <Map location={location} title={title} />
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <PhotoGallery entityId={id} />
          <ReviewList entityId={id} showEntity={false} />
        </div>
        <div className="col-md-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </section>
    </div>
  );
};
