import { ACTION_TYPES } from './actions';

const initialState = {
  isLoading: false,
  weather: {},
  location: null,
  error: null,
  forecast: [],
};

export const weatherApp = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.START_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ACTION_TYPES.FINISH_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case ACTION_TYPES.SET_CURRENT_WEATHER: {
      const { payload: weather } = action;

      return {
        ...state,
        weather,
        location: weather.name,
        error: false,
      };
    }

    case ACTION_TYPES.SET_LOCATION: {
      const { payload: location } = action;

      return {
        ...state,
        location,
        error: false,
      };
    }

    case ACTION_TYPES.SET_LOADING_ERROR: {
      return {
        ...state,
        error: true,
      };
    }

    case ACTION_TYPES.SET_FORECAST: {
      const { payload: forecast } = action;

      return {
        ...state,
        forecast,
      };
    }

    default: {
      return state;
    }
  }
};
