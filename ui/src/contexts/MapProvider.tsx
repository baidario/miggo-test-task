import { createContext, FC, PropsWithChildren, useContext, useState } from 'react';
import L from 'leaflet';

interface MapState {
  map: L.Map | null;
  setMap: (map: L.Map) => void;
}

const MapContext = createContext<MapState | null>(null);

export const MapProvider: FC<PropsWithChildren> = ({ children }) => {
  const [map, setMap] = useState<L.Map | null>(null);

  return (
    <MapContext.Provider value={{ map, setMap }}>{children}</MapContext.Provider>
  );
};

export const useMap = () => {
  const context = useContext(MapContext);

  if (context === null) {
    throw new Error('useMap must be used within a MapContext');
  }

  return context;
}
