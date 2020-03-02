import { connect } from 'react-redux';
import Weather from './Weather';
import {
  getCurrentWeather,
  getSelectedLocation,
  setLocation,
  loadWeather,
  getLoadingStatus,
} from '../../../store/weatherApp';

const mapStateToProps = (state) => ({
  weather: getCurrentWeather(state),
  location: getSelectedLocation(state),
  isLoading: getLoadingStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  setLocation: ({ target: { value } }) => dispatch(setLocation(value)),
  loadWeather: (location) => dispatch(loadWeather(location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
