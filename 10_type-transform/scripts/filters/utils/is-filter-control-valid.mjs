import {filtersIDs} from "../../constants/ids.mjs";
import {
  getExpectControlValueLength
} from "./get-expect-control-value-length.mjs";

export function isFilterControlValid(control) {
  if (control.id === filtersIDs.filtersControls.STUDY_START
    || control.id === filtersIDs.filtersControls.STUDY_FINISH) {
    return control.value.trim().length === getExpectControlValueLength(control.id);
  }

  if (control.id === filtersIDs.filtersControls.FIO
    || control.id === filtersIDs.filtersControls.FACULTY) {
    return control.value.trim().length >= getExpectControlValueLength(control.id);
  }
}
