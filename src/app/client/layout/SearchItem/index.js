import React, { Component } from 'react';
import styles from './styles';
import Map from '../Map';
import Rating from '../Entity/Rating';
import { Link } from 'react-router';

export default function SearchItem ({ id, rating, profile_photo, cover_photo, title = '', description = '', location, }) {
  return (
    <div className={`SearchItem`} style={styles.wrapper}>
      <div className={`container-fluid`} style={styles.header({ cover_photo })}>
        <div className="col-md-1">
          <img style={styles.image} src={profile_photo} />
        </div>
        <div className="col-md-offset-1 col-md-10">
          <h2><Link to={`/entity/${id}`}>{title}</Link> <small><Rating color='white' entityId={id} value={rating} /></small></h2>
        </div>
      </div>
      <p>{description.slice(0, 140) + '...'}</p>
    </div>
  );
}
