export const ACTION_TYPES = {
  SET_EDITABLE: 'SET_EDITABLE',
  SET_NEW_ITEM_NAME: 'SET_NEW_ITEM_NAME',
  SET_NEW_ITEM_URL: 'SET_NEW_ITEM_URL',
  ADD_ITEM: 'ADD_ITEM',
  CLOSE_EDITING: 'CLOSE_EDITING',
};

export const setEditable = () => ({
  type: ACTION_TYPES.SET_EDITABLE,
});

export const setNewItemName = (name) => ({
  type: ACTION_TYPES.SET_NEW_ITEM_NAME,
  payload: name,
});

export const setNewItemUrl = (url) => ({
  type: ACTION_TYPES.SET_NEW_ITEM_URL,
  payload: url,
});

export const addItem = () => ({
  type: ACTION_TYPES.ADD_ITEM,
});

export const closeEditing = () => ({
  type: ACTION_TYPES.CLOSE_EDITING,
});
