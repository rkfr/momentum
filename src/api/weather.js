/* eslint-disable camelcase */
const API_KEY = '158d21ae5337a203dfccb519d821591d';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const getDateFromUnixMs = (ms) => {
  const date = String(new Date(ms * 1000)).split(' ');
  const [dayOfWeek] = date;
  return dayOfWeek;
};

export const kelvinToCelsius = (k) => (k ? (k - 273.15) : 0);

const getCurrentDayName = () => days[new Date().getDay()];

const formatWeatherResponse = (responseData) => {
  const {
    name,
    weather,
    sys: { country },
    main: { temp },
  } = responseData;
  const { description } = weather[0];

  return {
    name,
    country,
    description,
    temp: Math.ceil(kelvinToCelsius(temp)),
    day: getCurrentDayName(),
  };
};

const formatForecastResponse = ({ list = [] }) => list.map(({
  dt, dt_txt, main: { temp_min, temp_max },
}) => ({
  dt,
  date: dt_txt.split(' ')[0],
  tempMin: kelvinToCelsius(temp_min),
  tempMax: kelvinToCelsius(temp_max),
}));

export const getLocation = () => new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(resolve, reject);
})
  .then(({ coords }) => coords);

export const loadCurrentWeather = (location = 'london') => (
  fetch(`${BASE_URL}/weather?q=${location}&appid=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => formatWeatherResponse(data))
);

export const loadCurrentWeatherByCoords = (lat, lon) => (
  fetch(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => formatWeatherResponse(data))
);

export const loadForecast = (location = 'london') => fetch(`${BASE_URL}/forecast?q=${location}&appid=${API_KEY}`)
  .then((res) => res.json())
  .then((data) => formatForecastResponse(data));

export const loadForecastByCoords = (lat, lon) => (
  fetch(`${URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => formatForecastResponse(data))
);
