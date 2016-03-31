import React, { Component } from 'react';
import PhotoGallery from 'nuka-carousel';

export default class PhotoGalleryContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      photos: [
        {src: 'http://lorempixel.com/1440/900/food/', title: 'Delicious!'},
        {src: 'http://lorempixel.com/1440/900/sports/', title: 'Wow'},
        {src: 'http://lorempixel.com/1440/900/people/', title: 'I love this a lot'},
        {src: 'http://lorempixel.com/1440/900/transport/', title: 'Travel is fun'},
        {src: 'http://lorempixel.com/1440/900/fashion/', title: 'Gorgeous'},
        {src: 'http://lorempixel.com/1440/900/nightlife/', title: 'So soothing!'},
      ],
    };
  }
  componentDidMount () {
    //fetch('/photos.json')
    //.then(r => r.json())
    //.then(photos => {
    //this.setState({ photos });
    //})
    //.catch(error => {
    //console.error(error);
    //this.setState({ photos: [] });
    //});
  }
  render () {
    const { photos } = this.state;
    return (
      <div>
        <PhotoGallery slidesToShow={2} framePadding="0px 0px" children={photos.map(photo => <div className="text-center">
            <img height="200px" src={photo.src} alt={photo.title} />
            <h3>{photo.title}</h3>
        </div>)} />
      </div>
    );
  }
}
