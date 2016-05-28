import React from 'react';
import { Carousel } from 'react-bootstrap';
import PhotoList from '../PhotoList';

export default function PhotoGallery ({ photos, thumbnails = false }) {
  return (
    <div>
      <Carousel style={{ minHeight: '200px' }}>
        {
          photos.slice(0, 3).map(photo => <Carousel.Item key={photo.title}>
            <img width={900} height={500} alt="900x500" src={photo.src} />
            <Carousel.Caption>
              <h3>{photo.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>)
        }
      </Carousel>
      {thumbnails && <PhotoList photos={photos} />}
    </div>
  );
};
