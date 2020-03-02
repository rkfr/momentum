import { ACTION_TYPES } from './actions';

const initialState = {
  todos: [],
};

export const todoApp = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CLEAR_LIST: {
      return {
        ...state,
        todos: [],
      };
    }

    case ACTION_TYPES.ADD_TODO: {
      const { todos } = state;
      const { payload: todoItem } = action;

      return {
        ...state,
        todos: [...todos, todoItem],
      };
    }

    case ACTION_TYPES.DELETE_ITEM: {
      const { todos } = state;
      const { payload: itemId } = action;

      return {
        ...state,
        todos: todos.filter(({ id }) => id !== itemId),
      };
    }

    case ACTION_TYPES.TOGGLE_COMPLETED: {
      const { todos } = state;
      const { payload: itemId } = action;

      return {
        ...state,
        todos: todos.map((item) => (item.id !== itemId ? item : {
          ...item,
          completed: !item.completed,
        })),
      };
    }

    case ACTION_TYPES.START_EDITING: {
      const { todos } = state;
      const { payload: itemId } = action;

      return {
        ...state,
        todos: todos.map((item) => (item.id !== itemId ? item : {
          ...item,
          editing: true,
        })),
      };
    }

    case ACTION_TYPES.SAVE_EDITED: {
      const { todos } = state;
      const { payload: { id: itemId, text } } = action;

      return {
        ...state,
        todos: todos.map((item) => (item.id !== itemId ? item : {
          ...item,
          text,
          editing: false,
        })),
      };
    }

    default: {
      return state;
    }
  }
};
