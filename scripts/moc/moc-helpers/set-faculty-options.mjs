import {FACULTY} from "../faculty.mjs";

export function setFacultyOptions(facultiesSelector) {
  FACULTY
    .slice()
    .sort()
    .forEach((faculty) => {
      const option = document.createElement('option');
      option.value = option.textContent = faculty;
      facultiesSelector.append(option);
    });
}
