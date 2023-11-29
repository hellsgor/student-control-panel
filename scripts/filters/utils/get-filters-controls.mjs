import {filtersIDs} from "../../constants/ids.mjs";

export function getFiltersControls() {
  const filtersControlsBlock = document
    .querySelector(`#${filtersIDs.FILTERS_CONTROLS_BLOCK}`);

  return Array.from(filtersControlsBlock.querySelectorAll('input'))
    .concat(Array.from(filtersControlsBlock.querySelectorAll('select')));


}
