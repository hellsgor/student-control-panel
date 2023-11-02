import {getStudentsList} from "./scripts/get-students-list.mjs";
import {renderStudentsTable} from "./scripts/render-students-table.mjs";
import {commonIDs, newStudentFormIDs} from "./scripts/constants/ids.mjs";
import {addStudent} from "./scripts/form/add-student.mjs";
import {setFacultyOptions} from "./scripts/set-faculty-options.mjs";
import {resetErrors} from "./scripts/form/form-utils/reset-errors.mjs";

const addStudentFormButton = document
  .getElementById(newStudentFormIDs.NEW_STUDENT_ADD_BUTTON);
const addStudentFormCloseButton = document
  .getElementById(commonIDs.ADD_STUDENT_MODAL)
  .querySelector('.btn-close');

const studentsList = getStudentsList();

setFacultyOptions();

renderStudentsTable(studentsList);

addStudentFormButton
  .addEventListener('click', (event) =>
    addStudent(event));

addStudentFormCloseButton.addEventListener('click', () =>
  resetErrors(document.getElementById(newStudentFormIDs.NEW_STUDENT_FORM)));


// Этап 5. К форме добавления студента добавьте слушатель события отправки формы, в котором будет проверка введенных данных.Если проверка пройдет успешно, добавляйте объект с данными студентов в массив студентов и запустите функцию отрисовки таблицы студентов, созданную на этапе 4.

// Этап 5. Создайте функцию сортировки массива студентов и добавьте события кликов на соответствующие колонки.

// Этап 6. Создайте функцию фильтрации массива студентов и добавьте события для элементов формы.
