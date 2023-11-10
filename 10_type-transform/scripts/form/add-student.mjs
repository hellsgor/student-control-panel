import {commonIDs, newStudentFormIDs} from "../constants/ids.mjs";
import {formValidation} from "./form-utils/validation.mjs";
import {resetFormErrors} from "./form-utils/reset-form-errors.mjs";
import {serializeForm} from "./form-utils/serialize-form.mjs";
import {getMaxID} from "../table/get-max-ID.mjs";
import {renderStudentsTable} from "../table/render-students-table.mjs";
import {clearFormControls} from "./form-utils/clear-form-controls.mjs";
import {customSort} from "../custom-sort/custom-sort.mjs";
import {findSortColumnID} from "../custom-sort/find-sort-column-id.mjs";
import {getSortingProperty} from "../custom-sort/get-sorting-property.mjs";

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
  const findSortResult = findSortColumnID();
  renderStudentsTable(
    customSort(
      newStudentsArray,
      findSortResult.classFlag,
      getSortingProperty(findSortResult.sortedColumnID),
    )
  );
  return newStudentsArray;
}
