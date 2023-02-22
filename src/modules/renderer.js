import { updateCurrentWeather } from "./weatherToday";
import { updateWeatherForcast } from "./weatherForcast";
import { updateGeoCoding } from "./geocoding";

function renderWeather(current, forecast) {
  updateCurrentWeather(current);
  updateWeatherForcast(forecast);
}

function renderGeocoding(location) {
  updateGeoCoding(location);
}

export { renderWeather, renderGeocoding };
