import { ACTION_TYPES } from './actions';

const initialState = {
  linksList: [],
};

export const linksApp = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_NEW_LINK: {
      const { linksList } = state;
      const { payload: item } = action;

      return { ...state, linksList: [...linksList, item] };
    }

    case ACTION_TYPES.START_EDITING: {
      const { payload: id } = action;
      const { linksList } = state;

      return {
        ...state,
        linksList: linksList.map((link) => (link.id !== id ? link : {
          ...link,
          editing: true,
        })),
      };
    }

    case ACTION_TYPES.DELETE_LINK: {
      const { payload: id } = action;
      const { linksList } = state;

      return {
        ...state,
        linksList: linksList.filter((link) => link.id !== id),
      };
    }

    case ACTION_TYPES.SET_ALL_EDITING_TO_FALSE: {
      const { linksList } = state;

      return {
        ...state,
        linksList: linksList.map((link) => ({ ...link, editing: false })),
      };
    }

    case ACTION_TYPES.SAVE_MODIFIED_LIST: {
      const { payload: { id, name, url } } = action;
      const { linksList } = state;

      return {
        ...state,
        linksList: linksList.map((link) => (link.id !== id ? link : {
          ...link,
          name,
          url,
          editing: false,
        })),
      };
    }

    default: {
      return state;
    }
  }
};
