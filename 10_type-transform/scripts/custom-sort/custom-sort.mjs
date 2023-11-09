import {sortingProperties} from "../constants/consts.mjs";

export function customSort(array, classFlag, sortingProperty) {
  return array.sort((a, b) => {
    let aStr = (sortingProperty === sortingProperties.NAME)
      ? `${a.surname} ${a.name} ${a.patronymic}`
      : a[`${sortingProperty}`];
    let bStr = (sortingProperty === sortingProperties.NAME)
      ? `${b.surname} ${b.name} ${b.patronymic}`
      : b[`${sortingProperty}`];

    if (aStr === bStr) {
      aStr = `${a.surname} ${a.name} ${a.patronymic}`;
      bStr = `${b.surname} ${b.name} ${b.patronymic}`;
    }
    if (classFlag) {
      if (aStr < bStr) return 1;
      if (aStr > bStr) return -1;
    } else {
      if (aStr > bStr) return 1;
      if (aStr < bStr) return -1;
    }
  })
}
