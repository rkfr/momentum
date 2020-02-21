import { ACTION_TYPES } from './actions';

const initialState = {
  name: '',
  url: '',
  list: [],
  isEditable: false,
};

const links = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_EDITABLE: {
      return {
        ...state,
        isEditable: true,
      };
    }

    case ACTION_TYPES.SET_NEW_ITEM_NAME: {
      return {
        ...state,
        name: action.payload,
      };
    }

    case ACTION_TYPES.SET_NEW_ITEM_URL: {
      return {
        ...state,
        url: action.payload,
      };
    }

    case ACTION_TYPES.CLOSE_EDITING: {
      return {
        ...state,
        isEditable: false,
      };
    }

    case ACTION_TYPES.ADD_ITEM: {
      const {
        name,
        url,
      } = state;

      const item = {
        id: `#${name}#${Date.now()}`,
        name,
        link: `https://${url}/`,
        edited: false,
      };

      return {
        ...state,
        list: [
          ...state.list,
          item,
        ],
      };
    }

    default: {
      return state;
    }
  }
};

export default links;
