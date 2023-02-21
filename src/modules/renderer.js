import { updateCurrentWeather } from "./weatherToday";

function renderWeather(current, forecast) {
  updateCurrentWeather(current);
  // console.log(current);
  // console.log(forecast);
}

export { renderWeather };
