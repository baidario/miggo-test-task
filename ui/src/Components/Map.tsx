import { useEffect, useRef } from 'react';
import L from 'leaflet';

export const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!map.current) { // need to avoid double render in dev mode
      map.current = L.map(mapRef.current!).setView([0, 0], 2);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: 2,
        maxZoom: 2,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map.current);
    }
  }, []);

  return (
    <div id="map" ref={mapRef} />
  );
};
