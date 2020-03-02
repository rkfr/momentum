import {
  getLocation,
  loadCurrentWeatherByCoords,
  loadCurrentWeather,
} from '../../api';

export const ACTION_TYPES = {
  SET_CURRENT_WEATHER: 'SET_CURRENT_WEATHER',
  SET_LOCATION: 'SET_LOCATION',
  START_LOADING: 'START_LOADING',
  FINISH_LOADING: 'FINISH_LOADING',
};

export const setCurrentWeather = (weather) => ({
  type: ACTION_TYPES.SET_CURRENT_WEATHER,
  payload: weather,
});

export const setLocation = (query) => ({
  type: ACTION_TYPES.SET_LOCATION,
  payload: query,
});

export const startLoading = () => ({
  type: ACTION_TYPES.START_LOADING,
});

export const finishLoading = () => ({
  type: ACTION_TYPES.FINISH_LOADING,
});


export const loadWeather = (location) => (dispatch) => {
  dispatch(startLoading());

  if (location) {
    return loadCurrentWeather(location)
      .then((weatherData) => {
        dispatch(setCurrentWeather(weatherData));
        dispatch(finishLoading());
      })
      .catch(() => {
        console.error('error: location not found');
        dispatch(finishLoading());
      });
  }

  return getLocation()
    .then((geolocation) => {
      const { latitude, longitude } = geolocation;

      return loadCurrentWeatherByCoords(latitude, longitude);
    })
    .then((weatherData) => {
      dispatch(setCurrentWeather(weatherData));
      dispatch(finishLoading());
    })
    .catch(() => {
      loadCurrentWeather()
        .then((weatherData) => {
          dispatch(setCurrentWeather(weatherData));
          dispatch(finishLoading());
        });
    });
};
