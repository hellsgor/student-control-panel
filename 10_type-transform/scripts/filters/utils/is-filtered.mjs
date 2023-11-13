import {isFilterControlValid} from "./is-filter-control-valid.mjs";
import {customFilter} from "../custom-filter.mjs";

export function isFiltered(students, controls) {
  controls.forEach((control) => {
    if (isFilterControlValid(control)) {
      students = customFilter(students, control);
    }
  })
  return students;
}
