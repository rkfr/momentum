export const ACTION_TYPES = {
  CLEAR_LIST: 'CLEAR_LIST',
  ADD_TODO: 'ADD_TODO',
  DELETE_ITEM: 'DELETE_ITEM',
  TOGGLE_COMPLETED: 'TOGGLE_COMPLETED',
};

export const clearList = () => ({
  type: ACTION_TYPES.CLEAR_LIST,
});

export const addTodo = (itemData) => ({
  type: ACTION_TYPES.ADD_TODO,
  payload: itemData,
});

export const deleteItem = (id) => ({
  type: ACTION_TYPES.DELETE_ITEM,
  payload: id,
});

export const toggleCompleted = (id) => ({
  type: ACTION_TYPES.TOGGLE_COMPLETED,
  payload: id,
});
