import {getRegExp} from "./get-reg-exp.mjs";
import {errors} from "../../constants/errors.mjs";
import {newStudentFormIDs} from "../../constants/ids.mjs";
import {setValidControlView} from "./set-valid-control-view.mjs";
import {setInvalidControlView} from "./set-invalid-control-view.mjs";

export function isValidRegExp(control) {
  if (document.getElementById(newStudentFormIDs.NEW_STUDENT_FORM)
    .classList.contains('already-validated')) {

    const regExp = getRegExp(control);

    if (control.value && regExp.test(control.value)) {
      return setValidControlView(control);
    } else {
      return setInvalidControlView(control, errors.formsErrors.f002);
    }
  }
}
