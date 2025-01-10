import { FC, useEffect, useMemo, useRef, useState } from 'react';
import L from 'leaflet';

interface MapProps {
  ISSCoordinates: {
    latitude: number | null;
    longitude: number | null;
  }
}

export const Map: FC<MapProps> = ({
  ISSCoordinates,
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const station = useMemo(() => L.circle([0, 0], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 2000,
  }), []);
  const stationPath = useMemo(() => L.polyline([], { color: 'blue' }), []);

  useEffect(() => {
    if (!map.current) { // need to avoid double render in dev mode
      map.current = L.map(mapRef.current!).setView([0, 0], 2);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: 2,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map.current);
    }
  }, []);

  useEffect(() => {
    const { latitude, longitude } = ISSCoordinates;

    if (latitude !== null && longitude !== null) {
      stationPath.addLatLng([latitude, longitude]).addTo(map.current!);
      station.setLatLng([latitude, longitude]).addTo(map.current!);
    }
  }, [ISSCoordinates, station, stationPath]);

  return (
    <div id="map" ref={mapRef} />
  );
};
