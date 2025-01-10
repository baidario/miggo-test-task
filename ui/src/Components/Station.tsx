import { FC, useEffect, useMemo } from 'react';
import L from 'leaflet';
import { useMap } from '../contexts/MapProvider';
import { Coordinates } from '../typings';


export const Station: FC<Coordinates> = ({
  latitude,
  longitude,
}) => {
  const { map } = useMap();
  const station = useMemo(() => L.circle([0, 0], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 2000,
  }), []);

  useEffect(() => {
    if (map) {
      station.setLatLng([latitude, longitude]).addTo(map);
    }
  }, [latitude, longitude, station, map]);

  return null;
};
