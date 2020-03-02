import { ACTION_TYPES } from './actions';

const initialState = {
  isLoading: false,
  weather: {},
  location: null,
  error: null,
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
      };
    }

    case ACTION_TYPES.SET_LOCATION: {
      const { payload: location } = action;

      return {
        ...state,
        location,
      };
    }

    default: {
      return state;
    }
  }
};
