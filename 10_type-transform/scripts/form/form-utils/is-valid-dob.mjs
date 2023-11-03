import {constants} from "../../constants/consts.mjs";
import {newStudentFormIDs} from "../../constants/ids.mjs";
import {setValidControlView} from "./set-valid-control-view.mjs";
import {setInvalidControlView} from "./set-invalid-control-view.mjs";
import {errors} from "../../constants/errors.mjs";

export function isValidDOB(control) {
  if (control.value
    && document.getElementById(newStudentFormIDs.NEW_STUDENT_FORM)
      .classList.contains('already-validated')) {
    if (new Date(control.value) > new Date()) {
      setInvalidControlView(control, errors.formsErrors.f004);
    }
    if (new Date(control.value) < new Date(constants.MIN_DOB)) {
      setInvalidControlView(control, errors.formsErrors.f003);
    }
    if (new Date(control.value) <= new Date()
      && new Date(control.value) >= new Date(constants.MIN_DOB)) {
      setValidControlView(control);
    }
  }
}
