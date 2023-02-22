import { displaySuggestion } from "./dom";

function updateGeoCoding(location) {
  for (let i = 0; i < location.length; i++) {
    if (location[i].state === undefined) {
      displaySuggestion(`${location[i].name}, ${location[i].country}`);
    } else {
      displaySuggestion(
        `${location[i].name}, ${location[i].state}, ${location[i].country}`
      );
    }
  }
}

export { updateGeoCoding };
