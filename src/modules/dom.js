import { resetButtons } from "./eventListener";

const units = "metric";

let temperatureUnit;
let speedUnit;

if (units === "metric") {
  temperatureUnit = "°C";
  speedUnit = "kp/h";
} else {
  temperatureUnit = "°F";
  speedUnit = "mph";
}
// search bar
const searchSuggestions = document.querySelector(".suggestions");
const errorMessage = document.querySelector(".error-message");

function displaySuggestion(text) {
  const suggestionText = document.createElement("a");
  suggestionText.textContent = text;
  suggestionText.classList.add("search-result");

  searchSuggestions.append(suggestionText);
  searchSuggestions.classList.remove("hide");
}

function resetSuggestion() {
  while (searchSuggestions.childElementCount > 0) {
    searchSuggestions.removeChild(searchSuggestions.firstChild);
  }
  searchSuggestions.classList.add("hide");
}

//

function displayError() {
  errorMessage.classList.remove("hide");
  errorMessage.innerHTML = `Please enter a valid city <br> ie: Manila, PH`;
}

function resetError() {
  errorMessage.classList.add("hide");
}

// top, left side - current forcast
const descriptionValue = document.querySelector("h1");
const location = document.querySelector(
  ".current-weather-left>span:nth-child(3)"
);

const tempValue = document.querySelector(
  ".current-weather-left>span:nth-child(5)"
);
const weatherIcon = document.querySelector(".current-weather-left>img");

function displayCurrentWeatherLeft(
  description,
  icon,
  city,
  country,
  temperature
) {
  descriptionValue.textContent = description;
  weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  location.textContent = `${city}, ${country}`;
  tempValue.textContent = `${temperature} ${temperatureUnit}`;
}

// top, right side - current forcast
const feelsLikeValue = document.querySelector(
  ".right-box:nth-child(1) span:nth-child(3)"
);
const maxTempValue = document.querySelector(
  ".right-box:nth-child(2) span:nth-child(3)"
);
const minTempValue = document.querySelector(
  ".right-box:nth-child(3) span:nth-child(3)"
);
const humidityValue = document.querySelector(
  ".right-box:nth-child(4) span:nth-child(3)"
);
const windSpeedValue = document.querySelector(
  ".right-box:nth-child(5) span:nth-child(3)"
);

function displayCurrentWeatherRight(
  feelsLike,
  tempMin,
  tempMax,
  humidity,
  windSpeed
) {
  feelsLikeValue.textContent = `${feelsLike} ${temperatureUnit}`;
  minTempValue.textContent = `${tempMin} ${temperatureUnit}`;
  maxTempValue.textContent = `${tempMax} ${temperatureUnit}`;
  humidityValue.textContent = `${humidity}%`;
  windSpeedValue.textContent = `${windSpeed} ${speedUnit}`;
}

// bottom - 3h 5d forcast
const forecastContainer = document.querySelector(".forecast-container");

function createForcast(temperature, time, icon, day, date, status) {
  const newForcast = document.createElement("div");
  newForcast.classList.add("forecast");
  if (status === "hide") {
    newForcast.classList.add("hide");
  }
  const forecastTemperature = document.createElement("span");
  const forecastIcon = document.createElement("img");
  const forecastTime = document.createElement("span");
  const forecastDay = document.createElement("span");
  const forecastDate = document.createElement("span");

  forecastTemperature.textContent = `${temperature} ${temperatureUnit}`;
  forecastIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  forecastTime.textContent = time;
  forecastDay.textContent = day;
  forecastDate.textContent = date;

  newForcast.append(
    forecastTemperature,
    forecastTime,
    forecastIcon,
    forecastDay,
    forecastDate
  );

  forecastContainer.append(newForcast);
}

const navButtons = document.querySelectorAll("nav>button[data-index]");

function resetForecast() {
  while (forecastContainer.childElementCount > 0) {
    forecastContainer.removeChild(forecastContainer.firstChild);
  }

  resetButtons(navButtons);
  document
    .querySelector("nav button:nth-child(2)")
    .classList.add("material-filled");
}

export {
  displayCurrentWeatherLeft,
  displayCurrentWeatherRight,
  forecastContainer,
  createForcast,
  displayError,
  resetError,
  resetForecast,
  displaySuggestion,
  resetSuggestion,
};
