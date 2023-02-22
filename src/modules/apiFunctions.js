import { renderWeather } from "./renderer";
import { displayError } from "./dom";

const FORECAST_WEATHER = "https://api.openweathermap.org/data/2.5/forecast?q=";
const CURRENT_WEATHER = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = "&APPID=28c57ffd486c8684f804fc9a6681f59a&units=";
// let location = "Manila";
// let units = "metric";

async function fetchWeather(location, units) {
  try {
    // https://openweathermap.org/current
    const currentResponse = await fetch(
      `${CURRENT_WEATHER}${location}${API_KEY}${units}`
    );
    const currentWeather = await currentResponse.json();

    // https://openweathermap.org/forecast5
    const forcastResponse = await fetch(
      `${FORECAST_WEATHER}${location}${API_KEY}${units}`
    );
    const forcastWeather = await forcastResponse.json();

    renderWeather(currentWeather, forcastWeather);
  } catch (err) {
    displayError();
  }
}

export { fetchWeather };
