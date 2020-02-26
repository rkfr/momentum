/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.scss';

import SettingsDropdown from '../../SettingsDropdown';

const TodoList = ({
  items,
  deleteItem,
  toggleCompleted,
}) => (
  <ul className="todo-list">
    {items.map(({
      id, text, completed, editing,
    }) => (
      <li
        className="todo-list__item"
        key={id}
      >

        <input
          type="checkbox"
          className="todo-list__checkbox"
          checked={completed}
          onChange={toggleCompleted(id)}
        />
        {editing ? (
          <input
            type="text"
            value="text"
            className="todo-list__edit-input"
            autoFocus
          />
        ) : (
          <>
            <span
              className={`todo-list__text ${completed && 'todo-list__text--completed'}`}
            >
              {text}
            </span>
            <SettingsDropdown
              className="todo-list__item-settings"
            >
              <div className="edit-buttons">
                <button
                  type="button"
                  className="edit-buttons__button"
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
    ))}
  </ul>
);

TodoList.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    completed: PropTypes.bool,
    editing: PropTypes.editing,
  })),
};

TodoList.defaultProps = {
  items: [],
};

export default TodoList;
