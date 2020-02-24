import { connect } from 'react-redux';
import LinksList from './LinksList';
import {
  getLinksItems,
  startCreating,
  startEditing,
  setEditingId,
  deleteItem,
} from '../../../store/links';

const mapStateToProps = (state) => ({
  links: getLinksItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  startCreating: () => dispatch(startCreating()),
  startEditing: (id) => () => {
    dispatch(setEditingId(id));
    dispatch(startEditing());
  },
  deleteItem: (id) => () => dispatch(deleteItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LinksList);
