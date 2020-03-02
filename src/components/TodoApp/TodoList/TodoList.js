import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.scss';
import TodoItem from '../TodoItem';


const TodoList = ({
  items,
  deleteItem,
  toggleCompleted,
  startEditing,
  saveEdited,
}) => (
  <ul className="todo-list">
    {items.map(({
      id, text, completed, editing,
    }) => (
      <TodoItem
        id={id}
        key={id}
        text={text}
        completed={completed}
        editing={editing}
        deleteItem={deleteItem}
        toggleCompleted={toggleCompleted}
        startEditing={startEditing}
        saveEdited={saveEdited}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
  startEditing: PropTypes.func.isRequired,
  saveEdited: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    editing: PropTypes.bool.isRequired,
  })),
};

TodoList.defaultProps = {
  items: [],
};

export default TodoList;
