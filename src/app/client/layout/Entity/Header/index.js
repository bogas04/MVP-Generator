import React from 'react';
import Rating from '../Rating';
import Bookmark from '../Bookmark';
import styles from './styles';

export default function EntityHeader ({ id, title, profile, cover, rating, description }) {
  return (
    <section className="EntityHeader" style={styles.wrapper(cover)}>
      <div className="container-fluid">
        <div className="col-md-3">
          <img src={profile} style={styles.profile} />
        </div>
        <div className="col-md-9">
          <h1>{title} <small><Rating value={rating} entityId={id} /></small> <Bookmark /></h1>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

