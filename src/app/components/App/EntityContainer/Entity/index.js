import React from 'react';

import EntityHeader from './Header';
import PhotoGalleryContainer from '../../../PhotoGalleryContainer';
import ReviewListContainer from '../../../ReviewListContainer';
import Map from '../../../Map';
import styles from './styles';

export default function Entity ({ id, title, description, location, cover_photo, profile_photo, email, phone, rating }) {
  return (
    <div className="Entity">
      <EntityHeader rating={rating} title={title} description={description} cover={cover_photo} profile={profile_photo} />
      <section className="container-fluid">
        <div className="col-md-3">
          <ul>
            <li>Phone: { phone }</li>
            <li>Email: { email }</li>
            <li>
              <Map location={location} title={title} />
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <PhotoGalleryContainer entityId={id} />
          <ReviewListContainer entityId={id} />
        </div>
        <div className="col-md-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </section>
    </div>
  );
};
