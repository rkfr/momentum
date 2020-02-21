import { connect } from 'react-redux';
import LinksList from './LinksList';
import { getList, setEditable } from '../../store/links';

const mapStateToProps = (state) => ({
  links: getList(state),
});

const mapDispatchToProps = (dispatch) => ({
  createItem: () => dispatch(setEditable()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LinksList);
