import {commonIDs, newStudentFormIDs} from "../../constants/ids.mjs";
import {getAllFormControls} from "./get-all-form-controls.mjs";
import {resetFormErrors} from "./reset-form-errors.mjs";
import {isValidRegExp} from "./is-valid-regexp.mjs";
import {isValidDOB} from "./is-valid-dob.mjs";
import {isValidStartYear} from "./is-valid-start-year.mjs";
import {isYearsValid} from "./is-years-valid.mjs";

export function prepareValidation() {
  const addStudentFormCloseButton = document
    .getElementById(commonIDs.ADD_STUDENT_MODAL)
    .querySelector('.btn-close');
  const addStudentForm = document.getElementById(newStudentFormIDs.NEW_STUDENT_FORM)
  const addStudentFormControls = getAllFormControls(addStudentForm);


  addStudentFormCloseButton.addEventListener('click', () => {
    resetFormErrors(addStudentForm);
  });
  addStudentFormControls.forEach((control) => {
    if (control.tagName === 'INPUT') control.addEventListener('input', () => {
      isValidRegExp(control);

      if (addStudentForm.classList.contains('already-validated')) {
        if (control.id === newStudentFormIDs.NEW_STUDENT_DOB) {
          isValidDOB(control);
        }

        if (control.id === newStudentFormIDs.NEW_STUDENT_START_YEAR) {
          isValidStartYear(control);
        }

        if ((control.id === newStudentFormIDs.NEW_STUDENT_START_YEAR
            || control.id === newStudentFormIDs.NEW_STUDENT_DOB)
          && control.value.length === 4
          && addStudentForm.querySelector('#' + newStudentFormIDs.NEW_STUDENT_DOB).value) {
          isYearsValid();
        }
      }
    });

    if (control.tagName === 'SELECT') control.addEventListener('change', () => {
      isValidRegExp(control);
    });
  })
}
