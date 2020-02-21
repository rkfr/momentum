import React, { useState } from 'react';
import './TodoApp.scss';

import DropdownWindow from '../DropdownWindow';
import SettingsDropdown from '../SettingsDropdown';
import TodoList from '../TodoList';
import ToggleButton from '../ToggleButton';

const Todo = () => {
  const [todoVisibility, setVisibility] = useState(false);

  const toggleVisibility = () => (
    setVisibility((prevVisibility) => !prevVisibility)
  );

  return (
    <div className="todo">
      <ToggleButton onClick={toggleVisibility}>
        Todo
      </ToggleButton>

      <DropdownWindow
        arrow="bottom-right"
        isActive={todoVisibility}
        className="todo-dropdown"
      >
        <div className="todo-app">
          <header className="todo-app__header">
            <h2 className="todo-app__title">Todos</h2>
            <SettingsDropdown>
              <button
                type="button"
                className="todo-app__clear-button"
              >
                Clear
              </button>
            </SettingsDropdown>
          </header>
          {/* <main className="todo-app__main">
            <h2 className="todo-app__title-empty">
              Add a todo to get started
            </h2>
            <button type="button" className="todo-app__button-empty">
              New Todo
            </button>
          </main> */}
          <TodoList />

          <footer className="todo-app__footer">
            <input
              className="todo-app__input-empty"
              type="text"
              placeholder="New Todo"
              onChange={() => {}}
            />
          </footer>
        </div>
      </DropdownWindow>
    </div>
  );
};

export default Todo;
