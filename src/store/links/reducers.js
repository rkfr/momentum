import { ACTION_TYPES } from './actions';

const initialState = {
  isCreating: false,
  isEditing: false,
  items: [],
  editingId: null,
};

const links = (state = initialState, action) => {
  switch (action.type) {
    // creating
    case ACTION_TYPES.START_CREATING: {
      return {
        ...state,
        isEditing: false,
        isCreating: true,
      };
    }

    case ACTION_TYPES.FINISH_CREATING: {
      return { ...state, isCreating: false };
    }

    case ACTION_TYPES.CREATE_ITEM: {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }

    // editing
    case ACTION_TYPES.START_EDITING: {
      return {
        ...state,
        isCreating: false,
        isEditing: true,
      };
    }

    case ACTION_TYPES.FINISH_EDITING: {
      return { ...state, isEditing: false };
    }

    case ACTION_TYPES.SET_EDITING_ID: {
      return { ...state, editingId: action.payload };
    }

    case ACTION_TYPES.SAVE_EDITED_ITEM: {
      const { editingId, items } = state;
      const { payload } = action;

      return {
        ...state,
        editingId: null,
        items: items.map((item) => ((item.id === editingId) ? {
          ...item,
          name: payload.name,
          url: payload.url,
        } : item)),
      };
    }

    case ACTION_TYPES.DELETE_ITEM: {
      const { items } = state;
      const { payload: itemId } = action;

      return {
        ...state,
        items: items.filter(({ id }) => id !== itemId),
      };
    }

    default: {
      return state;
    }
  }
};

export default links;
