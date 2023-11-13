import {filtersIDs} from "../constants/ids.mjs";

export function customFilter(students, control) {
  if (control.id === filtersIDs.filtersControls.FIO) {
    return students.filter((student) =>
      `${student.surname} ${student.name} ${student.patronymic}`.toLowerCase()
        .includes(control.value.toLowerCase()));
  }
  if (control.id === filtersIDs.filtersControls.FACULTY) {
    return students.filter((student) => student.faculty.includes(control.value));
  }
  return students;
}
