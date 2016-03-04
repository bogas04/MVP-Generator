import React from 'react';
import {findDOMNode as $} from 'react-dom';

export default class Map extends React.Component {
  constructor(p) {
    super(p);
  }
  componentDidMount() {
    const {title = 'NSIT, New Delhi', location: {zoom = 13, lat = 28.609130, lon = 77.0328799}} = this.props;
    const position = new google.maps.LatLng(lat, lon);

    google.maps.event.addDomListener(window, 'load', () => {
      const map = new google.maps.Map($(this), {zoom, center: position, mapTypeId: google.maps.MapTypeId.ROADMAP });
      const marker = new google.maps.Marker({map, position});
      const infowindow = new google.maps.InfoWindow({content:`${title}`});
      google.maps.event.addListener(marker, 'click', () => infowindow.open(map,marker));
      infowindow.open(map,marker);
    });
  }
  render() {
    return (
      <div style={{overflow:'hidden', width: '300px', height: '300px', }}></div>
    );
  }
}
