import {getStudentsList} from "./scripts/get-students-list.mjs";
import {renderStudentsTable} from "./scripts/render-students-table.mjs";
import {newStudentFormIDs} from "./scripts/constants/ids.mjs";
import {addStudent} from "./scripts/form/add-student.mjs";
import {setFacultyOptions} from "./scripts/set-faculty-options.mjs";
import {
  prepareValidation
} from "./scripts/form/form-utils/prepare-validation.mjs";

const addStudentFormButton = document
  .getElementById(newStudentFormIDs.NEW_STUDENT_ADD_BUTTON);

setFacultyOptions();
renderStudentsTable(getStudentsList());

addStudentFormButton
  .addEventListener('click', (event) => {
    event.preventDefault();
    prepareValidation();
    addStudent(event);
  })


// Этап 5. К форме добавления студента добавьте слушатель события отправки формы, в котором будет проверка введенных данных.Если проверка пройдет успешно, добавляйте объект с данными студентов в массив студентов и запустите функцию отрисовки таблицы студентов, созданную на этапе 4.

// Этап 5. Создайте функцию сортировки массива студентов и добавьте события кликов на соответствующие колонки.

// Этап 6. Создайте функцию фильтрации массива студентов и добавьте события для элементов формы.
