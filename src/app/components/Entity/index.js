import React from 'react';
import EntityHeader from './Header';
import PhotoGalleryContainer from '../PhotoGalleryContainer';
import CommentListContainer from '../CommentListContainer';
import Map from '../Map';
import CommentBox from '../CommentBox';
import styles from './styles';

export default ({ name = 'Entity name', location, photo = {}, email = 'jane@doe.com', phone = '1234567890' }) => {
  return (
    <div className="Entity">
      <EntityHeader name={name} cover={photo.cover} profile={photo.profile} />
      <section style={styles.flexBox}>
        <div style={styles.oneThird}>
          <ul>
            <li>Phone: { phone }</li>
            <li>Email: { email }</li>
            <li>
              <Map location={location} />
            </li>
          </ul>
        </div>
        <div style={styles.twoThird}>
          <PhotoGalleryContainer />
          <CommentBox />
          <CommentListContainer />
        </div>
        <div style={styles.oneThird}>
          NO IDEA WHAT GOES HERE.
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </section>
    </div>
  );
};
