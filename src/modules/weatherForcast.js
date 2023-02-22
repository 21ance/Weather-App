import { createForcast } from "./dom";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

function updateWeatherForcast(weatherData) {
  console.log(weatherData);

  for (let i = 0; i < weatherData.list.length; i++) {
    let convertedTime = parseISO(weatherData.list[i].dt_txt);

    if (i < 8) {
      createForcast(
        weatherData.list[i].main.temp,
        format(convertedTime, "p"),
        weatherData.list[i].weather[0].icon,
        format(convertedTime, "iiii"),
        format(convertedTime, "MMM, dd")
      );
    } else {
      createForcast(
        weatherData.list[i].main.temp,
        format(convertedTime, "p"),
        weatherData.list[i].weather[0].icon,
        format(convertedTime, "iiii"),
        format(convertedTime, "MMM, dd"),
        "hide"
      );
    }
  }
}

export { updateWeatherForcast };
