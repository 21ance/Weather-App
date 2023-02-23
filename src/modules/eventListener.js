import { fetchWeather, fetchLocation } from "./apiFunctions";
import {
  resetSuggestion,
  resetError,
  hideForecast,
  displayForecast,
  resetButtons,
} from "./dom";

const searchSubmit = document.querySelector("form");
const locationInput = document.querySelector("#locationInput");
const navButtons = document.querySelectorAll("nav>button[data-index]");

locationInput.addEventListener("keyup", (e) => {
  fetchInput(e.target.value);
});

locationInput.addEventListener("click", (e) => {
  fetchInput(e.target.value);
});

searchSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
});

function fetchInput(input) {
  // so far, only encountered error when location parameter is empty
  // don't call API if input is emptied
  if (input === "") {
    resetSuggestion();
    return;
  }
  resetError();
  fetchLocation(input);
}

navButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    resetButtons(navButtons);
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

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("search-result")) {
    fetchWeather(e.target.textContent, "metric");
    resetSuggestion();
    locationInput.value = "";
  }

  if (!e.target.classList.contains("search-result")) {
    resetSuggestion();
  }
});
