import {isFilterControlValid} from "./is-filter-control-valid.mjs";
import {customFilter} from "../custom-filter.mjs";
import {addFilteredClass} from "./add-filtered-class.mjs";
import {showFiltersClearButton} from "./show-filters-clear-button.mjs";

export function isFiltered(students, controls) {
  controls.forEach((control) => {
    const isFilterControlValidResult = isFilterControlValid(control);
    if (isFilterControlValidResult) {
      students = customFilter(students, control);
    }
    addFilteredClass(control, isFilterControlValidResult);
    showFiltersClearButton();
  })
  return students;
}
