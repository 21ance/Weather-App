import { fetchWeather } from "./apiFunctions";

const description = document.querySelector("h1");
const city = document.querySelector(".current-weather-left>span:nth-child(2)");
const country = document.querySelector(
  ".current-weather-left>span:nth-child(3)"
);
const temperature = document.querySelector(
  ".current-weather-left>span:nth-child(4)"
);
const weatherIcon = document.querySelector(".current-weather-left>img");

fetchWeather();
