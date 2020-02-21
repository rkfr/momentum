import { connect } from 'react-redux';
import Links from './Links';
import { getIsEditable } from '../../store/links';

const mapStateToProps = (state) => ({
  isEditable: getIsEditable(state),
});

export default connect(mapStateToProps)(Links);
