
import { connect } from 'react-redux';
import Links from './Links';
import { addNewLink } from '../../../store/linksApp';

const mapDispatchToProps = (dispatch) => ({
  addLink: (linkData) => {
    const { name, url } = linkData;

    dispatch(addNewLink({
      name,
      url: `https://${url}`,
      id: `#${Date.now()}.${name}`,
      editing: false,
    }));
  },
});

export default connect(null, mapDispatchToProps)(Links);
