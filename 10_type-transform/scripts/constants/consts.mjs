export const constants = {
  EDUCATION_PERIOD: 4,
  MIN_DOB: '1900-01-01',
  MIN_START_YEAR: 2000,
  MIN_DIFFERENCE_BETWEEN_DOB_YEAR_AND_YEAR_OF_STUDY_START: 16,
}

export const tableColumnsIDs = {
  fio: 'students-fio-column',
  faculty: 'students-faculty-column',
  dob: 'students-dob-column',
  study: 'students-years-of-study'
}

export const regExps = {
  SURNAME: /^([А-ЯЁ]{1}[а-яё]{1,24}-[А-ЯЁ]{1}[а-яё]{1,23}|[А-ЯЁ]{1}[а-яё]{1,49})$/,
  NAME_OR_PATRONYMIC: /^[А-ЯЁ]{1}[а-яё]{1,49}$/,
  DATE: /\d{4}-\d{2}-\d{2}/,
  START_YEAR: /^\d{4}$/,
  FACULTY: /^[А-ЯЁ0-9]([А-яЁё-]|\s|[0-9])+$/,
}
