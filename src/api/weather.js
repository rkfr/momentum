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

const kelvinToCelsius = (k) => (k ? Math.ceil(k - 273.15) : 0);

const getCurrentDayName = () => days[new Date().getDay()];

const formatCurrentWeatherResponse = (responseData) => {
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
    temp: kelvinToCelsius(temp),
    day: getCurrentDayName(),
  };
};

export const getLocation = () => new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(resolve, reject);
})
  .then(({ coords }) => coords);

export const loadCurrentWeather = (location = 'london') => (
  fetch(`${BASE_URL}/weather?q=${location}&appid=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => formatCurrentWeatherResponse(data))
);

export const loadCurrentWeatherByCoords = (lat, lon) => (
  fetch(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => formatCurrentWeatherResponse(data))
);
