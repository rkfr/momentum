import { connect } from 'react-redux';
import LinkSettingsWithEditing from './LinkSettingsWithEditing';
import {
  finishEditing,
  saveEditedItem,
} from '../../../store/links';

// const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  finishEditing: () => dispatch(finishEditing()),
  saveEditedItem: (data) => () => {
    dispatch(saveEditedItem(data));
    dispatch(finishEditing());
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(LinkSettingsWithEditing);
