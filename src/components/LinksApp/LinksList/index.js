import { connect } from 'react-redux';
import LinksList from './LinksList';
import {
  getLinks,
  startEditing,
  deleteLink,
  setAllEditingToFalse,
  saveModifiedList,
} from '../../../store/linksApp';

const mapStateToProps = (state) => ({
  links: getLinks(state),
});

const mapDispatchToProps = (dispatch) => ({
  startEditing: (id) => () => dispatch(startEditing(id)),
  deleteLink: (id) => () => dispatch(deleteLink(id)),
  cancelEditing: () => dispatch(setAllEditingToFalse()),
  saveModifiedList: (id) => ({ name, url }) => () => {
    dispatch(saveModifiedList({ id, name, url }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LinksList);
