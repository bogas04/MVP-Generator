import React, { Component } from 'react';

export const PhotoGallery = ({ photos }) => {
  const styles = {
    photo: {
      width: '50px',
      margin: '5px',
    }
  };
  return (
    <div className="PhotoGallery">
      {photos.map(e => <img key={e.timestamp} style={styles.photo} src={e.url} />)}
    </div>
  );
};

export default class PhotoGalleryContainer extends React.Component {
  constructor (props) {
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
