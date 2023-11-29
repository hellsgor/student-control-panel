import {newStudentFormIDs} from "../../constants/ids.mjs";
import {setInvalidControlView} from "./set-invalid-control-view.mjs";
import {errors} from "../../constants/errors.mjs";
import {setValidControlView} from "./set-valid-control-view.mjs";
import {constants} from "../../constants/consts.mjs";
import {isValidStartYear} from "./is-valid-start-year.mjs";

export function isYearsValid() {
  const startYearControl = document.getElementById(newStudentFormIDs.NEW_STUDENT_START_YEAR);
  const startYearValue = Number(startYearControl.value);
  const dobYear = new Date(document.getElementById(newStudentFormIDs.NEW_STUDENT_DOB).value).getFullYear();

  if (isValidStartYear(startYearControl)) {
    if ((startYearValue - constants.MIN_DIFFERENCE_BETWEEN_DOB_YEAR_AND_YEAR_OF_STUDY_START) < dobYear) {
      return setInvalidControlView(
        document.getElementById(newStudentFormIDs.NEW_STUDENT_START_YEAR),
        errors.formsErrors.f005,
        document.getElementById(newStudentFormIDs.NEW_STUDENT_DOB));
    } else if (startYearValue === dobYear) {
      return setInvalidControlView(
        document.getElementById(newStudentFormIDs.NEW_STUDENT_START_YEAR),
        errors.formsErrors.f006,
        document.getElementById(newStudentFormIDs.NEW_STUDENT_DOB));
    } else {
      setValidControlView(document.getElementById(newStudentFormIDs.NEW_STUDENT_START_YEAR));
      return true;
    }
  } else {
    return false;
  }
}
