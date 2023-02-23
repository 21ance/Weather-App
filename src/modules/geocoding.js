import { displaySuggestion, resetSuggestion, displayError } from "./dom";

function updateGeoCoding(location) {
  resetSuggestion();
  for (let i = 0; i < location.length; i++) {
    if (location[i].state === undefined) {
      displaySuggestion(`${location[i].name}, ${location[i].country}`);
    } else {
      displaySuggestion(
        `${location[i].name}, ${location[i].state}, ${location[i].country}`
      );
    }
  }
  if (location[0] === undefined) {
    displayError();
  }
}

export { updateGeoCoding };
