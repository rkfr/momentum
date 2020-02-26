import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Todo.scss';

import DropdownWindow from '../../DropdownWindow';
import SettingsDropdown from '../../SettingsDropdown';
import TodoList from '../TodoList';
import ToggleButton from '../../ToggleButton';

const Todo = ({
  addTodo,
  clearList,
  showList,
}) => {
  const [todoVisibility, setVisibility] = useState(false);

  const toggleVisibility = () => (
    setVisibility((prevVisibility) => !prevVisibility)
  );

  const [todosVisibility, setTodosVisibility] = useState(showList);
  const showTodos = () => {
    setTodosVisibility(true);
  };

  useEffect(() => {
    if (!showList) {
      setTodosVisibility(false);
    }
  }, [showList]);

  const [todoText, setTodoText] = useState('');
  const onTextChange = ({ target: { value } }) => {
    setTodoText(value);
  };

  const onAddTodo = (e) => {
    e.preventDefault();

    addTodo(todoText);
    setTodoText('');
  };

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
                onClick={clearList}
              >
                Clear
              </button>
            </SettingsDropdown>
          </header>

          {!todosVisibility ? (
            <main className="todo-app__main">
              <h2 className="todo-app__title-empty">
                Add a todo to get started
              </h2>
              <button
                type="button"
                className="todo-app__button-empty"
                onClick={showTodos}
              >
                New Todo
              </button>
            </main>
          ) : (
            <TodoList />
          )}

          <footer className="todo-app__footer">
            {todosVisibility && (

            <form onSubmit={onAddTodo}>
              <input
                className="todo-app__input-empty"
                type="text"
                value={todoText}
                placeholder="New Todo"
                onChange={onTextChange}
              />
            </form>
            )}
          </footer>

        </div>
      </DropdownWindow>
    </div>
  );
};

Todo.propTypes = {
  addTodo: PropTypes.func.isRequired,
  clearList: PropTypes.func.isRequired,
  showList: PropTypes.bool.isRequired,
};

export default Todo;
