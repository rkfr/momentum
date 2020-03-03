import {
  getLocation,
  loadCurrentWeatherByCoords,
  loadCurrentWeather,
  loadForecast,
} from '../../api';

export const ACTION_TYPES = {
  SET_CURRENT_WEATHER: 'SET_CURRENT_WEATHER',
  SET_LOCATION: 'SET_LOCATION',
  START_LOADING: 'START_LOADING',
  FINISH_LOADING: 'FINISH_LOADING',
  SET_LOADING_ERROR: 'SET_LOADING_ERROR',
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

export const setLoadingError = () => ({
  type: ACTION_TYPES.SET_LOADING_ERROR,
});

export const loadWeather = (location) => (dispatch) => {
  dispatch(startLoading());

  if (location) {
    return Promise.all([loadCurrentWeather(location), loadForecast(location)])
      .then(([weatherData, forecastData]) => {
        dispatch(setCurrentWeather(weatherData));
        dispatch(finishLoading());

        // console.log(weatherData, forecastData);
      })
      .catch(() => {
        dispatch(finishLoading());
        dispatch(setLoadingError());
      });


    // return loadCurrentWeather(location)
    //   .then((weatherData) => {
    //     dispatch(setCurrentWeather(weatherData));
    //     dispatch(finishLoading());
    //   })
    //   .catch(() => {
    //     dispatch(finishLoading());
    //     dispatch(setLoadingError());
    //   });
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
