// left side
const descriptionValue = document.querySelector("h1");
const cityValue = document.querySelector(
  ".current-weather-left>span:nth-child(2)"
);
const countryValue = document.querySelector(
  ".current-weather-left>span:nth-child(3)"
);
const tempValue = document.querySelector(
  ".current-weather-left>span:nth-child(4)"
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
  weatherIcon.src = `http://openweathermap.org/img/w/${icon}.png`;
  cityValue.textContent = city;
  countryValue.textContent = country;
  tempValue.textContent = temperature;
}

// right side
const feelsLikeValue = document.querySelector(
  ".right-box:nth-child(1) span:nth-child(3)"
);
const minTempValue = document.querySelector(
  ".right-box:nth-child(2) span:nth-child(3)"
);
const maxTempValue = document.querySelector(
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
  feelsLikeValue.textContent = feelsLike;
  minTempValue.textContent = tempMin;
  maxTempValue.textContent = tempMax;
  humidityValue.textContent = humidity;
  windSpeedValue.textContent = windSpeed;
}

export { displayCurrentWeatherLeft, displayCurrentWeatherRight };
