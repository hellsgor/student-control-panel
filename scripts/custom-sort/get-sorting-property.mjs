import {sortingProperties} from "../constants/consts.mjs";
import {studentsTableIDs} from "../constants/ids.mjs"

export function getSortingProperty(sortingColumnID) {
  switch (sortingColumnID) {
    case (studentsTableIDs.tableHeadings.FACULTY):
      return sortingProperties.FACULTY;
    case (studentsTableIDs.tableHeadings.DOB):
      return sortingProperties.DOB;
    case (studentsTableIDs.tableHeadings.STUDY):
      return sortingProperties.START_STUDIES_YEAR;
    default:
      return sortingProperties.NAME;
  }
}
