import {getStudentItem} from "./get-student-Item.mjs";
import {commonIDs} from "./constants/ids.mjs";

export function renderStudentsTable(studentsArray) {
  const tableBody = document.getElementById(commonIDs.STUDENTS_TABLE_BODY_ID);
  studentsArray.forEach((student) => {
    const studentRow = getStudentItem(student);
    if (!studentRow) {
      return;
    }
    tableBody.appendChild(studentRow);
  })
}
