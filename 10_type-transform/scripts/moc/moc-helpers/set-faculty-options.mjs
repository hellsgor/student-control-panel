import {FACULTY} from "../faculty.mjs";
import {newStudentFormIDs} from "../../constants/ids.mjs";

export function setFacultyOptions() {
  const facultiesSelector = document.getElementById(newStudentFormIDs.NEW_STUDENT_FACULTY);
  FACULTY
    .slice()
    .sort()
    .forEach((faculty) => {
      const option = document.createElement('option');
      option.value = option.textContent = faculty;
      facultiesSelector.append(option);
    });
}
