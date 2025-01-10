import { useEffect } from 'react';
import { Map } from './Components/Map';
import { FlightInfo } from './Components/FlightInfo';
import './App.css';
import { useISSLocation } from './hooks/useISSLocation';
import { Station } from './Components/Station';
import { StationPath } from './Components/StationPath';

function App() {
  const {
    coordinates,
    loadCoordinates,
  } = useISSLocation();

  useEffect(() => {
    loadCoordinates();
    setInterval(loadCoordinates, 10 * 1000);
  }, [loadCoordinates]);

  return (
    <>
      <Map>
        {coordinates && (
          <>
            <StationPath {...coordinates} />
            <Station {...coordinates} />
          </>
        )}
      </Map>
      <div className="flight-info-container">
        {coordinates && <FlightInfo {...coordinates} />}
      </div>
    </>
  );
}

export default App;
