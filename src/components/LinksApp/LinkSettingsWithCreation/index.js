import { connect } from 'react-redux';
import LinkSettingsWithCreation from './LinkSettingsWithCreation';
import {
  createItem,
  finishCreating,
} from '../../../store/links';

const mapDispatchToProps = (dispatch) => ({
  createItem: (data) => () => {
    dispatch(createItem(data));
    dispatch(finishCreating());
  },
  finishCreating: () => dispatch(finishCreating()),
});

export default connect(
  null,
  mapDispatchToProps,
)(LinkSettingsWithCreation);
