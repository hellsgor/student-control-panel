import {getStudentsList} from "./scripts/get-students-list.mjs";
import {renderStudentsTable} from "./scripts/render-students-table.mjs";
import {commonIDs, newStudentFormIDs} from "./scripts/constants/ids.mjs";
import {addStudent} from "./scripts/form/add-student.mjs";
import {setFacultyOptions} from "./scripts/set-faculty-options.mjs";
import {resetFormErrors} from "./scripts/form/form-utils/reset-form-errors.mjs";
import {
  getAllFormControls
} from "./scripts/form/form-utils/get-all-form-controls.mjs";
import {isValidRegExp} from "./scripts/form/form-utils/is-valid-regexp.mjs";
import {isValidDOB} from "./scripts/form/form-utils/is-valid-dob.mjs";
import {
  isValidStartYear
} from "./scripts/form/form-utils/is-valid-start-year.mjs";
import {isYearsValid} from "./scripts/form/form-utils/is-years-valid.mjs";

const addStudentFormButton = document
  .getElementById(newStudentFormIDs.NEW_STUDENT_ADD_BUTTON);
const addStudentFormCloseButton = document
  .getElementById(commonIDs.ADD_STUDENT_MODAL)
  .querySelector('.btn-close');
const addStudentForm = document.getElementById(newStudentFormIDs.NEW_STUDENT_FORM)
const addStudentFormControls = getAllFormControls(addStudentForm);
const studentsList = getStudentsList();

setFacultyOptions();
renderStudentsTable(studentsList);
addStudentFormButton
  .addEventListener('click', (event) =>
    addStudent(event));
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

// Этап 5. К форме добавления студента добавьте слушатель события отправки формы, в котором будет проверка введенных данных.Если проверка пройдет успешно, добавляйте объект с данными студентов в массив студентов и запустите функцию отрисовки таблицы студентов, созданную на этапе 4.

// Этап 5. Создайте функцию сортировки массива студентов и добавьте события кликов на соответствующие колонки.

// Этап 6. Создайте функцию фильтрации массива студентов и добавьте события для элементов формы.
