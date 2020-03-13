import { connect } from 'react-redux';
import Name from './Name';

import { setLogin, getLoginStatus } from '../../store/login';

const mapStateToProps = (state) => ({
  isLogged: getLoginStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  setLogin: () => dispatch(setLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Name);
