/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Weather.scss';

import Loader from '../../Loader';
import DropdownWindow from '../../DropdownWindow';
import SettingsDropdown from '../../SettingsDropdown';
import Forecast from '../Forecast';

const Weather = ({
  weather,
  location,
  setLocation,
  loadWeather,
  isLoading,
}) => {
  const [weatherVisibility, setVisibility] = useState(false);

  const toggleVisibility = () => (
    setVisibility((prevVisibility) => !prevVisibility)
  );

  useEffect(() => {
    loadWeather();
  }, []);

  const loadNewWeather = (e) => {
    e.preventDefault();

    loadWeather(location);
  };

  const [isEditing, toggleEditing] = useState(false);

  const editLocation = () => {
    toggleEditing(true);
  };

  const closeEditing = (e) => {
    e.preventDefault();
    toggleEditing(false);
  };

  return (
    <div className="weather">
      <div
        role="button"
        onClick={toggleVisibility}
        className="weather__metric metric"
      >
        <p className="metric__number">{weather.temp}</p>
        <h3 className="metric__label">{weather.name}</h3>
      </div>

      <DropdownWindow
        arrow="top-right"
        isActive={weatherVisibility}
        className="weather-dropdown"
      >
        {isLoading ? (
          <Loader className="weather__dropdown-loader" />
        ) : (
          <>
            <div className="weather__overview">
              <div className="weather__info">
                {!isEditing ? (
                  <>
                    <h3 className="weather__location-name">
                      {`${weather.name}, ${weather.country}`}
                    </h3>
                    <h4 className="weather__currant-day">
                      {weather.day}
                    </h4>
                    <SettingsDropdown
                      className="weather__settings"
                      dropdownClassName="weather__settings-window"
                    >
                      <button
                        type="button"
                        className="weather__edit-location-btn"
                        onClick={editLocation}
                      >
                        Edit location
                      </button>
                    </SettingsDropdown>
                  </>
                ) : (
                  <>
                    <div className="change-location">
                      <form
                        className="change-location__form"
                        onSubmit={loadNewWeather}
                      >
                        <input
                          value={location}
                          placeholder="Location"
                          type="text"
                          className="change-location__input"
                          onChange={setLocation}
                        />
                      </form>

                      <input
                        type="image"
                        src="./images/close.svg"
                        alt="close button"
                        className="change-location__cancel-btn"
                        onClick={closeEditing}
                      />
                    </div>
                  </>
                )}


              </div>

              <p className="weather__weather-description">
                {weather.description}
              </p>
              <p className="weather__degree">
                {weather.temp}
              </p>
            </div>
            <Forecast />
          </>
        )}
      </DropdownWindow>
    </div>
  );
};

Weather.propTypes = {
  setLocation: PropTypes.func.isRequired,
  loadWeather: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  weather: PropTypes.shape({
    name: PropTypes.string,
    country: PropTypes.string,
    description: PropTypes.string,
    day: PropTypes.string,
    temp: PropTypes.number,
  }),
  location: PropTypes.string,
};

Weather.defaultProps = {
  weather: {},
  location: '',
};

export default Weather;
