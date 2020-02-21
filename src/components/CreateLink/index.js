import { connect } from 'react-redux';
import CreateLink from './CreateLink';
import {
  setNewItemName,
  setNewItemUrl,
  getNewItemName,
  getNewItemUrl,
  closeEditing,
  addItem,
} from '../../store/links';

const mapStateToProps = (state) => ({
  name: getNewItemName(state),
  url: getNewItemUrl(state),
});

const mapDispatchToProps = (dispatch) => ({
  setName: ({ target: { value } }) => dispatch(setNewItemName(value)),
  setUrl: ({ target: { value } }) => dispatch(setNewItemUrl(value)),
  back: () => dispatch(closeEditing()),
  add: () => {
    dispatch(addItem());
    dispatch(closeEditing());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateLink);
