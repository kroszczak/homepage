

const days = ['pon', 'wt', 'sr', 'czw', 'pt', 'sob', 'nd'];

const getWeather = async () => {
  const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Poznan&units=metric&appid=${API_KEY_WEATHER}`);

  const response = await api_call.json();

  const today = new Date(response.dt * 1000);
  const day  = days[today.getUTCDay() - 1];
  const tempMax = Math.round(response.main.temp_max);
  const tempMin = Math.round(response.main.temp_min);
  const weatherIcon = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
  let month = today.getMonth() + 1; 

  month = String(month).padStart(2,'0');
  
  document.querySelector('#icon').innerHTML =  `<img src = "${weatherIcon}"></img>`;
  document.querySelector('#date').innerHTML = today.getDate() + '.' + month + '.' + today.getFullYear();
  document.querySelector('#temp_min').innerHTML = tempMin + "&deg;C";
  document.querySelector('#temp_max').innerHTML = tempMax + "&deg;C";;
  console.log(today);
};

getWeather();