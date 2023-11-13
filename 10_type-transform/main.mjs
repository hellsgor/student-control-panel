import {getStudentsList} from "./scripts/table/get-students-list.mjs";
import {renderStudentsTable} from "./scripts/table/render-students-table.mjs";
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
import {
  getFiltersControls
} from "./scripts/filters/utils/get-filters-controls.mjs";
import {findSortColumnID} from "./scripts/custom-sort/find-sort-column-id.mjs";
import {isFiltered} from "./scripts/filters/utils/is-filtered.mjs";
import {setFiltered} from "./scripts/filters/utils/set-filtered.mjs";
import {
  clearFiltersControls
} from "./scripts/filters/utils/clear-filters-controls.mjs";

const headingsCells = document
  .getElementById(studentsTableIDs.TABLE)
  .querySelectorAll('th .table-column-name');
const addStudentFormButton = document
  .getElementById(newStudentFormIDs.NEW_STUDENT_ADD_BUTTON);
const filtersControls = getFiltersControls();
const clearFiltersControlsButton = document
  .getElementById(filtersIDs.FILTERS_CLEAR_BUTTON);

let actualArrayOfStudents = getStudentsList();

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
      isFiltered(actualArrayOfStudents, filtersControls),
      event.target,
      undefined,
    )
  ))
})

setFacultyOptions(document.getElementById(filtersIDs.filtersControls.FACULTY));
filtersControls.forEach((control) => {
  control.addEventListener(control.tagName === 'SELECT'
      ? 'change'
      : 'input'
    , () => {
      setFiltered(
        actualArrayOfStudents,
        filtersControls,
        findSortColumnID());
    })
})

clearFiltersControlsButton.addEventListener('click', () => {
  clearFiltersControls(actualArrayOfStudents, filtersControls);
});
