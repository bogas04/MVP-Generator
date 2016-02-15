import React from 'react';
import Header from './Header';
import PhotoGalleryContainer from '../PhotoGalleryContainer';
import CommentListContainer from '../CommentListContainer';

export default ({ name = 'Entity name', photo = {}, email = 'jane@doe.com', phone = '1234567890' }) => {
  return (
    <div>
      <Header name={name} photo={photo} />
      <section>
        <div style={{ width: '25%', float: 'left' }}>
          <ul>
            <li>Phone: { phone }</li>
            <li>Email: { email }</li>
            <li>
              MAP COMES HERE
            </li>
          </ul>
        </div>
        <div style={{ width: '50%', float: 'left' }}>
          <div>
            <PhotoGalleryContainer />
          </div>
          <div style={{ border: '1px solid black', textAlign: 'center' }}>
            <textarea placeholder="Enter your comment" ></textarea>
            <button>Comment</button>
          </div>
          <div>
            <CommentListContainer />
          </div>
        </div>
        <div style={{ width: '25%', float: 'left' }}>
          NO IDEA WHAT GOES HERE
        </div>
      </section>
    </div>
  );
};
