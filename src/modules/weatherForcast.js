import { createForcast } from "./dom";

function updateWeatherForcast(weatherData) {
  console.log(weatherData);
  for (let i = 0; i < weatherData.list.length; i++) {
    console.log(weatherData.list[i].main.temp);
    console.log(weatherData.list[i].weather[0].icon);
    console.log(weatherData.list[i].dt_txt);
    createForcast(
      weatherData.list[i].main.temp,
      weatherData.list[i].weather[0].icon,
      weatherData.list[i].dt_txt
    );
  }
}

export { updateWeatherForcast };
