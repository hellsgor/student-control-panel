import {getFiltersControls} from "./get-filters-controls.mjs";
import {filtersIDs} from "../../constants/ids.mjs";

export function showFiltersClearButton() {
  const filtersClearButton = document.getElementById(filtersIDs.FILTERS_CLEAR_BUTTON)
  let filteredFlag = false;
  getFiltersControls().forEach((control) => {
    if (control.classList.contains('filtered')) {
      filteredFlag = true;
    }
  });

  if (filteredFlag) {
    filtersClearButton.classList.remove('visually-hidden');
  }
  if (!filteredFlag) {
    filtersClearButton.classList.add('visually-hidden');
  }
}
