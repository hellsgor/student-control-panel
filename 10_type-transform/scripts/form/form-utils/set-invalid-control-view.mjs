import {showErrorText} from "./show-error-text.mjs";

export function setInvalidControlView(control, errorFunction, secondControl = undefined) {
  control.closest('.input-group')
    .querySelector('.invalid-feedback')
    .innerHTML = '';
  showErrorText(
    control,
    control.closest('.input-group'),
    errorFunction,
    secondControl
      ? secondControl.closest('.input-group').querySelector('.input-group-text').textContent
      : undefined,
  );
  control.classList.remove('is-valid');
  control.classList.add('is-invalid');
  return false;
}
