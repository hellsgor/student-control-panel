import {STUDENTS} from "../moc/students-list.mjs";

export function getStudentsList() {
  return STUDENTS
    .map((student, idx) =>
      ({...student, id: idx + 1}));
}
