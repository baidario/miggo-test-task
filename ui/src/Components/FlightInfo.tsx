import { FC } from 'react';
import { Coordinates } from '../typings';

export const FlightInfo: FC<Coordinates> = ({
  latitude,
  longitude
}) => {
  return (
    <div className="flight-info">
      <table>
        <thead>
          <tr>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{latitude}</td>
            <td>{longitude}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
