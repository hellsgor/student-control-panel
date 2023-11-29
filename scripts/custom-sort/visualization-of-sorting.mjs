import {studentsTableIDs} from "../constants/ids.mjs";

export function visualizationOfSorting(clickedSpan) {
  document
    .getElementById(studentsTableIDs.TABLE)
    .querySelectorAll('th .table-column-name')
    .forEach((tableColumnNameElem) => {
      if (tableColumnNameElem !== clickedSpan) {
        tableColumnNameElem.classList.remove('table-column-name_most-to-list');
        tableColumnNameElem.classList.remove('table-column-name_list-to-most');
      }
    })
  return clickedSpan.classList.contains('table-column-name_most-to-list')
    ? (() => {
      clickedSpan.classList.remove('table-column-name_most-to-list');
      clickedSpan.classList.add('table-column-name_list-to-most');
      return true;
    })()
    : (() => {
      clickedSpan.classList.remove('table-column-name_list-to-most');
      clickedSpan.classList.add('table-column-name_most-to-list');
      return false;
    })();
}
