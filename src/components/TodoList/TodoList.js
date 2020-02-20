/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import './TodoList.scss';

import SettingsDropdown from '../SettingsDropdown';

const items = [
  {
    id: 0,
    edited: true,
    completed: false,
    text: 'first task',
  },
  {
    id: 1,
    edited: false,
    completed: true,
    text: 'second task',
  },
  {
    id: 2,
    edited: false,
    completed: false,
    text: 'third task',
  },
];

const TodoList = () => (
  <ul className="todo-list">
    {items.map(({
      id, text, completed, edited,
    }) => (
      <li
        className="todo-list__item"
        key={id}
      >

        <input
          type="checkbox"
          className="todo-list__checkbox"
          checked={completed}
          defaultChecked
        />
        {edited ? (
          <input
            type="text"
            value="text"
            className="todo-list__edit-input"
            onChange={() => {}}
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
              containerClassName="todo-list__item-settings"
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

export default TodoList;
