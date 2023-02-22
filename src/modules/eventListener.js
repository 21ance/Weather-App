import { fetchWeather } from "./apiFunctions";

const searchForm = document.querySelector("form");
const locationInput = document.querySelector("#locationInput");
const nav = document.querySelector("nav");
const navButtons = document.querySelectorAll("nav>button[data-index]");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchWeather(locationInput.value, "metric");
});

navButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    resetButtons();
    hideForecast();
    navButtons[e.target.dataset.index].classList.add("material-filled");
    switch (e.target.dataset.index) {
      case "0":
        displayForecast(0, 8);
        break;
      case "1":
        displayForecast(8, 16);
        break;
      case "2":
        displayForecast(16, 24);
        break;
      case "3":
        displayForecast(24, 32);
        break;
      case "4":
        displayForecast(32, 40);
        break;
    }
  });
});

function resetButtons() {
  navButtons.forEach((button) => {
    button.classList.remove("material-filled");
  });
}

function hideForecast() {
  const allForecast = document.querySelectorAll(".forecast");

  allForecast.forEach((forecast) => {
    forecast.classList.add("hide");
  });
}

function displayForecast(start, end) {
  const allForecast = document.querySelectorAll(".forecast");

  for (let i = start; i < end; i++) {
    allForecast[i].classList.remove("hide");
  }
}
