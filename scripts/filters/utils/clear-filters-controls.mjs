import {setFiltered} from "./set-filtered.mjs";
import {findSortColumnID} from "../../custom-sort/find-sort-column-id.mjs";

export function clearFiltersControls(actualArrayOfStudents, filtersControls) {
  filtersControls.forEach((control) => {
    control.value = '';
  })
  setFiltered(
    actualArrayOfStudents,
    filtersControls,
    findSortColumnID())
}
