import React from 'react';
import './Forecast.scss';

const weather = [
  {
    day: 'wed',
    min: '9',
    max: '4',
  },
  {
    day: 'thu',
    min: '7',
    max: '3',
  },
  {
    day: 'fri',
    min: '6',
    max: '2',
  },
  {
    day: 'sat',
    min: '4',
    max: '1',
  },
  {
    day: 'sun',
    min: '8',
    max: '3',
  },
];

const Forecast = () => (
  <ul className="forecast">
    {weather.map(({ day, min, max }) => (
      <li className="forecast__item" key={day}>
        <div className="forecast__day">{day}</div>
        <div className="forecast__temp-wrapper">
          <span className="forecast__temp forecast__temp-min">{min}</span>
          <span className="forecast__temp forecast__temp-max">{max}</span>
        </div>
      </li>
    ))}
  </ul>
);

export default Forecast;
