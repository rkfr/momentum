import { connect } from 'react-redux';
import Forecast from './Forecast';
import { getFormattedForecast } from '../../../store/weatherApp';

const mapStateToProps = (state) => ({
  forecast: getFormattedForecast(state),
});

export default connect(mapStateToProps)(Forecast);
