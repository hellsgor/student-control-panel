import {pluralizer} from "./pluralizer.mjs";

export function convertDobToTableTd(studentDob) {
  const options = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
  }
  const dateFormatter = new Intl.DateTimeFormat('ru-RU', options);

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const age = today < new Date(today.getFullYear(), studentDob.getMonth(), studentDob.getDate())
    ? today.getFullYear() - studentDob.getFullYear() - 1
    : today.getFullYear() - studentDob.getFullYear();

  return `${dateFormatter.format(studentDob)} (${pluralizer(age, 'год', 'года', 'лет')})`;
}
