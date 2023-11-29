import {newStudentFormIDs} from "../../constants/ids.mjs";

export function serializeForm(form) {
  return {
    name: form.querySelector('#' + newStudentFormIDs.NEW_STUDENT_NAME).value.trim(),
    surname: form.querySelector('#' + newStudentFormIDs.NEW_STUDENT_SURNAME).value.trim(),
    patronymic: form.querySelector('#' + newStudentFormIDs.NEW_STUDENT_PATRONYMIC).value.trim(),
    dob: new Date(form.querySelector('#' + newStudentFormIDs.NEW_STUDENT_DOB).value.trim()),
    startStudiesYear: Number(form.querySelector('#' + newStudentFormIDs.NEW_STUDENT_START_YEAR).value.trim()),
    faculty: form.querySelector('#' + newStudentFormIDs.NEW_STUDENT_FACULTY).value.trim(),
  }
}
