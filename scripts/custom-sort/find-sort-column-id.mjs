import {studentsTableIDs} from "../constants/ids.mjs";

export function findSortColumnID() {
  const spans = document.getElementById(studentsTableIDs.TABLE)
    .querySelectorAll('.table-column-name');

  for (let span of spans) {
    if (span.classList.contains('table-column-name_list-to-most')) {
      return {
        elem: span.closest('th').id,
        classFlag: true,
      };
    } else if (span.classList.contains('table-column-name_most-to-list')) {
      return {
        sortedColumnID: span.closest('th').id,
        classFlag: false,
      };
    }
  }
}
