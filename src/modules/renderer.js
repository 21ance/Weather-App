import { updateCurrentWeather } from "./weatherToday";
import { updateWeatherForcast } from "./weatherForcast";

function renderWeather(current, forecast) {
  updateCurrentWeather(current);
  updateWeatherForcast(forecast);
}

export { renderWeather };
