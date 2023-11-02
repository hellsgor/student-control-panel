export const constants = {
  EDUCATION_PERIOD: 4,
}

export const regExps = {
  SURNAME: /^([А-ЯЁ]{1}[а-яё]+-[А-ЯЁ]{1}[а-яё]+|[А-ЯЁ]{1}[а-яё]+)$/,
  NAME_OR_PATRONYMIC: /^[А-ЯЁ]{1}[а-яё]+$/,
  DATE: /\d{4}-\d{2}-\d{2}/,
  START_YEAR: /^\d{4}$/,
}
