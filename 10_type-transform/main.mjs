import {getStudentsList} from "./scripts/get-students-list.mjs";
import {renderStudentsTable} from "./scripts/render-students-table.mjs";
import {
  filtersIDs,
  newStudentFormIDs,
  studentsTableIDs
} from "./scripts/constants/ids.mjs";
import {addStudent} from "./scripts/form/add-student.mjs";
import {
  setFacultyOptions
} from "./scripts/moc/moc-helpers/set-faculty-options.mjs";
import {
  prepareValidation
} from "./scripts/form/form-utils/prepare-validation.mjs";
import {prepareCustomSort} from "./scripts/custom-sort/prepare-custom-sort.mjs";
import {
  visualizationOfSorting
} from "./scripts/custom-sort/visualization-of-sorting.mjs";
import {customSort} from "./scripts/custom-sort/custom-sort.mjs";
import {sortingProperties} from "./scripts/constants/consts.mjs";

const headingsCells = document
  .getElementById(studentsTableIDs.TABLE)
  .querySelectorAll('th .table-column-name');
const addStudentFormButton = document
  .getElementById(newStudentFormIDs.NEW_STUDENT_ADD_BUTTON);

let actualArrayOfStudents = getStudentsList();

setFacultyOptions(document.getElementById(filtersIDs.filtersControls.FACULTY));
setFacultyOptions(document.getElementById(newStudentFormIDs.NEW_STUDENT_FACULTY));
renderStudentsTable(
  customSort(
    actualArrayOfStudents,
    false,
    sortingProperties.NAME,
  )
);
visualizationOfSorting(document
  .getElementById(studentsTableIDs.tableHeadings.FIO)
  .querySelector('.table-column-name'));

addStudentFormButton
  .addEventListener('click', (event) => {
    event.preventDefault();
    prepareValidation();
    actualArrayOfStudents = addStudent(actualArrayOfStudents);
  });
headingsCells.forEach((cell) => {
  cell.addEventListener('click', (event) => renderStudentsTable(
    prepareCustomSort(
      actualArrayOfStudents,
      event.target,
      undefined,
    )
  ))
})


// Этап 5. Создайте функцию сортировки массива студентов и добавьте события кликов на соответствующие колонки.

// Этап 6. Создайте функцию фильтрации массива студентов и добавьте события для элементов формы.
