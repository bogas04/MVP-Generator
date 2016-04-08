import React, { Component } from 'react';
import { Button, Modal, Image, } from 'react-bootstrap';

export default class PhotoList extends React.Component {
  constructor(p) {
    super(p);
    this.state = { showViewer: false, photoToView: {} };
  }
  render () {
    const { photos } = this.props;

    const photoList = photos.map(photo => (
      <Image
        onClick={() => this.showModal(photo)} thumbnail responsive
        style={{ width: '100px', cursor: 'pointer', }}
        key={photo.src} src={photo.src} alt={photo.title} />
    ));

    return <div {...this.props}>
      {photoList}
      <PhotoViewer photo={this.state.photoToView} show={this.state.showViewer} onClose={this.closeModal.bind(this)}/>
    </div>;
  }
  showModal(photoToView) {
    this.setState({ showViewer: true, photoToView });
  }
  closeModal() {
    this.setState({ showViewer: false, photoToView: {} });
  }
}

export function PhotoViewer ({ photo = {}, show = false, onClose }) {
  return <Modal show={show} onHide={onClose} aria-labelledby="contained-modal-title-lg">
    <Modal.Header>
      <Modal.Title id="contained-modal-title-lg">{photo.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Image responsive src={photo.src} alt={photo.title} />
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={onClose}>Close</Button>
    </Modal.Footer>
  </Modal>;
}
