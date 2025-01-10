import { useEffect } from 'react';
import { Map } from './Components/Map';
import { FlightInfo } from './Components/FlightInfo';
import './App.css';
import { useISSLocation } from './hooks/useISSLocation';

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
      <Map ISSCoordinates={coordinates} />
      <FlightInfo />
    </>
  );
}

export default App;
