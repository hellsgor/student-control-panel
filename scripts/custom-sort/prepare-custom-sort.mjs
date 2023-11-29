import {customSort} from "./custom-sort.mjs";
import {getSortingProperty} from "./get-sorting-property.mjs";
import {visualizationOfSorting} from "./visualization-of-sorting.mjs";

export function prepareCustomSort(array, clickedSpan, sortedColumnID) {

  const operatingSortedColumnID = sortedColumnID
    ? sortedColumnID
    : clickedSpan.closest('th').id;

  const operatingCLickedSpan = clickedSpan
    ? clickedSpan
    : document.getElementById(operatingSortedColumnID)
      .querySelector('.table-column-name');

  const classFlag = visualizationOfSorting(operatingCLickedSpan);

  return customSort(
    array,
    classFlag,
    getSortingProperty(operatingSortedColumnID)
  );
}
