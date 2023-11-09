import {commonIDs, newStudentFormIDs} from "../constants/ids.mjs";
import {formValidation} from "./form-utils/validation.mjs";
import {resetFormErrors} from "./form-utils/reset-form-errors.mjs";
import {serializeForm} from "./form-utils/serialize-form.mjs";
import {getMaxID} from "../utils/get-max-ID.mjs";
import {renderStudentsTable} from "../render-students-table.mjs";
import {clearFormControls} from "./form-utils/clear-form-controls.mjs";

export function addStudent(actualArrayOfStudents) {
  const form = document.getElementById(newStudentFormIDs.NEW_STUDENT_FORM);

  if (!form.classList.contains('already-validated')) form
    .classList.add('already-validated');

  resetFormErrors(form);
  if (!formValidation(form)) {
    return actualArrayOfStudents;
  }
  const data = serializeForm(form);

  data.id = getMaxID(actualArrayOfStudents) + 1;

  resetFormErrors(form);
  clearFormControls(form);
  form.classList.remove('already-validated');
  document.getElementById(commonIDs.ADD_STUDENT_MODAL)
    .querySelector('button.btn-close').click();

  const newStudentsArray = actualArrayOfStudents.concat(data);
  renderStudentsTable(newStudentsArray);
  return newStudentsArray;
}
