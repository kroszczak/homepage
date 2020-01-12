

const days = ['pon', 'wt', 'sr', 'czw', 'pt', 'sob', 'nd'];

const getWeather = async () => {
  const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Poznan&units=metric&appid=${API_KEY_WEATHER}`);

  const response = await api_call.json();

  const date = new Date(response.dt * 1000);
  const day  = days[date.getDay() - 1];
  const maxTemp = Math.round(response.main.temp_max);
  const tempMin = Math.round(response.main.temp_min);
  const weatherIcon = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
};

getWeather();