export const ACTION_TYPES = {
  ADD_NEW_LINK: 'ADD_NEW_LINK',
  START_EDITING: 'START_EDITING',
  DELETE_LINK: 'DELETE_LINK',
  SET_ALL_EDITING_TO_FALSE: 'SET_ALL_EDITING_TO_FALSE',
  SAVE_MODIFIED_LIST: 'SAVE_MODIFIED_LIST',
};

export const addNewLink = (linkData) => ({
  type: ACTION_TYPES.ADD_NEW_LINK,
  payload: linkData,
});

export const startEditing = (id) => ({
  type: ACTION_TYPES.START_EDITING,
  payload: id,
});

export const deleteLink = (id) => ({
  type: ACTION_TYPES.DELETE_LINK,
  payload: id,
});

export const setAllEditingToFalse = () => ({
  type: ACTION_TYPES.SET_ALL_EDITING_TO_FALSE,
});

export const saveModifiedList = (linkData) => ({
  type: ACTION_TYPES.SAVE_MODIFIED_LIST,
  payload: linkData,
});
