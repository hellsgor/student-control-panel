export const errors = {
  studentParseErrors: {
    p001: 'Не найдено имя студента',
    p002: 'Не найден факультет студента',
    p003: 'Не найдена дата рождения студента',
    p004: 'Не найдена год начала обучения студента',
  },
  formsErrors: {
    f001: (inputName) => {
      return `Поле "${inputName}" не может быть пустым`;
    },
    f002: (inputName) => {
      return `Поле "${inputName}" заполнено некорректно`;
    },
    f003: (inputName) => {
      return `Значение поля "${inputName}" менее допустимого`;
    },
    f004: (inputName) => {
      return `Значение поля "${inputName}" более допустимого`;
    },
  }
}
