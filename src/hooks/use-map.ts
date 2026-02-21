import {MutableRefObject, useEffect, useRef, useState} from 'react';
import {TCity} from '../types/city';
import {Map, TileLayer} from 'leaflet';
import {MAP_TILE_LAYER_ATTRIBUTION, MAP_TILE_LAYER_URL} from '../const';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: TCity): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const mapInstance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude
        },
        zoom: city.location.zoom
      });

      const mapLayer = new TileLayer(
        MAP_TILE_LAYER_URL,
        {
          attribution: MAP_TILE_LAYER_ATTRIBUTION
        }
      );

      mapInstance.addLayer(mapLayer);

      setMap(mapInstance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}

export default useMap;
