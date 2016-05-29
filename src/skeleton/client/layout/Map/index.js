import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import config from '../../config'; 

export default function Map ({location, title, width = '500px', height = '500px'}) {
  return (
    <Gmaps width={width} height={height} lat={location.lat} lng={location.lon} zoom={parseInt(location.zoom)}
      loadingMessage={'Loading Map'} params={{v: '3.exp', key: config.GMAPS_KEY}} >
      <Marker lat={location.lat} lng={location.lon} draggable={true} />
      <InfoWindow lat={location.lat} lng={location.lon} content={title} />
      <Circle lat={location.lat} lng={location.lon} radius={500} />
    </Gmaps>
  );
}
