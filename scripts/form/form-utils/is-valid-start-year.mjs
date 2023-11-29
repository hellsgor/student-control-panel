import {setInvalidControlView} from "./set-invalid-control-view.mjs";
import {errors} from "../../constants/errors.mjs";
import {constants} from "../../constants/consts.mjs";
import {setValidControlView} from "./set-valid-control-view.mjs";

export function isValidStartYear(control) {
  if (control.value > new Date().getFullYear()) {
    return setInvalidControlView(control, errors.formsErrors.f004);
  }
  if (control.value < constants.MIN_START_YEAR) {
    return setInvalidControlView(control, errors.formsErrors.f003);
  }
  if (control.value <= new Date().getFullYear()
    && control.value >= constants.MIN_START_YEAR) {
    return setValidControlView(control);
  }
}
