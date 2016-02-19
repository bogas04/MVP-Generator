import React, { Component } from 'react';

export const PhotoGallery = ({ photos }) => {
  return (
    <div className="PhotoGallery">
      {photos.map(e => <img key={e.timestamp} src={e.url} />)}
    </div>
  );
};

export default class PhotoGalleryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { photos: [] };
  }
  componentDidMount () {
    fetch('/photos.json')
    .then(r => r.json())
    .then(photos => {
      this.setState({ photos });
    });
  }
  render () {
    return (
      <div>
        <PhotoGallery photos={this.state.photos}/>
      </div>
    );
  }
}
