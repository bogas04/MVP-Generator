import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function PhotoGallery ({ photos }) {
  return (
    <Carousel>
    {
      photos.map(photo => <Carousel.Item key={photo.title}>
      <img width={900} height={500} alt="900x500" src={photo.src} />
        <Carousel.Caption>
          <h3>{photo.title}</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>)
    }
  </Carousel>
  );
};
