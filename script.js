const searchCity = async () => {
  const cityInput = document.getElementById("city-input").value;
  const data = await getWeatherData(cityInput);
  showWeatherData(data);
};

const getWeatherData = (city) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
    },
  };
  return fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, options)
    .then((response) => response.json())
    .then((json) => json)
    .catch((err) => console.error(err));
};
const showWeatherData = (weatherData) => {
  document.getElementById("city-name").innerText = `${weatherData.name}`;
  document.getElementById(
    "weather-type"
  ).innerText = `${weatherData.weather[0].main}`;
  document.getElementById("temp").innerText = `${weatherData.main.temp}`;
  document.getElementById(
    "min-temp"
  ).innerText = `${weatherData.main.temp_min}`;
  document.getElementById(
    "max-temp"
  ).innerText = `${weatherData.main.temp_max}`;
};
