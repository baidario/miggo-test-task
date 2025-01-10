import { FC, useEffect, useMemo } from 'react';
import L from 'leaflet';
import { useMap } from '../contexts/MapProvider';
import { Coordinates } from '../typings';

export const StationPath: FC<Coordinates> = ({
  latitude,
  longitude,
}) => {
  const { map } = useMap();
  const stationPath = useMemo(() => L.polyline([], { color: 'blue' }), []);

  useEffect(() => {
    if (map) {
      stationPath.addLatLng([latitude, longitude]).addTo(map);
    }
  }, [latitude, longitude, stationPath, map]);


  return null;
};
