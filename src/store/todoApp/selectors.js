export const getTodos = (state) => state.todoApp.todos;

export const getListFillStatus = (state) => !!state.todoApp.todos.length;
