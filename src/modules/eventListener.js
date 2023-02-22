import { fetchWeather } from "./apiFunctions";

const searchForm = document.querySelector("form");
const locationInput = document.querySelector("#locationInput");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchWeather(locationInput.value, "metric");
});
