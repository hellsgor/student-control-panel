import {showErrorText} from "./show-error-text.mjs";
import {getAllFormControls} from "./get-all-form-controls.mjs";
import {errors} from "../../constants/errors.mjs";
import {isValidRegExp} from "./is-valid-regexp.mjs";
import {newStudentFormIDs} from "../../constants/ids.mjs";
import {isValidDOB} from "./is-valid-dob.mjs";

export function formValidation(form) {

  const controls = getAllFormControls(form);

  let commonValidationFlag = true;

  controls.forEach((control) => {

    if (!control.value.trim()) {
      showErrorText(
        control,
        control.closest('.input-group'),
        errors.formsErrors.f001,
      );

      commonValidationFlag = false;
    }

    if (!isValidRegExp(control)) {
      if (!control.closest('.input-group')
        .querySelector('.invalid-feedback')
        .querySelectorAll('p')
        .length) {
        showErrorText(
          control,
          control.closest('.input-group'),
          errors.formsErrors.f002,
        )
      }
      commonValidationFlag = false;
    }

    if (control.id === newStudentFormIDs.NEW_STUDENT_DOB) {
      isValidDOB(control);

    }
  })

  return commonValidationFlag;
}
