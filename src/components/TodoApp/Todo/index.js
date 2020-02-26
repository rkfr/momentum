import { connect } from 'react-redux';
import Todo from './Todo';
import {
  addTodo,
  clearList,
  getListFillStatus,
} from '../../../store/todoApp';

const mapStateToProps = (state) => ({
  showList: getListFillStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodo({
    id: `#${text}:${Date.now()}`,
    text,
    completed: false,
    editing: false,
  })),

  clearList: () => dispatch(clearList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
