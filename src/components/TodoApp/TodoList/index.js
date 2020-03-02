import { connect } from 'react-redux';
import TodoList from './TodoList';
import {
  getTodos,
  deleteItem,
  toggleCompleted,
  startEditing,
  saveEdited,
} from '../../../store/todoApp';

const mapStateToProps = (state) => ({
  items: getTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (id) => () => dispatch(deleteItem(id)),
  toggleCompleted: (id) => () => dispatch(toggleCompleted(id)),
  startEditing: (id) => () => dispatch(startEditing(id)),
  saveEdited: (itemData) => dispatch(saveEdited(itemData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
