import {catchError} from "./catch-error.mjs";
import {errors} from "../constants/errors.mjs";
import {addTd} from "./add-td.mjs";
import {convertDobToTableTd} from "./convert-dob-to-table-td.mjs";
import {convertEduPeriodToTableTd} from "./convert-edu-period-to-table-td.mjs";

export function getStudentItem(student) {
  const tableRow = document.createElement('tr');

  if (!student.surname || !student.name) {
    catchError(student, errors.studentParseErrors.p001);
    return;
  }

  const studentFullName = student.surname && student.name && student.patronymic
    ? `${student.surname} ${student.name} ${student.patronymic}`
    : `${student.surname} ${student.name}`
  const studentFaculty = student.faculty
    ? student.faculty
    : catchError(student, errors.studentParseErrors.p002);
  const studentAge = student.dob
    ? convertDobToTableTd(student.dob)
    : catchError(student, errors.studentParseErrors.p003);
  const studentEducationYears = student.startStudiesYear
    ? convertEduPeriodToTableTd(student.startStudiesYear)
    : catchError(student, errors.studentParseErrors.p004);

  const newRowTh = document.createElement('th');
  newRowTh.setAttribute('scope', 'row');

  addTd(tableRow, studentFullName, newRowTh);
  addTd(tableRow, studentFaculty);
  addTd(tableRow, studentAge);
  addTd(tableRow, studentEducationYears);

  return tableRow;
}
