import {newStudentFormIDs} from "../constants/ids.mjs";
import {formValidation} from "./form-utils/validation.mjs";
import {resetFormErrors} from "./form-utils/reset-form-errors.mjs";

export function addStudent(event) {
  event.preventDefault();

  const form = document.getElementById(newStudentFormIDs.NEW_STUDENT_FORM);

  if (!form.classList.contains('already-validated')) form
    .classList.add('already-validated');

  resetFormErrors(form);
  if (!formValidation(form)) {
    console.log('не ok');
    return;
  }
  console.log('ok');
}
