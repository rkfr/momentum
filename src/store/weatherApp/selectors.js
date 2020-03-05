import { createSelector } from 'reselect';
import { getDateFromUnixMs } from '../../api';

export const getCurrentWeather = (state) => state.weatherApp.weather;

export const getSelectedLocation = (state) => state.weatherApp.location;

export const getLoadingStatus = (state) => state.weatherApp.isLoading;

export const getErrorStatus = (state) => state.weatherApp.error;

const getForecast = (state) => state.weatherApp.forecast;

export const getFormattedForecast = createSelector(
  getForecast,
  (forecast) => {
    const formatted = [];
    let swp = [];

    forecast.forEach((item) => {
      if (!swp.length) {
        swp.push(item);
      }

      if (item.date === swp[0].date) {
        swp.push(item);
      } else {
        formatted.push(swp);
        swp = [];
      }
    });

    const withMinMax = formatted.map((weatherList) => {
      const minMaxTemp = weatherList.reduce((avgTemp, item) => {
        const avg = {
          tempMin: item.tempMin < avgTemp.tempMin ? item.tempMin : avgTemp.tempMin,
          tempMax: item.tempMax > avgTemp.tempMax ? item.tempMax : avgTemp.tempMax,
        };

        return avg;
      }, {
        tempMin: weatherList[0].tempMin,
        tempMax: weatherList[0].tempMax,
      });

      return {
        day: getDateFromUnixMs(weatherList[0].dt),
        min: Math.floor(minMaxTemp.tempMin),
        max: Math.ceil(minMaxTemp.tempMax),
      };
    });

    return withMinMax;
  },
);
