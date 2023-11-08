import {getStudentsList} from "./scripts/get-students-list.mjs";
import {renderStudentsTable} from "./scripts/render-students-table.mjs";
import {newStudentFormIDs} from "./scripts/constants/ids.mjs";
import {addStudent} from "./scripts/form/add-student.mjs";
import {
  setFacultyOptions
} from "./scripts/moc/moc-helpers/set-faculty-options.mjs";
import {
  prepareValidation
} from "./scripts/form/form-utils/prepare-validation.mjs";

const addStudentFormButton = document
  .getElementById(newStudentFormIDs.NEW_STUDENT_ADD_BUTTON);

setFacultyOptions();
renderStudentsTable(getStudentsList());

addStudentFormButton
  .addEventListener('click', (event) => {
    event.preventDefault();
    prepareValidation();
    addStudent(event);
  })


// Этап 5. Создайте функцию сортировки массива студентов и добавьте события кликов на соответствующие колонки.

// Этап 6. Создайте функцию фильтрации массива студентов и добавьте события для элементов формы.
