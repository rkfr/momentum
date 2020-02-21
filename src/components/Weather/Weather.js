/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState } from 'react';
import './Weather.scss';

import DropdownWindow from '../DropdownWindow';
import SettingsDropdown from '../SettingsDropdown';
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
        className="weather-dropdown"
      >
        <div className="weather__overview">
          <div className="weather__info">
            <h3 className="weather__location-name">
              Pushcha-Voditsa
            </h3>
            <h4 className="weather__currant-day">
              Friday
            </h4>
            <SettingsDropdown
              className="weather__settings"
              dropdownClassName="weather__settings-window"
            >
              <button
                type="button"
                className="weather__edit-location-btn"
              >
                Edit location
              </button>
            </SettingsDropdown>
            {/* <div className="change-location">
              <input
                value="Pushcha-Voditsa"
                placeholder="Location"
                type="text"
                className="change-location__input"
                onChange={() => {}}
              />
              <input
                type="image"
                src="./images/close.svg"
                alt="close button"
                className="change-location__cancel-btn"
              />
            </div> */}
          </div>

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
