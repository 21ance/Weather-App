import { renderWeather, renderGeocoding } from "./renderer";

const FORECAST_WEATHER = "https://api.openweathermap.org/data/2.5/forecast?q=";
const CURRENT_WEATHER = "https://api.openweathermap.org/data/2.5/weather?q=";
const GEOCODING = "http://api.openweathermap.org/geo/1.0/direct?q=";
const API_KEY = "&APPID=28c57ffd486c8684f804fc9a6681f59a&units=";
// let location = "Manila";
// let units = "metric";

async function fetchWeather(location, units) {
  // https://openweathermap.org/current
  const currentResponse = await fetch(
    `${CURRENT_WEATHER}${location}${API_KEY}${units}`
  );
  const currentWeather = await currentResponse.json();

  // https://openweathermap.org/forecast5
  const forecastResponse = await fetch(
    `${FORECAST_WEATHER}${location}${API_KEY}${units}`
  );
  const forecastWeather = await forecastResponse.json();

  renderWeather(currentWeather, forecastWeather);
}

async function fetchLocation(location) {
  const response = await fetch(`${GEOCODING}${location}&limit=5${API_KEY}`);
  const locations = await response.json();

  renderGeocoding(locations);
}

export { fetchWeather, fetchLocation };
