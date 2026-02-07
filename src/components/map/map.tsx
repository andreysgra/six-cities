import {MapIcon, MapPlace} from '../../const';
import {useEffect, useRef} from 'react';
import 'leaflet/dist/leaflet.css';
import {TCity} from '../../types/city';
import useMap from '../../hooks/useMap';
import {Icon, Marker} from 'leaflet';
import {TLocation} from '../../types/location';

type MapProps = {
  city: TCity;
  locations: TLocation[];
  place?: MapPlace;
}

const defaultIcon = new Icon({
  iconUrl: MapIcon.UrlDefault,
  iconSize: MapIcon.Size,
  iconAnchor: MapIcon.Anchor
});

function Map({city, locations, place = MapPlace.City}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const markers: Marker[] = [];

    if (map) {
      locations.forEach(({latitude, longitude}) => {
        const marker = new Marker({
          lat: latitude,
          lng: longitude
        });

        marker
          .setIcon(defaultIcon)
          .addTo(map);

        markers.push(marker);
      });

      const {latitude: lat, longitude: lng} = city.location;

      map.setView({lat, lng});
    }

    return () => {
      if (map) {
        markers.forEach((marker) => map.removeLayer(marker));
      }
    };
  }, [map, city, locations]);

  return (<section className={`${place}__map map`} ref={mapRef}></section>);
}

export default Map;
