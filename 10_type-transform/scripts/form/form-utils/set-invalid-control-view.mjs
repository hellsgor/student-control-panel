import {showErrorText} from "./show-error-text.mjs";

export function setInvalidControlView(control, errorFunction) {
  control.closest('.input-group')
    .querySelector('.invalid-feedback')
    .innerHTML = '';
  showErrorText(
    control,
    control.closest('.input-group'),
    errorFunction,
  );
  control.classList.remove('is-valid');
  control.classList.add('is-invalid');
  return false;
}
