/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState } from 'react';
import './Weather.scss';

import DropdownWindow from '../DropdownWindow';
import Forecast from '../Forecast';

const Weather = () => {
  const [weatherVisibility, setVisibility] = useState(false);

  const toggleVisibility = () => (
    setVisibility((prevVisibility) => !prevVisibility)
  );

  return (
    <div className="weather">
      <div
        role="button"
        onClick={toggleVisibility}
        className="weather__metric metric"
      >
        <p className="metric__number">4</p>
        <h3 className="metric__label">Pushcha-Voditsa</h3>
      </div>

      <DropdownWindow
        arrow="top-right"
        isActive={weatherVisibility}
        className="weather__dropdown"
      >
        <div className="weather__overview">
          <h3 className="weather__location-name">
            Pushcha-Voditsa
          </h3>
          <p className="weather__weather-description">
            Clear sky
          </p>
          <p className="weather__degree">
            5
          </p>
        </div>
        <Forecast />
      </DropdownWindow>
    </div>
  );
};

export default Weather;
