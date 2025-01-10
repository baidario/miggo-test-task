import { useCallback, useState } from 'react';

export const useISSLocation = () => {
  const [coordinates, setCoordinates] = useState({
    latitude: null,
    longitude: null,
  });

  const loadCoordinates = useCallback(async () => {
    const response = await fetch('http://api.open-notify.org/iss-now.json');

    if (response.ok) {
      const json = await response.json();

      setCoordinates(json.iss_position);
    }
  }, []);

  return {
    coordinates,
    loadCoordinates,
  };
};
