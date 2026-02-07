import {MapPlace} from '../../const';
import {useRef} from 'react';
import 'leaflet/dist/leaflet.css';
import {TCity} from '../../types/city';
import useMap from '../../hooks/useMap';

type MapProps = {
  city: TCity;
  place?: MapPlace;
}

function Map({city, place = MapPlace.City}: MapProps) {
  const mapRef = useRef(null);
  useMap(mapRef, city);

  return (<section className={`${place}__map map`} ref={mapRef}></section>);
}

export default Map;
