/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TodoItem.scss';
import SettingsDropdown from '../../SettingsDropdown';

const TodoItem = ({
  deleteItem,
  toggleCompleted,
  startEditing,
  saveEdited,
  id,
  text,
  completed,
  editing,
}) => {
  const [itemText, setItemText] = useState(text);
  const onTextChange = ({ target: { value } }) => {
    setItemText(value);
  };

  const completeEditing = (e) => {
    e.preventDefault();

    saveEdited({ id, text: itemText });
  };

  return (
    <li className="todo-item">

      <input
        type="checkbox"
        className="todo-item__checkbox"
        checked={completed}
        onChange={toggleCompleted(id)}
      />
      {editing ? (
        <form onSubmit={completeEditing}>
          <input
            type="text"
            value={itemText}
            className="todo-item__edit-input"
            onChange={onTextChange}
            autoFocus
          />
        </form>
      ) : (
        <>
          <span
            className={`todo-item__text ${completed && 'todo-item__text--completed'}`}
          >
            {text}
          </span>
          <SettingsDropdown
            className="todo-item__item-settings"
          >
            <div className="edit-buttons">
              <button
                type="button"
                className="edit-buttons__button"
                onClick={startEditing(id)}
              >
                Edit
              </button>
              <button
                type="button"
                className="edit-buttons__button"
                onClick={deleteItem(id)}
              >
                Delete
              </button>
            </div>
          </SettingsDropdown>
        </>
      )}

    </li>
  );
};

TodoItem.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
  startEditing: PropTypes.func.isRequired,
  saveEdited: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  editing: PropTypes.bool.isRequired,
};

export default TodoItem;
