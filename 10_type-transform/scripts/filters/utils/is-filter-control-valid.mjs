import {filtersIDs} from "../../constants/ids.mjs";
import {addFilteredClass} from "./add-filtered-class.mjs";

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
  return addFilteredClass(control, controlValueLength);
}
