import { useCallback, useState } from 'react';
import { Coordinates } from '../typings';

export const useISSLocation = () => {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);

  const loadCoordinates = useCallback(async () => {
    const response = await fetch('http://api.open-notify.org/iss-now.json');

    if (response.ok) {
      const json = await response.json() as {
        iss_position: Coordinates;
      };

      setCoordinates(json.iss_position);
    }
  }, []);

  return {
    coordinates,
    loadCoordinates,
  };
};
