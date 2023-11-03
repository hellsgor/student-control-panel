import {getRegExp} from "./get-reg-exp.mjs";
import {showErrorText} from "./show-error-text.mjs";
import {errors} from "../../constants/errors.mjs";
import {newStudentFormIDs} from "../../constants/ids.mjs";

export function isValidRegExp(control) {
  if (document.getElementById(newStudentFormIDs.NEW_STUDENT_FORM)
    .classList.contains('already-validated')) {

    const regExp = getRegExp(control);

    if (regExp.test(control.value)) {
      control.classList.remove('is-invalid');
      control.classList.add('is-valid');
      return true;
    } else {
      control.classList.remove('is-valid');
      control.classList.add('is-invalid');
      if (control.value) {
        control.closest('.input-group')
          .querySelector('.invalid-feedback')
          .innerHTML = '';
        showErrorText(
          control,
          control.closest('.input-group'),
          errors.formsErrors.f002,
        );
      }
      return false;
    }
  }
}
