import React from 'react';
import PropTypes from 'prop-types';
import './Forecast.scss';

const Forecast = ({ forecast }) => (
  <ul className="forecast">
    {forecast.map(({ day, min, max }) => (
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

Forecast.propTypes = {
  forecast: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
  })),
};

Forecast.defaultProps = {
  forecast: [],
};

export default Forecast;
