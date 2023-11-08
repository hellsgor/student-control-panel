import {newStudentFormIDs} from "../constants/ids.mjs";
import {formValidation} from "./form-utils/validation.mjs";
import {resetFormErrors} from "./form-utils/reset-form-errors.mjs";
import {serializeForm} from "./form-utils/serialize-form.mjs";
import {getStudentsList} from "../get-students-list.mjs";
import {getMaxID} from "../utils/get-max-ID.mjs";
import {renderStudentsTable} from "../render-students-table.mjs";

export function addStudent() {

  const form = document.getElementById(newStudentFormIDs.NEW_STUDENT_FORM);

  if (!form.classList.contains('already-validated')) form
    .classList.add('already-validated');

  resetFormErrors(form);
  if (!formValidation(form)) {
    return;
  }
  const data = serializeForm(form);
  const studentsList = getStudentsList();
  data.id = getMaxID(studentsList) + 1;

  renderStudentsTable(studentsList.concat(data));
}
