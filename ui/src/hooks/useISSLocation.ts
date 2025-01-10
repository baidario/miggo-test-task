import { useCallback, useState } from 'react';
import { Coordinates } from '../typings';

export const useISSLocation = () => {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);

  const loadCoordinates = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:3000/station');

      if (response.ok) {
        const json = await response.json() as Coordinates;

        setCoordinates(json);
      }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      console.log('Error during coordinates loading');
    }
  }, []);

  return {
    coordinates,
    loadCoordinates,
  };
};
