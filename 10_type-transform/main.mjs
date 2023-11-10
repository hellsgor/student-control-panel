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
import {
  getSortingProperty
} from "./scripts/custom-sort/get-sorting-property.mjs";
import {customFilter} from "./scripts/filters/custom-filter.mjs";

const headingsCells = document
  .getElementById(studentsTableIDs.TABLE)
  .querySelectorAll('th .table-column-name');
const addStudentFormButton = document
  .getElementById(newStudentFormIDs.NEW_STUDENT_ADD_BUTTON);

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
      actualArrayOfStudents,
      event.target,
      undefined,
    )
  ))
})

setFacultyOptions(document.getElementById(filtersIDs.filtersControls.FACULTY));
getFiltersControls().forEach((control) => {
  control.addEventListener(control.tagName === 'SELECT'
      ? 'change'
      : 'input'
    , () => {
      if (control.value.length >= (control.tagName === 'SELECT' ? 2 : 3)) {
        console.log(control.value);
        const findSortResult = findSortColumnID();
        renderStudentsTable(
          customSort(
            customFilter(actualArrayOfStudents, control),
            findSortResult.classFlag,
            getSortingProperty(findSortResult.sortedColumnID),
          )
        );
      }
    })
})
