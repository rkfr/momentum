import {
  getLocation,
  loadCurrentWeatherByCoords,
  loadForecastByCoords,
  loadCurrentWeather,
  loadForecast,
} from '../../api';

export const ACTION_TYPES = {
  SET_CURRENT_WEATHER: 'SET_CURRENT_WEATHER',
  SET_LOCATION: 'SET_LOCATION',
  START_LOADING: 'START_LOADING',
  FINISH_LOADING: 'FINISH_LOADING',
  SET_LOADING_ERROR: 'SET_LOADING_ERROR',
  SET_FORECAST: 'SET_FORECAST',
};

export const setLocation = (query) => ({
  type: ACTION_TYPES.SET_LOCATION,
  payload: query,
});

const setCurrentWeather = (weather) => ({
  type: ACTION_TYPES.SET_CURRENT_WEATHER,
  payload: weather,
});

const setForecast = (forecast) => ({
  type: ACTION_TYPES.SET_FORECAST,
  payload: forecast,
});

const startLoading = () => ({
  type: ACTION_TYPES.START_LOADING,
});

const finishLoading = () => ({
  type: ACTION_TYPES.FINISH_LOADING,
});

const setLoadingError = () => ({
  type: ACTION_TYPES.SET_LOADING_ERROR,
});

export const loadWeather = (location) => (dispatch) => {
  dispatch(startLoading());

  if (location) {
    return Promise.all([loadCurrentWeather(location), loadForecast(location)])
      .then(([weatherData, forecastData]) => {
        dispatch(setCurrentWeather(weatherData));
        dispatch(setForecast(forecastData));
        dispatch(finishLoading());
      })
      .catch(() => {
        dispatch(finishLoading());
        dispatch(setLoadingError());
      });
  }

  return getLocation()
    .then((geolocation) => {
      const { latitude, longitude } = geolocation;

      return Promise.all([
        loadCurrentWeatherByCoords(latitude, longitude),
        loadForecastByCoords(latitude, longitude),
      ]);
    })
    .then(([weatherData, forecastData]) => {
      dispatch(setCurrentWeather(weatherData));
      dispatch(setForecast(forecastData));
      dispatch(finishLoading());
    })
    .catch(() => {
      Promise.all([loadCurrentWeather(), loadForecast()])
        .then(([weatherData, forecastData]) => {
          dispatch(setCurrentWeather(weatherData));
          dispatch(setForecast(forecastData));
          dispatch(finishLoading());
        });
    });
};
