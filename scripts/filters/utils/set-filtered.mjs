import {renderStudentsTable} from "../../table/render-students-table.mjs";
import {customSort} from "../../custom-sort/custom-sort.mjs";
import {isFiltered} from "./is-filtered.mjs";
import {getSortingProperty} from "../../custom-sort/get-sorting-property.mjs";

export function setFiltered(studentsArray, filtersControls, sortResult) {
  return renderStudentsTable(
    customSort(
      isFiltered(studentsArray, filtersControls),
      sortResult.classFlag,
      getSortingProperty(sortResult.sortedColumnID),
    )
  );
}
