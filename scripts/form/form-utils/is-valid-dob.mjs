import {constants} from "../../constants/consts.mjs";
import {setValidControlView} from "./set-valid-control-view.mjs";
import {setInvalidControlView} from "./set-invalid-control-view.mjs";
import {errors} from "../../constants/errors.mjs";

export function isValidDOB(control) {
  if (new Date(control.value) > new Date()) {
    return setInvalidControlView(control, errors.formsErrors.f004);
  }
  if (new Date(control.value) < new Date(constants.MIN_DOB)) {
    return setInvalidControlView(control, errors.formsErrors.f003);
  }
  if (new Date(control.value) <= new Date()
    && new Date(control.value) >= new Date(constants.MIN_DOB)) {
    return setValidControlView(control);
  }
}
