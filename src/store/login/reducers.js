import { ACTION_TYPES } from './actions';

export const login = (state = false, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_LOGIN: {
      return true;
    }

    default: {
      return state;
    }
  }
};
