import {pluralizer} from "../../node_modules/pluralizer-for-js/pluralizer.mjs";
import {constants} from "./consts.mjs";

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
    f005: (startYearInputName, dobInputName) => {
      return `Значение поля "${startYearInputName}" не может быть меньше значения года поля "${dobInputName}" плюс ${pluralizer(
        constants.MIN_DIFFERENCE_BETWEEN_DOB_YEAR_AND_YEAR_OF_STUDY_START,
        'год',
        'года',
        'лет',
      )}`;
    },
    f006: (startYearInputName, dobInputName) => {
      return `Значение поля "${startYearInputName}" не может быть равным значению года поля "${dobInputName}" плюс ${pluralizer(
        constants.MIN_DIFFERENCE_BETWEEN_DOB_YEAR_AND_YEAR_OF_STUDY_START,
        'год',
        'года',
        'лет',
      )}`;
    },
  }
}
