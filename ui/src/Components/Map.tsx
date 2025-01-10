import { FC, PropsWithChildren, useEffect, useRef } from 'react';
import L from 'leaflet';
import { MapProvider, useMap } from '../contexts/MapProvider';

const Map: FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);
  const { map, setMap } = useMap();

  useEffect(() => {
    if (!initialized.current) { // need to avoid double render in dev mode
      const mapObj = L.map(mapRef.current!).setView([0, 0], 2);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: 2,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(mapObj);
      setMap(mapObj);

      initialized.current = true;
    }
  }, [setMap, map]);

  return (
    <div id="map" ref={mapRef} />
  );
};

const MapContainer: FC<PropsWithChildren> = ({ children }) => (
  <MapProvider>
    <Map />
    {children}
  </MapProvider>
);

export { MapContainer as Map };
