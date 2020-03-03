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
    temp: kelvinToCelsius(temp),
    day: getCurrentDayName(),
  };
};

const formatForecastResponse = ({ list = [] }) => {
  const getDate = (item) => item.dt_txt.split(' ')[0];

  const sortedList = [];
  let tmp = [];

  list.forEach((item, i) => {
    const date = getDate(item);
    const nextDate = i ? getDate(list[i - 1]) : null;

    if ((date !== nextDate) && (tmp.length !== 0)) {
      sortedList.push(tmp);
      tmp = [];
    }

    tmp.push(item);
  });

  const formattedList = sortedList.map((dayForecast) => {
    const avgTemp = dayForecast.reduce((prevTemp, day) => {
      const { main: { temp_min, temp_max } } = day;

      return {
        min: prevTemp.min + temp_min,
        max: prevTemp.max + temp_max,
      };
    }, { min: 0, max: 0 });

    const tempmin = avgTemp.min / dayForecast.length;
    const tempMax = avgTemp.max / dayForecast.length;
    console.log(dayForecast.length);


    return {
      tempmin,
      tempMax,
    };
  });

  console.log(formattedList);
};

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
  .then((data) => {
    formatForecastResponse(data);


    return data;
  });
