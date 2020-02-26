import { connect } from 'react-redux';
import TodoList from './TodoList';
import {
  getTodos,
  deleteItem,
  toggleCompleted,
} from '../../../store/todoApp';

const mapStateToProps = (state) => ({
  items: getTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (id) => () => dispatch(deleteItem(id)),
  toggleCompleted: (id) => () => dispatch(toggleCompleted(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
