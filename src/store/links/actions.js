export const ACTION_TYPES = {
  START_CREATING: 'START_CREATING',
  FINISH_CREATING: 'FINISH_CREATING',
  CREATE_ITEM: 'CREATE_ITEM',

  START_EDITING: 'START_EDITING',
  FINISH_EDITING: 'FINISH_EDITING',
  SET_EDITING_ID: 'SET_EDITING_ID',
  SAVE_EDITED_ITEM: 'SAVE_EDITED_ITEM',

  DELETE_ITEM: 'DELETE_ITEM',
};

export const startCreating = () => ({ type: ACTION_TYPES.START_CREATING });

export const finishCreating = () => ({ type: ACTION_TYPES.FINISH_CREATING });

export const createItem = (payload) => ({
  type: ACTION_TYPES.CREATE_ITEM,
  payload,
});


export const startEditing = () => ({ type: ACTION_TYPES.START_EDITING });

export const finishEditing = () => ({ type: ACTION_TYPES.FINISH_EDITING });

export const setEditingId = (payload) => ({
  type: ACTION_TYPES.SET_EDITING_ID,
  payload,
});

export const saveEditedItem = (payload) => ({
  type: ACTION_TYPES.SAVE_EDITED_ITEM,
  payload,
});

export const deleteItem = (payload) => ({
  type: ACTION_TYPES.DELETE_ITEM,
  payload,
});
