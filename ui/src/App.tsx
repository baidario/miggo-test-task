import { useState } from 'react';
import { Map } from './Components/Map';
import { FlightInfo } from './Components/FlightInfo';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Map />
      <FlightInfo />
    </>
  );
}

export default App;
