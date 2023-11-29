import {newStudentFormIDs} from "../../constants/ids.mjs";
import {regExps} from "../../constants/consts.mjs";

export function getRegExp(control) {
  switch (control.id) {
    case newStudentFormIDs.NEW_STUDENT_SURNAME:
      return regExps.SURNAME;
    case newStudentFormIDs.NEW_STUDENT_NAME:
      return regExps.NAME_OR_PATRONYMIC;
    case newStudentFormIDs.NEW_STUDENT_PATRONYMIC:
      return regExps.NAME_OR_PATRONYMIC;
    case newStudentFormIDs.NEW_STUDENT_DOB:
      return regExps.DATE;
    case newStudentFormIDs.NEW_STUDENT_FACULTY:
      return regExps.FACULTY;
    case newStudentFormIDs.NEW_STUDENT_START_YEAR:
      return regExps.START_YEAR;
    default:
      return /^&/;
  }
}
