import {
  displayCurrentWeatherLeft,
  displayCurrentWeatherRight,
  resetError,
} from "./dom";

function updateCurrentWeather(weatherData) {
  resetError();

  displayCurrentWeatherLeft(
    weatherData.weather[0].description,
    weatherData.weather[0].icon,
    weatherData.name,
    weatherData.sys.country,
    weatherData.main.temp
  );

  displayCurrentWeatherRight(
    weatherData.main.feels_like,
    weatherData.main.temp_min,
    weatherData.main.temp_max,
    weatherData.main.humidity,
    weatherData.wind.speed
  );
}

export { updateCurrentWeather };
