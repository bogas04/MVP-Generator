import React, { Component } from 'react';
import styles from './styles';
import Map from '../../Map';

export default ({ photo = {}, title = '', description = '', location, }) => {
  return (
    <div className="SearchItem" style={styles.wrapper}>
      <section>
        <img style={styles.image} src={photo.profile} />
        <h4>{title}</h4>
      </section>
      <p>{description.slice(0, 140)}</p>
      <Map location={location} />
    </div>
  );
}
