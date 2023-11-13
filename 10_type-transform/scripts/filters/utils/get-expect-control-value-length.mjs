import {filtersIDs} from "../../constants/ids.mjs";
import {validFiltersControlsValueLength} from "../../constants/consts.mjs";

export function getExpectControlValueLength(controlID) {
  switch (controlID) {
    case filtersIDs.filtersControls.STUDY_START:
      return validFiltersControlsValueLength.START_YEAR;
    case filtersIDs.filtersControls.STUDY_FINISH:
      return validFiltersControlsValueLength.FINISH_YEAR;
    case filtersIDs.filtersControls.FACULTY:
      return validFiltersControlsValueLength.FACULTY;
    default:
      return validFiltersControlsValueLength.FIO;
  }
}
