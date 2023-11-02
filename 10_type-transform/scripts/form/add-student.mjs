import {newStudentFormIDs} from "../constants/ids.mjs";
import {formValidation} from "./form-utils/validation.mjs";

export function addStudent(event) {
  event.preventDefault();
  console.log('click');

  const form = document.getElementById(newStudentFormIDs.NEW_STUDENT_FORM);

  const isValid = formValidation(form);
}
