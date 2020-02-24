import { connect } from 'react-redux';
import Links from './Links';
import {
  getCreatingState,
  getEditingState,
} from '../../../store/links';

const mapStateToProps = (state) => ({
  isCreating: getCreatingState(state),
  isEditing: getEditingState(state),
});

export default connect(mapStateToProps)(Links);
