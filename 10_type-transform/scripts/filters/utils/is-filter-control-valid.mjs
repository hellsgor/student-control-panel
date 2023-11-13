import {filtersIDs} from "../../constants/ids.mjs";

export function isFilterControlValid(control) {
  let controlValueLength;
  if (control.tagName === 'SELECT') {
    controlValueLength = 2;
  } else {
    if (control.id === filtersIDs.filtersControls.STUDY_START || control.id === filtersIDs.filtersControls.STUDY_FINISH) {
      controlValueLength = 4;
    } else {
      controlValueLength = 3;
    }
  }
  if (control.value.length >= controlValueLength) {
    control.classList.add('filtered');
    return true;
  } else {
    control.classList.remove('filtered');
    return false;
  }
}
